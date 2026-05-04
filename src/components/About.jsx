import { motion } from 'framer-motion';
import { Shield, Clock, GraduationCap, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safety First, Always',
    description:
      'ETCP certified technicians, OSHA compliance, and full insurance coverage on every project.',
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    description:
      '24/7 availability and rapid deployment to meet even the most demanding production schedules.',
  },
  {
    icon: GraduationCap,
    title: 'Industry Expertise',
    description:
      '15+ years of combined experience with continuous training on the latest rigging technologies.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description:
      'A single point of contact and a consistent crew so you always know who\'s on your job.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-lime-400 text-xs font-semibold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Where Safety Meets{' '}
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                Spectacular
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Elevate Rigging is Las Vegas's most trusted entertainment rigging company.
              Our team of ETCP-certified professionals brings unmatched technical skill and
              relentless commitment to safety to every production — from intimate residencies
              to sold-out arena tours.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              We understand that in live entertainment, there is no room for error. That is
              why we combine meticulous planning, top-tier equipment, and decades of
              hands-on experience to deliver results that exceed expectations every time.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-semibold px-6 py-3 rounded-full hover:from-lime-400 hover:to-green-400 transition-all duration-200"
            >
              Work With Us
            </a>
          </motion.div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-zinc-800/60 border border-zinc-700 rounded-2xl p-6 hover:border-lime-500/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-lime-500/10 border border-lime-500/20 mb-4">
                  <Icon className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
