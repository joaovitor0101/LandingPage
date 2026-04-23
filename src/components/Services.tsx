import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Layers, Cpu, Monitor, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Automações',
    description: 'Processos repetitivos automatizados para ganhar tempo e escala.',
    icon: Bot,
    color: 'bg-black',
    textColor: 'text-white',
    dark: true
  },
  {
    title: 'Sistemas Completos',
    description: 'Soluções completas, do planejamento à entrega com qualidade.',
    icon: Cpu,
    color: 'bg-white',
    textColor: 'text-black',
    dark: false
  },
  {
    title: 'Páginas Dinâmicas',
    description: 'Sites com Painéis administrativos e conteúdos gerenciáveis.',
    icon: Layers,
    color: 'bg-white',
    textColor: 'text-black',
    dark: false
  },
  {
    title: 'Páginas Estáticas',
    description: 'Sites rápidos, responsivos e otimizados para qualquer dispositivo.',
    icon: Monitor,
    color: 'bg-white',
    textColor: 'text-black',
    dark: false
  },
  {
    title: 'Consultoria Tech',
    description: 'Análise técnica para otimizar seus processos e stack de tecnologia.',
    icon: Cpu,
    color: 'bg-white',
    textColor: 'text-black',
    dark: false
  },
];

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicos" className="py-32 px-6 bg-[#F8F9FA] text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <span className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-4 block">
              DESENVOLVEDOR WEB
            </span>
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
              Soluções digitais <br /> 
              <span className="text-brand-blue">com propósito</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-sm leading-relaxed">
              Crio sistemas, automações e páginas que resolvem problemas e geram valor para negócios de verdade.
            </p>

            <div className="flex flex-col gap-6">
              <button className="w-fit px-8 py-4 bg-black text-white rounded-xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-all group">
                ver projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                disponível para novos projetos
              </div>
            </div>
          </motion.div>

          {/* Slider Section */}
          <div className="lg:w-2/3 relative w-full">
            {/* Navigation Arrows */}
            <div className="absolute -top-16 right-0 flex gap-2 z-10">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full border border-gray-200 transition-all ${canScrollLeft ? 'bg-white hover:bg-gray-50 text-black cursor-pointer' : 'bg-gray-50 text-gray-300 cursor-not-allowed'}`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-3 rounded-full border border-gray-200 transition-all ${canScrollRight ? 'bg-white hover:bg-gray-50 text-black cursor-pointer' : 'bg-gray-50 text-gray-300 cursor-not-allowed'}`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex-none w-[280px] md:w-[320px] h-[480px] md:h-[580px] p-10 rounded-[40px] border snap-start flex flex-col justify-between transition-all hover:shadow-2xl hover:-translate-y-2 ${
                    service.dark 
                      ? 'bg-zinc-950 border-white/10 text-white' 
                      : 'bg-white border-gray-100 text-black shadow-sm'
                  }`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-10 ${service.dark ? 'bg-white/10' : 'bg-gray-100'}`}>
                      <service.icon className={`w-6 h-6 ${service.dark ? 'text-white' : 'text-gray-700'}`} />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 leading-tight">{service.title}</h3>
                    <p className={`text-lg leading-relaxed ${service.dark ? 'text-white/50' : 'text-gray-500'}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-bold cursor-pointer group/link mt-auto">
                    <span className="text-base">ver mais</span>
                    <ArrowRight className={`w-5 h-5 group-hover/link:translate-x-1 transition-transform ${service.dark ? 'text-white' : 'text-black'}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-start gap-2 mt-4 ml-4">
              {services.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === 0 ? 'bg-brand-blue w-8' : 'bg-gray-200 w-1.5'
                  }`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
