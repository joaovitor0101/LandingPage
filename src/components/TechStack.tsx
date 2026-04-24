import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: 'N' },
  { name: 'Node.js', icon: '⬢' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Tailwind CSS', icon: '≈' },
  { name: 'Git', icon: '🌿' },
  { name: 'Docker', icon: '🐳' },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Technologies Grid */}
        <div className="pt-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-12 block text-center"
          >
            TECNOLOGIAS & TOOLS
          </motion.span>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-4 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl grayscale group-hover:grayscale-0 group-hover:border-brand-blue/50 group-hover:bg-brand-blue/5 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-white/40 group-hover:text-white transition-colors uppercase tracking-wider">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
