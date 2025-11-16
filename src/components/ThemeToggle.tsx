import { useEffect,useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    }

    return (<button 
                onClick={toggleTheme} 
                className={cn(
                    "max-sm:hidden z-50 rounded-full transition-colors duration-300",
                    "focus:outline-hidden"
                    )}>
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900"/>}
            </button>) 
}