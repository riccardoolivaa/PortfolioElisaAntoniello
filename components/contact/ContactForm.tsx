'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  whatsapp: string;
}

export default function ContactForm({ whatsapp }: ContactFormProps) {
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
    const whatsappMessage = `Ciao! Mi chiamo ${formData.name}.%0A%0A${formData.message}%0A%0AEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary-700 mb-2"
        >
          Il Tuo Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder="Mario Rossi"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary-700 mb-2"
        >
          La Tua Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder="mario@esempio.it"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary-700 mb-2"
        >
          Il Tuo Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
          placeholder="Parlami del tuo progetto o richiesta..."
        />
      </div>

      <button
        type="submit"
        className="w-full btn-primary flex items-center justify-center gap-3"
      >
        <Send size={20} />
        Invia via WhatsApp
      </button>
    </form>
  );
}
