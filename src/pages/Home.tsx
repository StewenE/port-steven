import { NavBar } from "@/components/NavBar";
import { IntroSection } from "@/components/IntroSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">         
            <NavBar />

            <main>
                <IntroSection />
            </main>
        </div>
    );
}