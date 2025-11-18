import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = ["home", "about", "skills", "projects", "contact"];

interface NavigationButtonsProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export const NavigationButtons = ({ activeSection, onNavigate }: NavigationButtonsProps) => {
    const currentIndex = sections.indexOf(activeSection);
    const isFirst = currentIndex === 0;

    const handlePrevious = () => {
        if (!isFirst) {
            onNavigate(sections[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        const nextIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1;
        onNavigate(sections[nextIndex]);
    };

    return (
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 pb-8">
            {!isFirst && (
                <button
                    onClick={handlePrevious}
                    className="nav-button flex items-center gap-2"
                >
                    <ChevronLeft className="h-5 w-5" />
                    Previous
                </button>
            )}
            {isFirst && <div />}
            <button
                onClick={handleNext}
                className="nav-button flex items-center gap-2"
            >
                Next
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    );
}
