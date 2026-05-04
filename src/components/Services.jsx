import { motion } from 'framer-motion';
import { Music, Building2, LayoutGrid, Settings2, ClipboardList, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Music,
    title: 'Concert & Touring',
    description:
      'Full-scale rigging for concerts, festivals, and touring productions. We handle everything from small club shows to major arena productions.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description:
      'Professional rigging solutions for conferences, product launches, and corporate gatherings that demand precision and reliability.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
  },
  {
    icon: LayoutGrid,
    title: 'Trade Show',
    description:
      'Complete rigging solutions for trade shows and exhibitions, ensuring your displays are mounted safely and impressively.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    icon: Settings2,
    title: 'Automation',
    description:
      'Advanced automated rigging systems and motion control for dynamic, moving set pieces and theatrical effects.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    icon: ClipboardList,
    title: 'Consulting & Design',
    description:
      'Expert consultation on rigging systems, load calculations, and safety planning to ensure your vision is achievable and secure.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-lime-400 text-xs font-semibold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Rigging Services
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From intimate venue setups to stadium-scale productions, our team delivers
            safe, reliable, and spectacular rigging solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, image }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-lime-500/20 backdrop-blur-sm border border-lime-500/30">
                    <Icon className="w-5 h-5 text-lime-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-lime-400 text-sm font-medium hover:gap-2 transition-all duration-200"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
