import { cn } from "@/lib/utils";
import { useState, useRef, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
]

interface TopBarProps {
    activeSection?: string;
    onNavigate?: (section: string) => void;
}

export const TopBar = ({ activeSection, onNavigate }: TopBarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

    const handleNavigation = (sectionId: string) => {
        if (onNavigate) {
            onNavigate(sectionId);
        }
        setIsMenuOpen(false);
    };

  return (
    <nav 
        ref={navRef}
        className={cn(
        "fixed w-full z-40 transition-all duration-300 min-h-4rem",
        "border-b border-border bg-(--top-bar-bg)",
        "py-(--nav-vpad)"
      )}
      style={{ "--nav-vpad": "1.25rem" } as CSSProperties}

    >   
        <div className="container flex items-center justify-between">
             <div className="flex items-center justify-center lg:side-panel-w lg:border-l border-border self-stretch -my-(--nav-vpad)">
                <button 
                    onClick={() => handleNavigation("home")}
                    className="text-lg md:text-xl font-bold text-primary flex items-center"
                >
                    <span className="relative z-10 ml-4">
                        <span className="title-font">C:</span> 
                        <span className="text-glow text-foreground title-font">\port-steven&gt;</span> 
                        <span className="animate-blink">_</span>
                    </span>
                </button>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8 ">
                <ThemeToggle />
            </div>

            <button 
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-color-foreground z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            > 
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />} </button>

            <div className={cn(
                "mobile-menu lg:hidden",
                isMenuOpen ? "opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <button 
                        key={key} 
                        onClick={() => handleNavigation(item.id)}
                        className={cn(
                            "nav-item",
                            activeSection === item.id && "nav-item-active"
                        )}
                        >
                        {item.name}
                    </button>
                ))}
                <div className="flex justify-center pt-4">
                    <ThemeToggle />
                </div>
            </div>
            </div>
            
        </div>

    </nav>
    );
};