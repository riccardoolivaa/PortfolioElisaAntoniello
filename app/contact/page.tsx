import { getSiteSettings } from '@/lib/cms';
import ContactForm from '@/components/contact/ContactForm';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  const settings = getSiteSettings();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Contattami
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            Collaboriamo insieme alla tua prossima produzione teatrale o discutiamo di opportunità di design
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
                Compila il modulo qui sotto e ti risponderò via WhatsApp il prima possibile.
              </p>

              <ContactForm whatsapp={settings.whatsapp} />

              <p className="text-sm text-primary-500 mt-4 text-center">
                Questo modulo aprirà WhatsApp con il tuo messaggio precompilato
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-primary-900 mb-6">
                Informazioni di Contatto
              </h2>
              <p className="text-primary-600 mb-8">
                Preferisci un contatto diretto? Contattami attraverso uno di questi canali.
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
                  e dintorni, oltre a consulenze da remoto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif mb-6">Pronto a Collaborare?</h2>
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