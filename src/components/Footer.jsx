import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const LOGO_URL =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698cd5bad7e1e48b5bbabdb4/02480612b_ELEVATE9_25noLVWhiteCopy-ElevateNOLVWhite3.png';

const footerLinks = [
  {
    title: 'Services',
    links: [
      'Concert & Touring',
      'Corporate Events',
      'Film & TV Production',
      'Casino & Residency',
      'Special Effects',
      'Consulting',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Safety Standards', 'Equipment', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Project Gallery', 'Case Studies', 'Industry News', 'FAQs', 'Rigging 101'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img src={LOGO_URL} alt="Elevate Rigging" className="h-10 w-auto object-contain mb-5" />
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Las Vegas's premier entertainment rigging company. Precision, safety, and
              spectacular results for every production.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:7024964491"
                className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                (702) 496-4491
              </a>
              <a
                href="mailto:Info@elevaterig.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                Info@elevaterig.com
              </a>
              <p className="text-zinc-500 text-xs pl-6">24/7 Emergency Support Available</p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-500 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-lime-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Elevate Rigging. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
