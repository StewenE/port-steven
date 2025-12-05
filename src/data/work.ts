import type { ExperienceItem } from "@/types/Experience";

export const workExperience: ExperienceItem[] = [
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