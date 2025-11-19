import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { arvexDesc } from "@/data/descriptions/arveX.ts";
import { rpTimetableDesc } from "@/data/descriptions/rpTimetable.ts";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import type { GalleryImage } from "@/components/ImageGalleryModal";

import addCompany from "@/assets/screenshots/arvex/add-company.png";
import addProduct from "@/assets/screenshots/arvex/add-product.png";
import companyView from "@/assets/screenshots/arvex/company-view.png";
import createInvoice1 from "@/assets/screenshots/arvex/create-invoice-1.png";
import createInvoice2 from "@/assets/screenshots/arvex/create-invoice-2.png";
import history from "@/assets/screenshots/arvex/history.png";
import invoice from "@/assets/screenshots/arvex/invoice.png";

import createSession from "@/assets/screenshots/rpTimetables/create-session.png";
import createdEvent from "@/assets/screenshots/rpTimetables/created-event.png";
import detailsView from "@/assets/screenshots/rpTimetables/details.png";
import eventPdf from "@/assets/screenshots/rpTimetables/event-pdf.png";
import loadEvent from "@/assets/screenshots/rpTimetables/load-event.png";

const arvexLongDescription = arvexDesc;
const rpTimetableLongDescription = rpTimetableDesc;

const buttonClasses: Record<string, string> = {
  open_gallery: "gallery-button",
  view_repo: "repo-button",
};

type ProjectLink = 
    | { type: 'link'; label: string; url: string }
    | { type: 'text'; label: string; content: string }
    | { type: 'button'; label: string; action: string };
interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    challenges: string[];
    learned: string[];
    links: ProjectLink[];
    images: GalleryImage[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "RacePlanner Timetables",
        description: "An attempt to overcome Excel in creating and managing timetables for racing events.",
        longDescription: rpTimetableLongDescription,
        tech: ["C#", "ASP.NET Core", "PostgreSQL", "QuestPDF", "Docker", "AWS", "Nuxt", "Vue.js"],
        features: [
            "User authentication and authorization",
            "Create and manage racing event timetables",
            "Adjustable session timings to accommodate event delays",
            "Load and save event timetables",
        ],
        challenges: [
            "Handling time calculations and adjustments",
            "Creating an intuitive UI",
            "Asynchronous updates for large datasets",
            "AWS deployment",
        ],
        learned: [
            "Got better at time manipulation and calculations which I always found tricky",
            "Improved frontend skills from a technical standpoint",
            "Managed to successfully deploy it to AWS, all features worked as intended",
            "Always maintain a clean project structure from the start, sadly I did not do that here, which is largely why the project was left unfinished",
            "Importance of proper planning and scoping for solo projects - rushed in without a clear plan and ended up overwhelmed",
        ],
        images: [
            { src: detailsView, title: "Setting up an event's details" },
            { src: createSession, title: "Creating a session" },
            { src: createdEvent, title: "Created sessions view" },
            { src: eventPdf, title: "Generated PDF" },
            { src: loadEvent, title: "Loading an existing event timetable" },
        ],
        links: [
            { type: "button", label: "Open Gallery", action: "open_gallery" },
            { type: "link", label: "GitHub Repo", url: "https://github.com/StewenE/RacePlanner" }
        ]
    },
    {
        id: 2,
        title: "Invoice Generator",
        description: "A web application to create and manage invoices developed as a university project.",
        longDescription: arvexLongDescription,
        tech: ["C#", "ASP.NET Core", "PostgreSQL", "QuestPDF","Postman", "Docker", "AWS", "Nuxt", "Vue.js"],
        features: [
            "User authentication and authorization",
            "Create and manage company profiles",
            "Add products/services with pricing",
            "Create invoices with automatic tax and total calculations",
        ],
        challenges: [
            "Understanding Git (first team project)",
            "CI/CD pipeline setup for automated testing and deployment",
            "Learning JavaScript and frontend development from scratch",
            "Managing a larger-scale application structure"
        ],
        learned: [
            "Familiarity with frontend development using Nuxt and Vue.js",
            "Authentication using JWT",
            "Implementing a library like QuestPDF",
            "Dockersizing and AWS deployment"
        ],
        images: [
            { src: addCompany, title: "Adding a Company" },
            { src: addProduct, title: "Adding a Product" },
            { src: companyView, title: "Company View" },
            { src: createInvoice1, title: "Creating an Invoice - Filling out details" },
            { src: createInvoice2, title: "Creating an Invoice - Selecting products" },
            { src: history, title: "Invoice History" },
            { src: invoice, title: "Generated Invoice PDF" }
        ],
        links: [
            { type: "button", label: "Open Gallery", action: "open_gallery" }
        ]
    },
    
];

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
            <section className="p-4 md:p-6 lg:p-8 animate-fade-in">
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
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedProject.title}</h1>
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
                        <div className="p-4">
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
                                                    link.label === "GitHub Repo"
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
