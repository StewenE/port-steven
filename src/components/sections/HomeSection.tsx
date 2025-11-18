export const HomeSection = () => {
    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Welcome</h1>
        <p className="text-lg mb-4 opacity-0 animate-fade-in-delay-1">
          Hi, I'm Steven. This is my portfolio website.
        </p>
        <p className="text-foreground/80 opacity-0 animate-fade-in-delay-2">
          Navigate through the sections using the sidebar to learn more about my work, skills, and projects.
        </p>
      </section>
    );
}
