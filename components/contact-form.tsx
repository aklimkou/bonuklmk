'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-center font-serif text-4xl md:text-5xl tracking-wide mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-[#666] text-sm tracking-wider mb-12">
          LET&apos;S WORK TOGETHER
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <p className="text-lg font-light tracking-wide">
              Thank you for reaching out!
            </p>
            <p className="text-[#666] text-sm mt-2">
              I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm tracking-wider underline underline-offset-4 text-[#5d4545] hover:opacity-60 transition-opacity"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm tracking-wider mb-2">
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[#ddd] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#5d4545] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm tracking-wider mb-2">
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#ddd] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#5d4545] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm tracking-wider mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#ddd] bg-transparent px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#5d4545] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#5d4545] text-white py-3 text-sm tracking-widest hover:bg-[#4a3636] transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
