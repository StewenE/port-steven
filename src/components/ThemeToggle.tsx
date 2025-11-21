import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

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

    return (
        <button 
            onClick={toggleTheme}
            className="theme-toggle z-50 lg:mr-2"
            aria-label="Toggle theme"
            type="button"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-(--card-primary) transition-colors duration-300" />
            ) : (
                <Moon className="h-5 w-5 text-(--blue-accent) transition-colors duration-300" />
            )}
        </button>
    ); 
}
