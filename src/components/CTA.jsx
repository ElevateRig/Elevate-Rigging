import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-950/30 via-transparent to-green-950/20 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-lime-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Ready to Elevate Your Next Event?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              Spectacular Together
            </span>
          </h2>

          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote. Our team is ready to bring
            your vision to life safely, on time, and beyond expectations.
          </p>

          <a
            href="mailto:Info@elevaterig.com"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-bold px-8 py-4 rounded-full hover:from-lime-400 hover:to-green-400 transition-all duration-200 text-lg shadow-xl shadow-lime-900/30 mb-10"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
            <a
              href="tel:7024964491"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-lime-400 transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              (702) 496-4491
            </a>
            <span className="hidden sm:block text-zinc-700">|</span>
            <a
              href="mailto:Info@elevaterig.com"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-lime-400 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-lime-400" />
              Info@elevaterig.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
