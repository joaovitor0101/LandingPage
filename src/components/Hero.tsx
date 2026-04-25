import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ══ LEFT COLUMN ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-start"
          >
            {/* Label Pill */}
            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 inline-flex items-center gap-2">
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
                Olá, eu sou o João Vitor <span className="text-sm">👋</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Criando experiências <br />
              digitais <br />
              <span className="text-brand-purple">que importam.</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-white/60 text-lg sm:text-xl max-w-[480px] mb-10 leading-relaxed font-light">
              Sou um Desenvolvedor Web focado em criar produtos digitais rápidos, acessíveis e visualmente impactantes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-brand-purple hover:bg-[#6D28D9] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Ver meus trabalhos
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#about"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white/80 hover:text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                Sobre mim
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ══ RIGHT COLUMN — Visual Composition ══════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center"
          >
            {/* Base Code Editor Mockup */}
            <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-[90%] md:w-[480px] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-white/30 text-xs font-mono">dev.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-white/60">
                <p><span className="text-brand-purple">const</span> dev <span className="text-white">=</span> {'{'}</p>
                <p className="ml-4">nome: <span className="text-[#34D399]">'João Vitor'</span>,</p>
                <p className="ml-4">cargo: <span className="text-[#34D399]">'Desenvolvedor Web'</span>,</p>
                <p className="ml-4">paixao: <span className="text-[#34D399]">'Criar soluções'</span>,</p>
                <p className="ml-4">stack: {'['}</p>
                <p className="ml-8 text-[#34D399]">'React', 'Next.js', 'TypeScript',</p>
                <p className="ml-8 text-[#34D399]">'Tailwind CSS', 'Node.js'</p>
                <p className="ml-4">{']'},</p>
                <p>{'};'}</p>
                <br />
                <p><span className="text-brand-purple">function</span> <span className="text-[#60A5FA]">criarMagica</span>() {'{'}</p>
                <p className="ml-4"><span className="text-brand-purple">return</span> <span className="text-[#34D399]">'Experiências incríveis'</span>;</p>
                <p>{'}'}</p>
              </div>
            </div>

            {/* Overlapping Dashboard Mockup */}
            <div className="absolute left-0 md:left-10 bottom-10 md:bottom-20 w-[85%] md:w-[420px] bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">Acelere seu negócio <span className="text-brand-purple">online</span></h3>
              <p className="text-sm text-white/50 mb-6">Plataforma completa para gerenciar e escalar seu SaaS.</p>
              <button className="px-4 py-2 bg-brand-purple text-white text-xs font-bold rounded-md mb-8 hover:bg-[#6D28D9] transition-colors">
                Começar agora
              </button>

              {/* Fake dashboard UI */}
              <div className="w-full bg-white/5 rounded-lg p-4 border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-20 h-2 bg-white/20 rounded-full" />
                  <div className="w-10 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="text-2xl font-bold text-white mb-4">R$ 24.690,50</div>
                <div className="flex gap-2">
                  <div className="h-16 flex-1 bg-brand-purple/20 rounded-md border border-brand-purple/30" />
                  <div className="h-16 flex-1 bg-white/5 rounded-md" />
                  <div className="h-16 flex-1 bg-white/5 rounded-md" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
