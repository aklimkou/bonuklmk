"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-10 py-5 md:py-6">
          <a
            href="#"
            className="font-serif text-2xl md:text-3xl tracking-[0.04em] text-foreground uppercase"
          >
            Bonu Klimkou
          </a>

          {/* Desktop - minimal links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                isOpen ? "bg-background rotate-45 translate-y-[3px]" : "bg-foreground"
              }`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                isOpen ? "bg-background -rotate-45 -translate-y-[3px]" : "bg-foreground"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground transition-all duration-600 md:hidden flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-3xl tracking-[0.06em] text-primary-foreground uppercase transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 70 + 150}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
