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

import { portfolioDesc } from "@/data/descriptions/portfolio";
import { arvexDesc } from "@/data/descriptions/arveX";
import { rpTimetableDesc } from "@/data/descriptions/rpTimetable";
import type { Project } from "@/types/Project";

const arvexLongDescription = arvexDesc;
const rpTimetableLongDescription = rpTimetableDesc;
const portfolioLongDescription = portfolioDesc;

export const projects: Project[] = [
    {
        id: 3,
        title: "Portfolio Website",
        description: "You're looking at it!",
        longDescription: portfolioLongDescription,
        tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        features: [
            "Navigable sections showcasing my skills, projects, and experience",
            "Detailed descriptions of projects",
            "Links to social profiles and repositories",
        ],
        challenges: [
            "Initial React learning curve",
            "Making a visually appealing and simple design; not a strictly practical design",
            "Layouts of different screen sizes, adjusting responsiveness",
        ],
        learned: [
            "React fundamentals; still a lot to learn here (backend integration)",
            "Screen size responsiveness",
            "Polished my CSS and Tailwind skills",
            "Simple Vercel deployment",
        ],
        links: [
            { type: "link", label: "GitHub", url: "https://github.com/StewenE/port-steven" }
        ],
        timeToDevelop: "22 hours"
    },
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
            { type: "link", label: "GitHub", url: "https://github.com/StewenE/RacePlanner" }
        ],
        timeToDevelop: "110 hours"
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
        ],
        timeToDevelop: "100 hours"
    },
    
];