import Link from 'next/link';
import { Instagram, Mail, MessageCircle, Theater } from 'lucide-react';
import { getSiteSettings } from '@/lib/cms';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const settings = getSiteSettings();

  return (
    <footer className="bg-stone-900 text-cream">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif mb-4">{settings.siteName || 'Elisa Antoniello'}</h3>
            <p className="text-cream/70 mb-6">
              {settings.tagline || 'Scenic Design Student at Teatro alla Scala Academy, Milan'}
            </p>
            <div className="flex items-center gap-2 text-cream/70">
              <Theater size={20} />
              <span>Creating theatrical magic through design</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-cream/70 hover:text-cream transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-cream/70 hover:text-cream transition-colors">
                Portfolio
              </Link>
              <Link href="/gallery" className="text-cream/70 hover:text-cream transition-colors">
                Gallery
              </Link>
              <Link href="/cv" className="text-cream/70 hover:text-cream transition-colors">
                CV
              </Link>
              <Link href="/contact" className="text-cream/70 hover:text-cream transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a
                href={`https://instagram.com/${settings.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {currentYear} {settings.siteName || 'Elisa Antoniello'}. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm">
            Designed & Developed with ❤️ for Teatro alla Scala Academy
          </p>
        </div>
      </div>
    </footer>
  );
}