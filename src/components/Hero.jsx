import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Users, Award } from 'lucide-react';

const stats = [
  { icon: Star, value: '500+', label: 'Events Completed' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Shield, value: '100%', label: 'Safety Record' },
  { icon: Users, value: '24/7', label: 'Support Available' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #84cc16 1px, transparent 1px), linear-gradient(to bottom, #84cc16 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-lime-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          Las Vegas's Premier Entertainment Rigging
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Raising the Bar in{' '}
          <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            Entertainment Rigging
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          From world-class concerts to spectacular corporate events, we deliver precision
          rigging solutions that keep your production safe, on schedule, and stunning.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-semibold px-7 py-3.5 rounded-full hover:from-lime-400 hover:to-green-400 transition-all duration-200 text-base shadow-lg shadow-lime-900/30"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-white font-semibold px-7 py-3.5 rounded-full hover:border-lime-500 hover:text-lime-400 transition-all duration-200 text-base"
          >
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4 + i}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime-500/10 mb-3">
                <Icon className="w-5 h-5 text-lime-400" />
              </div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-zinc-400 text-sm mt-0.5">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
