'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl mb-4">Join my mailing list</h2>
        <p className="text-gray-600 mb-8">
          Sign up with your email to keep up to date
        </p>

        {submitted ? (
          <p className="text-lg text-gray-800">Thank you!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
