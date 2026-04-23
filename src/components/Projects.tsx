import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Globe } from 'lucide-react';

// Importando as screenshots
import tempStrategyImg from '../assets/projects/tempstrategy.png';
import boxBuildingImg from '../assets/projects/boxbuilding.png';
import whatsSenderImg from '../assets/projects/whatssender.png';

const projects = [
  {
    id: 1,
    title: 'Temp Strategy',
    description: 'Plataforma inteligente de análise de perfil e geração de estratégia para redes sociais.',
    image: tempStrategyImg,
    link: 'https://tempstrategy.netlify.app/',
    tags: ['Next.js', 'OpenAI', 'Firebase', 'Tailwind'],
    dark: true
  },
  {
    id: 2,
    title: 'Box Building',
    description: 'E-commerce de suplementos de elite com plataforma de compras inteligente e integrada.',
    image: boxBuildingImg,
    link: 'https://boxbuilding.store/',
    tags: ['React', 'Stripe', 'Node.js', 'PostgreSQL'],
    dark: false
  },
  {
    id: 3,
    title: 'Whats Sender',
    description: 'Sistema de automação e agendamento de mensagens para WhatsApp com dashboard intuitivo.',
    image: whatsSenderImg,
    link: 'https://whatssender.online/',
    tags: ['React', 'API WhatsApp', 'Express', 'Redis'],
    dark: false
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projetos" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-4 block"
          >
            PORTFÓLIO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Projetos <span className="text-brand-blue">em destaque</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Conheça alguns dos sistemas e soluções que desenvolvi para impactar negócios reais.
          </motion.p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center perspective-2000">
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {projects.map((project, index) => {
              // Lógica de posicionamento 3D
              const offset = index - activeIndex;
              const isCenter = offset === 0;
              const isLeft = offset === -1 || (activeIndex === 0 && index === projects.length - 1);
              const isRight = offset === 1 || (activeIndex === projects.length - 1 && index === 0);

              let x = 0;
              let scale = 0.6;
              let rotateY = 0;
              let zIndex = 0;
              let opacity = 0;

              if (isCenter) {
                x = 0;
                scale = 1;
                rotateY = 0;
                zIndex = 10;
                opacity = 1;
              } else if (isLeft) {
                x = '-40%';
                scale = 0.8;
                rotateY = 35;
                zIndex = 5;
                opacity = 0.4;
              } else if (isRight) {
                x = '40%';
                scale = 0.8;
                rotateY = -35;
                zIndex = 5;
                opacity = 0.4;
              }

              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x,
                    scale,
                    rotateY,
                    zIndex,
                    opacity,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  onClick={() => setActiveIndex(index)}
                  className="absolute w-[90%] md:w-[800px] aspect-[16/10] cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
                    {/* Project Screenshot */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay with info (only visible for center card) */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-semibold text-white/80 border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-end gap-6">
                          <div className="flex-1">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-white/60 text-sm md:text-lg max-w-xl line-clamp-2 md:line-clamp-none">
                              {project.description}
                            </p>
                          </div>
                          
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-14 h-14 md:w-20 md:h-20 bg-brand-blue text-white rounded-3xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-brand-blue/40"
                          >
                            <ExternalLink className="w-6 h-6 md:w-8 md:h-8" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Overlay for non-center cards to make them darker */}
                    {!isCenter && (
                      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 z-50 pointer-events-none">
            <button 
              onClick={(e) => { e.stopPropagation(); prevProject(); }}
              className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextProject(); }}
              className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-brand-blue w-10' : 'bg-white/10 w-3 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
