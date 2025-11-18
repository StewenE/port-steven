export const AboutSection = () => {
    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">About Me</h1>
        <p className="text-lg mb-4 opacity-0 animate-fade-in-delay-1">
          I'm am a ...
        </p>
        <p className="text-foreground/80 mb-4 opacity-0 animate-fade-in-delay-2">
            More text ...
        </p>
        <p className="text-foreground/80 opacity-0 animate-fade-in-delay-3">
          More text ...
        </p>
      </section>
    );
}
