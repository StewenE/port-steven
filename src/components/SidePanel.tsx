import { cn } from "@/lib/utils";
import CV from "@/assets/CV.pdf";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
]

interface SidePanelProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export const SidePanel = ({ activeSection, onNavigate }: SidePanelProps) => {
    return (
      <aside className="hidden lg:block sticky top-(--nav-height) min-h-100 border-l border-r border-border p-8 bg-(--top-bar-bg)">
        <div className="mb-6 text-lg font-semibold">navigation</div>
        <nav className="flex flex-col space-y-4 text-left">
          {navItems.map((item, key) => (
            <button 
              key={key} 
              onClick={() => onNavigate(item.id)}
              className={cn(
                "nav-item text-left",
                activeSection === item.id && "nav-item-active"
              )}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => window.open(CV, "_blank")}
            className="nav-item text-left"
          >
            Resume
          </button>
        </nav>
      </aside>
    );
}