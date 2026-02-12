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
    <footer className="bg-[#4a3a36] border-t border-[#3d2f2c] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-light tracking-wider text-white">
            BONU
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-white hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Bonu Klimkou. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
