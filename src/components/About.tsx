import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* 1. Header (Left) */}
          <div className="lg:col-span-3">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 block">
              SOBRE MIM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Quem eu sou.
            </h2>
          </div>

          {/* 2. Photo (Center Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-b from-brand-purple/50 to-transparent">
              <div className="w-full h-full rounded-full bg-[#111] overflow-hidden relative shadow-[0_0_40px_rgba(124,58,237,0.2)]">
                <img 
                  src="/fotoJoao.jpeg" 
                  alt="João Vitor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* 3. Text & Tags (Center Right) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Sou um desenvolvedor web autodidata apaixonado por construir <span className="text-white font-medium">produtos digitais que resolvem problemas</span> reais e entregam <span className="text-white font-medium">ótimas experiências</span>.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              Adoro código limpo, design minimalista e animações fluidas.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <MapPin className="w-4 h-4 text-brand-purple" />
                Brasil
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                Disponível para projetos
              </div>
            </div>
          </div>

          {/* 4. Stats (Right) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                2<span className="text-brand-purple">+</span>
              </div>
              <div className="text-white/40 text-sm">Anos de experiência</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15<span className="text-brand-purple">+</span>
              </div>
              <div className="text-white/40 text-sm">Projetos concluídos</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                10<span className="text-brand-purple">+</span>
              </div>
              <div className="text-white/40 text-sm">Clientes satisfeitos</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
