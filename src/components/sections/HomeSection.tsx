import { ArrowRight, Compass, Linkedin, MapPin } from "lucide-react";

const highlights = [
    { label: "Location", value: "Tallinn, Estonia", icon: MapPin, tone: "accent" },
    { label: "Focus", value: "Backend, Data, Automation", tone: "primary" },
    { label: "Availability", value: "Open for opportunities", tone: "secondary" },
];

const sectionCards = [
    { id: "about", title: "About", description: "Where I came from and what drives me." },
    { id: "skills", title: "Skills", description: "Tech stack, tools and where I feel strongest." },
    { id: "projects", title: "Projects", description: "A set of builds and lessons learned." },
    { id: "education", title: "Education", description: "University journey and key takeaways." },
    { id: "work", title: "Work", description: "Hands-on experience and roles I've taken on." },
    { id: "contact", title: "Contact", description: "Quick ways to reach me." },
];

const guidedPath = [
    { id: "about", title: "Start with the story", detail: "Get the context behind my path into tech." },
    { id: "skills", title: "Check the toolkit", detail: "See the technologies I use the most." },
    { id: "projects", title: "Skim the builds", detail: "Get an overview of my projects." },
    { id: "work", title: "Review experience", detail: "Look at real-world roles and outcomes." },
    { id: "contact", title: "Connect", detail: "Get in touch." },
];

type HomeSectionProps = {
    onNavigate?: (section: string) => void;
};

export const HomeSection = ({ onNavigate }: HomeSectionProps) => {
    const handleNavigate = (section: string) => {
        if (onNavigate) {
            onNavigate(section);
        }
    };

    return (
      <section className="p-4 md:p-6 lg:p-8">
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold opacity-0 animate-fade-in">Welcome</h1>
                <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl opacity-0 animate-fade-in-delay-1">
                    I'm Steven. An aspiring backend-heavy developer who likes tidy systems, clear documentation, and projects that mix practicality with a bit of experimentation.
                    Use the quick map below to jump wherever you'd like to explore.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-0 animate-fade-in-delay-2">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="border-2 border-border bg-card/40 p-4 flex items-center gap-3 hover:shadow-lg hover:border-(--card-primary) hover:scale-101 transition-all duration-300"
                        >
                            {item.icon ? <item.icon className="h-5 w-5 text-(--blue-accent)" /> : null}
                            <div>
                                <div className="text-sm text-foreground/70">{item.label}</div>
                                <div className="text-lg font-semibold text-(--card-primary)">{item.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4 opacity-0 animate-fade-in-delay-2">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <h2 className="text-2xl font-semibold">Explore the sections</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {sectionCards.map((section) => (
                        <div
                            key={section.id}
                            className="group border-2 border-border bg-card/40 p-5 flex flex-col justify-between hover:shadow-lg hover:border-(--card-primary) hover:scale-101 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-xl font-semibold">{section.title}</h3>
                                    <p className="text-foreground/80 text-sm mt-2">{section.description}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleNavigate(section.id)}
                                className="nav-button mt-6 inline-flex items-center gap-2 text-sm px-3 py-2 self-start"
                            >
                                Open section
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 opacity-0 animate-fade-in-delay-3">
                <div className="border-2 border-border bg-card/40 hover:shadow-lg hover:border-(--card-primary) hover:scale-101 transition-all duration-300 p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <Compass className="h-5 w-5 text-(--blue-accent)" />
                        <h3 className="text-xl font-semibold">Guided path</h3>
                    </div>
                    <div className="border-l-2 border-(--blue-accent)/40 space-y-5 pl-4">
                        {guidedPath.map((step) => (
                            <div key={step.id} className="relative pl-4">
                                <div className="timeline-dot " style={{ left: "-1.55rem" }} />
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span 
                                          className="text-lg font-semibold hover:text-(--blue-accent) hover:underline hover:cursor-pointer transition-colors" 
                                          onClick={() => handleNavigate(step.id)} >{step.title}</span>
                                    </div>
                                    <p className="text-sm text-foreground/80 leading-relaxed">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-2 border-border bg-card/40 hover:shadow-lg hover:border-(--card-primary) hover:scale-101 transition-all duration-300 p-5">
                    <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold">Social quick actions</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://www.linkedin.com/in/stevenernits"
                            target="_blank"
                            rel="noreferrer"
                            className="gallery-button inline-flex items-center gap-2 text-sm"
                        >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/StewenE"
                            target="_blank"
                            rel="noreferrer"
                            className="repo-button inline-flex items-center gap-2 text-sm"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
