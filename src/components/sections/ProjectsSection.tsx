import { useState } from "react";
import { ChevronLeft } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    challenges: string[];
    learned: string[];
    links: { label: string; url: string }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart and checkout.",
        longDescription: "This is a comprehensive e-commerce solution built with React and Node.js. It features a fully functional shopping cart, secure checkout process using Stripe, user authentication, and an admin dashboard for product management. The application is designed to be scalable and performant, handling thousands of products with ease.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        features: [
            "User authentication and authorization",
            "Product search and filtering",
            "Shopping cart and secure checkout",
            "Admin dashboard for inventory management"
        ],
        challenges: [
            "Implementing secure payment processing",
            "Optimizing database queries for large product catalogs",
            "Managing complex state for the shopping cart"
        ],
        learned: [
            "Deepened understanding of React hooks",
            "Experience with Stripe API integration",
            "Best practices for RESTful API design"
        ],
        links: [
            { label: "Live Demo", url: "#" },
            { label: "GitHub Repo", url: "#" }
        ]
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Organize your daily tasks efficiently.",
        longDescription: "A productivity tool designed to help users manage their daily tasks and projects. It includes features like drag-and-drop task organization, deadline reminders, team collaboration tools, and progress tracking. Built with Vue.js and Firebase for real-time updates.",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
        features: [
            "Drag-and-drop task management",
            "Real-time updates with Firebase",
            "Team collaboration and assignment",
            "Deadline notifications"
        ],
        challenges: [
            "Synchronizing state across multiple users in real-time",
            "Implementing intuitive drag-and-drop interactions",
            "Designing a responsive UI for mobile devices"
        ],
        learned: [
            "Mastery of Vue.js reactivity system",
            "Firebase Firestore data modeling",
            "Advanced CSS layout techniques"
        ],
        links: [
            { label: "Live Demo", url: "#" },
            { label: "GitHub Repo", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather updates for any location.",
        longDescription: "An interactive weather dashboard that provides real-time weather data, forecasts, and historical weather information. It integrates with multiple weather APIs to ensure accuracy. Users can save their favorite locations and view detailed weather metrics such as humidity, wind speed, and UV index.",
        tech: ["React", "OpenWeatherMap API", "Chart.js"],
        features: [
            "Real-time weather data visualization",
            "Location search and favorites",
            "5-day weather forecast",
            "Interactive charts for temperature trends"
        ],
        challenges: [
            "Handling API rate limits and errors",
            "Visualizing complex data sets with Chart.js",
            "Managing asynchronous data fetching"
        ],
        learned: [
            "Effective use of third-party APIs",
            "Data visualization techniques",
            "Error handling in React applications"
        ],
        links: [
            { label: "Live Demo", url: "#" },
            { label: "GitHub Repo", url: "#" }
        ]
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal portfolio to showcase skills and projects.",
        longDescription: "A modern, responsive portfolio website designed to showcase professional skills and projects. It features a clean design, smooth animations, and a contact form. Built with Next.js and styled with Tailwind CSS for optimal performance and design flexibility.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        features: [
            "Responsive design for all devices",
            "Smooth page transitions and animations",
            "Contact form with email integration",
            "Dynamic project showcase"
        ],
        challenges: [
            "Creating a unique and personal design",
            "Optimizing performance and SEO",
            "Implementing complex animations"
        ],
        learned: [
            "Next.js routing and server-side rendering",
            "Advanced Tailwind CSS customization",
            "Animation libraries like Framer Motion"
        ],
        links: [
            { label: "Live Demo", url: "#" },
            { label: "GitHub Repo", url: "#" }
        ]
    },
    {
        id: 5,
        title: "Social Media Analytics",
        description: "Analyze social media performance metrics.",
        longDescription: "A powerful analytics tool for social media managers. It aggregates data from various platforms like Twitter, Facebook, and Instagram to provide comprehensive insights into audience engagement, post performance, and follower growth. Includes visual reports and exportable data.",
        tech: ["Python", "Django", "D3.js"],
        features: [
            "Multi-platform data aggregation",
            "Interactive data visualization dashboards",
            "Automated report generation",
            "Trend analysis and forecasting"
        ],
        challenges: [
            "Integrating with multiple social media APIs",
            "Processing large volumes of data efficiently",
            "Creating intuitive data visualizations"
        ],
        learned: [
            "Django backend development",
            "Data processing with Python",
            "Creating custom visualizations with D3.js"
        ],
        links: [
            { label: "Live Demo", url: "#" },
            { label: "GitHub Repo", url: "#" }
        ]
    },
];

export const ProjectsSection = ({ onProjectSelect }: { onProjectSelect?: (isSelected: boolean) => void }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectSelect = (project: Project | null) => {
        setSelectedProject(project);
        onProjectSelect?.(!!project);
    };

    if (selectedProject) {
        return (
            <section className="p-4 md:p-6 lg:p-8 animate-fade-in">
              <></>
                <button 
                    onClick={() => handleProjectSelect(null)}
                    className="mb-6 px-4 py-2 nav-button flex items-center gap-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                    Back to Projects
                </button>
                <div className="p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedProject.title}</h1>
                    <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6">
                        {selectedProject.longDescription}
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, idx) => (
                                <span key={idx} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

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
                            <h3 className="text-xl font-semibold mb-3">Links</h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {selectedProject.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a 
                                            href={link.url} 
                                            className="text-accent hover:underline hover:text-accent/80 transition-colors"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
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
