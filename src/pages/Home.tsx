import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { SidePanel } from "@/components/SidePanel";
import { NavigationButtons } from "@/components/NavigationButtons";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Home = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isProjectSelected, setIsProjectSelected] = useState(false);

    const handleNavigate = (section: string) => {
        setActiveSection(section);
        setIsProjectSelected(false);
    };

    const renderSection = () => {
        switch (activeSection) {
            case "home":
                return <HomeSection />;
            case "about":
                return <AboutSection />;
            case "skills":
                return <SkillsSection />;
            case "projects":
                return <ProjectsSection onProjectSelect={setIsProjectSelected} />;
            case "contact":
                return <ContactSection />;
            default:
                return <HomeSection />;
        }
    };

    return (
        <div className="min-h-1000 bg-background text-foreground overflow-x-hidden ">
            <TopBar 
                activeSection={activeSection}
                onNavigate={handleNavigate}
            />
            <div className="container pt-(--nav-height) lg:pt-(--nav-height)">
                <div className="grid grid-cols-1 lg:grid-cols-[var(--side-panel-width)_1fr] gap-0">
                    <SidePanel 
                        activeSection={activeSection} 
                        onNavigate={handleNavigate}
                    />
                    <div className="relative h-[calc(100vh-var(--nav-height))] overflow-y-auto pt-8 lg:pt-0">
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 right-0 w-0 lg:border-r border-border z-10"
                        />
                        <div key={activeSection}>
                            {renderSection()}
                            {!isProjectSelected && (
                                <NavigationButtons 
                                    activeSection={activeSection}
                                    onNavigate={handleNavigate}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}