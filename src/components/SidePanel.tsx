import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
]

interface SidePanelProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export const SidePanel = ({ activeSection, onNavigate }: SidePanelProps) => {
    return (
      <aside className="hidden lg:block sticky top-(--nav-height) min-h-100 border-l border-r border-border p-8">
        <div className="mb-6 text-lg font-semibold">navigation</div>
        <nav className="flex flex-col space-y-4 text-left">
          {navItems.map((item, key) => (
            <button 
              key={key} 
              onClick={() => onNavigate(item.id)}
              className={cn(
                "nav-item text-left transition-all duration-300 hover:translate-x-1 transform",
                activeSection === item.id && "nav-item-active"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>
    );
}