import type { ExperienceItem } from "@/types";

const education: ExperienceItem[] = [
    {
        period: "2023 - present",
        title: "B.Sc. Business Information Technology",
        institution: "Tallinn University of Technology",
        details: [
            "Focused on software engineering, algorithms, and databases",
            "Put my newly acquired skills to use in personal projects",
            "Participated in numerous team projects developing various kinds of software",
            "Obtained a reasonably high amount of knowledge in business and economics",
        ],
    },
    {
        period: "2020 - 2023",
        title: "High School",
        institution: "Viimsi Gümnaasium",
        details: [
            "Studied in the following module courses: Economics, IT and Engineering",
            "Graduated with a silver medal",
        ],
    },
];

export const EducationSection = () => {
    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Education</h1>
        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6 opacity-0 animate-fade-in-delay-1">
          A quick overview of my academic background and the experiences that shaped my approach to building software.
        </p>
        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6 opacity-0 animate-fade-in-delay-1">
            I always accompanied my studies with personal projects to apply my knowledge in practice. I believe that this individual work has been crucial for my growth and understanding of software development.

        </p>

        <div className="space-y-8 opacity-0 animate-fade-in-delay-2 border-l-2 border-(--blue-accent)/40">
            {education.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                    <div className={`timeline-dot ${idx === 0 ? "timeline-dot-latest" : ""}`} />
                    <div className="border-2 border-border p-6 bg-card/40 hover:shadow-lg hover:border-(--card-primary) transition-all duration-300 md:p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                            <span className="text-sm text-foreground/70">{item.period}</span>
                        </div>
                        <div className="text-(--card-primary) font-medium mb-3">{item.institution}</div>
                        <ul className="list-disc list-inside space-y-2 text-foreground/90">
                            {item.details.map((detail, detailIdx) => (
                                <li key={detailIdx}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </section>
    );
}
