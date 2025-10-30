'use client';

import { useState } from 'react';
import { MessageCircle, Instagram, Mail, Send } from 'lucide-react';

// Import dei dati dal CMS lato client
import { getSiteSettings } from '@/lib/cms';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Carica le impostazioni del sito
  const settings = getSiteSettings();

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
    const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Contatti
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            Collaboriamo insieme alla tua prossima produzione teatrale o discutiamo opportunità di design
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
                Invia un Messaggio
              </h2>
              <p className="text-primary-600 mb-8">
                Compila il modulo qui sotto e ti ricontatterò tramite WhatsApp il prima possibile.
              </p>

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
                    placeholder="mario@esempio.com"
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
                    placeholder="Raccontami del tuo progetto o della tua richiesta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Invia tramite WhatsApp
                </button>
              </form>

              <p className="text-sm text-primary-500 mt-4 text-center">
                Questo modulo aprirà WhatsApp con il tuo messaggio pre-compilato
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-primary-900 mb-6">
                Informazioni di Contatto
              </h2>
              <p className="text-primary-600 mb-8">
                Preferisci un contatto diretto? Raggiungimi attraverso uno di questi canali.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${settings.whatsapp}`}
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
                    <p className="text-primary-600">{settings.phone}</p>
                    <p className="text-sm text-primary-500 mt-2">
                      Disponibile per risposte rapide e discussioni sui progetti
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${settings.instagram}`}
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
                    <p className="text-primary-600">@{settings.instagram}</p>
                    <p className="text-sm text-primary-500 mt-2">
                      Seguimi per contenuti dietro le quinte e aggiornamenti sui progetti
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">
                      Email
                    </h3>
                    <p className="text-primary-600">{settings.email}</p>
                    <p className="text-sm text-primary-500 mt-2">
                      Per richieste formali e proposte di progetto dettagliate
                    </p>
                  </div>
                </a>
              </div>

              {/* Location Info */}
              <div className="mt-12 p-6 bg-warm-gray rounded-xl">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Con sede a Milano, Italia
                </h3>
                <p className="text-primary-600">
                  Attualmente studio presso l'Accademia Teatro alla Scala. Disponibile per progetti a Milano 
                  e zone limitrofe, oltre a consulenze da remoto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif mb-6">Pronta a Collaborare?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Che tu stia pianificando una produzione o esplorando possibilità creative, 
            mi piacerebbe sentire del tuo progetto.
          </p>
          <a
            href={`https://wa.me/${settings.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Inizia una Conversazione
          </a>
        </div>
      </section>
    </div>
  );
}