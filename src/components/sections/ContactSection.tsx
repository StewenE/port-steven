export const ContactSection = () => {
    return (
      <section className="p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-lg mb-6">
          Get in touch msg...
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-foreground/80">...</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Social</h3>
            <div className="space-y-2">
              <p className="text-foreground/80">Social 1</p>
              <p className="text-foreground/80">Social 2</p>
              <p className="text-foreground/80">Social 3</p>
            </div>
          </div>
        </div>
      </section>
    );
}
