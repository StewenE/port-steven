import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import type { GalleryImage, Project } from "@/types/Project";
import { projects } from "@/data/projects";


const buttonClasses: Record<string, string> = {
  open_gallery: "gallery-button",
  view_repo: "repo-button",
};


export const ProjectsSection = ({ onProjectSelect }: { onProjectSelect?: (isSelected: boolean) => void }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

    const handleProjectSelect = (project: Project | null) => {
        setSelectedProject(project);
        onProjectSelect?.(!!project);
    };

    const handleLinkAction = (action: string, project: Project) => {
        if (action === 'open_gallery') {
            if (project.images && project.images.length > 0) {
                setGalleryImages(project.images);
                setIsGalleryOpen(true);
            } else {
                alert("No images available for this project yet.");
            }
        }
    };

    if (selectedProject) {
        return (
            <section className="md:p-6 lg:p-8 animate-fade-in">
                <ImageGalleryModal 
                    isOpen={isGalleryOpen} 
                    onClose={() => setIsGalleryOpen(false)}
                    images={galleryImages}
                    title={selectedProject.title}
                />
                <button 
                    onClick={() => handleProjectSelect(null)}
                    className="mb-2 px-4 py-2 nav-button flex items-center gap-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                    Back to Projects
                </button>
                <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:justify-between">
                        <h1 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h1>
                        <span
                            className="text-lg text-foreground lg:self-end md:self-start lg:justify-self-end text-right mb-2"
                        >
                            Development time: {selectedProject.timeToDevelop}
                        </span>
                    </div>
                    
                    <h2 className="text-2xl text-(--card-primary) mb-3">{selectedProject.description}</h2>
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, idx) => (
                                <span key={idx} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6">
                        {selectedProject.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-2">
                            <h3 className="text-xl font-semibold mb-3">Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {selectedProject.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {selectedProject.challenges.map((challenge, idx) => (
                                    <li key={idx}>{challenge}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-3">What I Learned</h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {selectedProject.learned.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-3">Resources</h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {selectedProject.links.map((link, idx) => (
                                    <div key={idx}>
                                        {link.type === 'link' && (
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={
                                                    link.label === "GitHub"
                                                        ? "repo-button inline-flex"
                                                        : "text-accent hover:underline"
                                                }
                                            >
                                                {link.label}
                                            </a>
                                        )}

                                        {link.type === 'text' && (
                                            <span className="text-gray-500">
                                                {link.label}: {link.content}
                                            </span>
                                        )}

                                        {link.type === 'button' && (
                                            <button 
                                                onClick={() => handleLinkAction(link.action, selectedProject)}
                                                className={buttonClasses[link.action] || "default-button"}
                                            >
                                                {link.label}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Projects</h1>
        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6">
            A bundle of projects I have worked on independently and in teams. 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 opacity-0 animate-fade-in-delay-1">
          {projects.map((project) => (
            <div 
                key={project.id} 
                className="group projects-grid"
            >
              <h2 className="text-xl text-(--card-primary) font-semibold mb-3 group-hover:text-(--hover-text) transition-colors">{project.title}</h2>
              <p className="text-(--card-secondary) mb-4 grow text-sm">{project.description}</p>
              <div className="mt-auto flex justify-end">
                  <button 
                    onClick={() => handleProjectSelect(project)}
                    className="text-primary rounded hover:text-(--card-primary) hover:underline transition-colors text-sm font-medium cursor-pointer"
                  >
                    Learn More...
                  </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
