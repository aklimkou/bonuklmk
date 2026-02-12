'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({ name: '', phone: '', service: '', message: '' })
          setSubmitted(false)
          setIsOpen(false)
        }, 2000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-[#f5f1ed]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
            Ready to transform your style? Let's connect
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 md:px-12 py-3 md:py-4 bg-[#5d4545] text-white hover:bg-[#4a3636] transition-colors text-base md:text-lg"
          >
            Reach Out
          </button>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 hover:opacity-60 transition-opacity"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-serif mb-6">Contact Me</h3>

            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg text-gray-800">Thank you for reaching out!</p>
                <p className="text-gray-600 mt-2">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-1 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-1 text-gray-700">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-800 transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-shopping">Personal Shopping</option>
                    <option value="wardrobe-styling">Wardrobe Styling</option>
                    <option value="personal-styling">Personal Styling</option>
                    <option value="commercial-styling">Commercial Styling</option>
                    <option value="special-events">Special Events</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-1 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-800 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#5d4545] text-white hover:bg-[#4a3636] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
