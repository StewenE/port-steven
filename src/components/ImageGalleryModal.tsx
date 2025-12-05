import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import type { ImageGalleryModalProps } from "@/types/Project";

export const ImageGalleryModal = ({ isOpen, onClose, images, title }: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const [lastIsOpen, setLastIsOpen] = useState(isOpen);

  if (isOpen !== lastIsOpen) {
    setLastIsOpen(isOpen);
    if (isOpen) {
      setCurrentIndex(0);
    }
  }

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] lg:max-w-[1200px] xl:max-w-[1600px] flex items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="hidden md:flex shrink-0"> 
            {images.length > 1 ? (
                <button 
                    onClick={prevImage}
                    className="p-1 rounded-full transition-all text-foreground/70 hover:text-accent hover:bg-primary/20"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={42} /> 
                </button>
            ) : (
                <div className="w-20" /> 
            )}
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">

            <div className="flex justify-between items-end w-full text-foreground px-1">
                <div className="text-xl md:text-2xl flex items-baseline gap-3">
                    <span className="font-semibold">{title}</span>
                    <span className="text-primary text-sm md:text-base font-normal">
                        ({currentIndex + 1} / {images.length})
                    </span>
                     <span className="text-lg md:text-xl font-normal">{images[currentIndex].title}</span>
                </div>
                
                <button 
                    onClick={onClose}
                    className="text-foreground/70 hover:text-accent transition-colors p-1 rounded-full hover:bg-secondary/50"
                >
                    <X size={32} />
                </button>
            </div>

            <div className="relative flex items-center justify-center rounded-lg overflow-hidden bg-black/5 shadow-2xl max-h-[85vh]">
                {images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="md:hidden absolute left-2 z-10 p-2 rounded-full bg-background/50 backdrop-blur-md text-foreground shadow-lg">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextImage} className="md:hidden absolute right-2 z-10 p-2 rounded-full bg-background/50 backdrop-blur-md text-foreground shadow-lg">
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                <img
                  src={images[currentIndex].src}
                  alt={`Project screenshot ${currentIndex + 1}`}
                  className="h-full w-auto max-h-[70vh] max-w-full object-contain"
                />
            </div>

            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-1">
                    {images.map((_, idx) => (
                        <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                                ? "w-8 bg-accent" 
                                : "w-2 bg-border hover:bg-primary"
                        }`}
                        />
                    ))}
                </div>
            )}
        </div>

        <div className="hidden md:flex shrink-0">
            {images.length > 1 ? (
                <button 
                    onClick={nextImage}
                    className="p-1 rounded-full transition-all text-foreground/70 hover:text-accent hover:bg-primary/20"
                    aria-label="Next image"
                >
                    <ChevronRight size={42} />
                </button>
            ) : (
                <div className="w-20" />
            )}
        </div>

      </div>
    </div>
  );
};