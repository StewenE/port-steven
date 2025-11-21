import type { ExperienceItem } from "@/types";

const workExperience: ExperienceItem[] = [
    {
        period: "09/2025 - present",
        title: "Internship Project - Financial Analysis Tool",
        institution: "SEB Bank",
        details: [
            "Developing a financial analysis tool as a web app for internal use",
            "Using web scraping for data and news collection; AI integration for parsing and presenting the data",
            "Learned Python and FastAPI developing the backend, polished my frontend skills with Nuxt and Vue.js",
            "Gained extensive experience creating a professional Git set-up and project structure along with documentation",
        ],
    },
    {
        period: "04/2024 - present",
        title: "Timekeeper & Assistant Organizer",
        institution: "Estonian Autosport Union | RacePlanner",
        details: [
            "Co-implemented a top-tier timekeeping and race control system in 2024",
            "Have actively provided this service for two seasons in the Estonian Karting and Rallycross Championships",
            "Helped set up and implement countless improvements to our arsenal of tools - most notably wireless camera systems, digital flags and a mobile office",
            "Assisted in the logistics and organization of the Estonian Karting Championship events",
            "There is so much more to this job that cannot be summarized in bullet points - check out the links below or learn more from me in person!",
        ],
        extra: [
            { label: "raceplanner.eu", url: "https://raceplanner.eu", style: "raceplanner" },
            { label: "Instagram", url: "https://www.instagram.com/raceplanner/", style: "instagram" },
        ],
    },
];

export const WorkSection = () => {
    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Work Experience</h1>
        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line mb-6 opacity-0 animate-fade-in-delay-1">
          Here is a summary of my job experiences so far. Though it may seem limited, the experiencees I have gained are very diverse and have helped me grow in many ways.

        </p>

        <div className="space-y-8 opacity-0 animate-fade-in-delay-2 border-l-2 border-(--blue-accent)/40">
            {workExperience.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                    <div
                        className={`timeline-dot ${item.period.toLowerCase().includes("present") ? "timeline-dot-latest" : ""}`}
                    />
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
                        {item.extra && item.extra.length > 0 && (
                            <div className="mt-6 space-y-2">
                                <div className="text-sm font-semibold text-foreground/80">
                                    Check out more of what we do at {item.institution.split(" | ")[1] || item.institution}:
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {item.extra.map((extraItem, extraIdx) => (
                                        <a
                                            key={extraIdx}
                                            href={extraItem.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={
                                                extraItem.style === "instagram"
                                                    ? "instagram-button"
                                                    : extraItem.style === "raceplanner"
                                                        ? "raceplanner-button"
                                                        : "gallery-button"
                                            }
                                        >
                                            {extraItem.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </section>
    );
}
