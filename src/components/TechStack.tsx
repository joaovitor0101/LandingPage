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
    <section id="projetos" className="py-32 px-6 bg-brand-dark text-white relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Código com estratégia. <br />
              <span className="text-white/60">Design com intenção.</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-md">
              Desenvolvimento web que une tecnologia, design e resultado para impulsionar negócios.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <button className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] transition-all group">
                ver meus projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a href="#" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                ou falar comigo no whatsapp
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            {/* Abstract Decorative elements or a project slider placeholder */}
            <div className="aspect-video bg-white/5 rounded-[40px] border border-white/10 p-2 overflow-hidden">
              <div className="w-full h-full bg-zinc-900 rounded-[32px] border border-white/5 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-blue/10" />
                 <span className="text-white/20 font-display font-bold text-4xl">PROJETOS EM DESTAQUE</span>
              </div>
            </div>
            
            {/* Carousel dots for project slider */}
            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-orange w-6' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="pt-20 border-t border-white/5">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-12 block">
            TECNOLOGIAS
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 group-hover:border-white/20 transition-all">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
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
