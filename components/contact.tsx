export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 lg:py-40 px-5 md:px-10">
      <div className="max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-10 md:mb-16">
          Contact
        </p>

        <h2 className="font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[0.01em] text-foreground mb-12 md:mb-20 text-balance">
          {"Let's"} create something
          <br className="hidden md:block" />
          {" "}beautiful together.
        </h2>

        <div className="flex flex-col gap-0">
          <a
            href="mailto:hello@bonuklimkou.com"
            className="group py-5 md:py-6 border-t border-border flex items-baseline justify-between"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Email
            </span>
            <span className="text-foreground text-sm md:text-base group-hover:opacity-50 transition-opacity duration-300">
              hello@bonuklimkou.com
            </span>
          </a>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group py-5 md:py-6 border-t border-border flex items-baseline justify-between"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Book
            </span>
            <span className="text-foreground text-sm md:text-base group-hover:opacity-50 transition-opacity duration-300">
              Schedule a consultation
            </span>
          </a>

          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
