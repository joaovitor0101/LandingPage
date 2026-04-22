import { motion } from 'framer-motion';
import { ArrowDown, MousePointer2 } from 'lucide-react';
import heroMockup from '../assets/hero-mockup.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <span className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4 block">
            OLÁ, EU SOU
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Desenvolvedor web que transforma ideias em <span className="text-gradient bg-gradient-to-r from-brand-blue to-purple-400 bg-clip-text text-transparent">soluções reais.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Automatizações, sistemas completos, páginas dinâmicas e estáticas com foco em performance e experiência.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {[
              { label: 'projetos entregues', value: '+30' },
              { label: 'automações criadas', value: '+10' },
              { label: 'foco no resultado', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[140px]">
                <span className="block text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="block text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span className="w-px h-10 bg-white/20 mx-4" />
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
            <span className="uppercase tracking-widest text-[10px]">rolar para explorar</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000 hidden lg:block"
        >
          <div className="relative z-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/20">
            <img src={heroMockup} alt="Project Showcase" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold mb-2">Sistema de gestão financeira</h3>
                <div className="flex gap-2">
                  {['Next.js', 'PostgreSQL', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/60">{tech}</span>
                  ))}
                </div>
              </div>
              <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <MousePointer2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
