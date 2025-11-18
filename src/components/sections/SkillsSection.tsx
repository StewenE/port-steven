export const SkillsSection = () => {
    const skills = [
        { category: "Backend", items: ["C#", "ASP.NET Core", "Python", "Pytest", "FastAPI", "REST", "PostgreSQL", "Redis", "Celery"] },
        { category: "Frontend", items: ["JavaScript", "TypeScript", "Nuxt", "Vue.js", "React", "CSS", "Tailwind CSS", "HTML"] },
        { category: "Tools & Other Services", items: ["Git", "Docker", "CI/CD", "AWS", "QuestPDF"] },
    ];

    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Skills & Technologies</h1>
        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6">
          My heart belongs to backend development, but I do enjoy seeing code come to life on the frontend as well. 
          Throughout my university studies and personal projects, I have always written code with the goal of learning the most from my experience. 
          For each new project or task I tried to pick at least one technology that I had not used before to expand my skill set. This has helped me grow a respectable collection of skills.</p>
        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6">Here are listed the skills and technologies I find myself comfortable with and have used in at least one project.</p>
        <div className="space-y-12 opacity-0 animate-fade-in-delay-1">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-3">{skillGroup.category}</h2>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="tech-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
