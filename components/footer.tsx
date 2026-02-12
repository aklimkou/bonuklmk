'use client'

import Link from 'next/link'

export function Footer() {
  const links = [
    { href: '#home', label: 'HOME' },
    { href: '#services', label: 'SERVICES' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <footer className="bg-[#4a3a36] border-t border-[#3d2f2c] py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-serif font-light tracking-wider text-white">
            BONU
          </Link>

          {/* Links */}
          <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm tracking-wider text-white hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-gray-400">
          © {new Date().getFullYear()} Bonu Klimkou. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
