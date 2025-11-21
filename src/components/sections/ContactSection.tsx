export const ContactSection = () => {
    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Contact</h1>
        <p className="text-lg mb-6 opacity-0 animate-fade-in-delay-1">
          Get in touch with me via email or through LinkedIn.
        </p>
        <div className="space-y-4 opacity-0 animate-fade-in-delay-2">
          <div>
            <p className="text-foreground">stevenernits1@gmail.com</p>
          </div>
          <div>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/stevenernits"
                target="_blank"
                rel="noreferrer" 
                className="text-link">LinkedIn</a>

            </div>
          </div>
        </div>
      </section>
    );
}
