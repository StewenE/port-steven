export const SkillsSection = () => {
    const skills = [
        { category: "Frontend", items: ["F_Skill1", "F_Skill2", "F_Skill3", "F_Skill4"] },
        { category: "Backend", items: ["B_Skill1", "B_Skill2", "B_Skill3", "B_Skill4"] },
        { category: "Tools", items: ["T_Skill1", "T_Skill2", "T_Skill3", "T_Skill4"] },
    ];

    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6">Skills</h1>
        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-3">{skillGroup.category}</h2>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-card rounded-full text-sm"
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
