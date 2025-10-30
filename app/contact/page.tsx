'use client';

import { useState } from 'react';
import { MessageCircle, Instagram, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! My name is ${formData.name}.%0A%0A${formData.message}%0A%0AEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fade-in animate-delay-100">
            Let's collaborate on your next theatrical production or discuss design opportunities
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-primary-900 mb-6">
                Send a Message
              </h2>
              <p className="text-primary-600 mb-8">
                Fill out the form below and I'll get back to you via WhatsApp as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>
              </form>

              <p className="text-sm text-primary-500 mt-4 text-center">
                This form will open WhatsApp with your pre-filled message
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-primary-900 mb-6">
                Contact Information
              </h2>
              <p className="text-primary-600 mb-8">
                Prefer direct contact? Reach out through any of these channels.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-primary-600">+39 123 456 7890</p>
                    <p className="text-sm text-primary-500 mt-2">
                      Available for quick responses and project discussions
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/elisaantonielo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">
                      Instagram
                    </h3>
                    <p className="text-primary-600">@elisaantonielo</p>
                    <p className="text-sm text-primary-500 mt-2">
                      Follow for behind-the-scenes content and project updates
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:elisa.antonielo@example.com"
                  className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">
                      Email
                    </h3>
                    <p className="text-primary-600">elisa.antonielo@example.com</p>
                    <p className="text-sm text-primary-500 mt-2">
                      For formal inquiries and detailed project proposals
                    </p>
                  </div>
                </a>
              </div>

              {/* Location Info */}
              <div className="mt-12 p-6 bg-warm-gray rounded-xl">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Based in Milan, Italy
                </h3>
                <p className="text-primary-600">
                  Currently studying at Teatro alla Scala Academy. Available for projects in Milan 
                  and surrounding areas, as well as remote consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're planning a production or exploring creative possibilities, 
            I'd love to hear about your project.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
