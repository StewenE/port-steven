export const ProjectsSection = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            tech: ["Tech 1", "Tech 2", "Tech 3"]
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            tech: ["Tech 1", "Tech 2", "Tech 3"]
        },
        {
            title: "Project 3",
            description: "Description of project 3",
            tech: ["Tech 1", "Tech 2", "Tech 3"]
        },
    ];

    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Projects</h1>
        <div className="space-y-6 opacity-0 animate-fade-in-delay-1">
          {projects.map((project, index) => (
            <div key={index} className="border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-card rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
