import { motion } from 'framer-motion';

// Mock simple SVG components for logos to avoid external dependencies
const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-[#61DAFB]">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextJsLogo = () => (
  <svg viewBox="0 0 180 180" className="w-10 h-10 fill-white">
    <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm0 166.425c-42.206 0-76.425-34.219-76.425-76.425 0-42.206 34.219-76.425 76.425-76.425 42.206 0 76.425 34.219 76.425 76.425 0 42.206-34.219 76.425-76.425 76.425zm19.646-43.518L64.381 55.438h-11.45v69.124h10.366V67.669l41.678 62.593h12.596V55.438H107.2v67.469h2.446z"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z"/>
    <path fill="#FFF" d="M72.3 98.4c-4.9 3.2-11.5 5-18.1 5-15.6 0-25.2-9-25.2-22.7 0-14 10.4-22.9 25.5-22.9 6.2 0 12 1.6 16.5 4.3l-3.3 9.7c-4-2.2-8.5-3.4-13.3-3.4-8.1 0-13.6 4.9-13.6 12 0 7.3 5.3 12 13.9 12 4.7 0 9.1-1.4 12.3-3.5l5.3 9.5zm39.1-39.7c-2.3-1.6-5.8-2.6-9.6-2.6-6 0-9.8 2.5-9.8 6.7 0 4 2.8 5.7 8.5 7.6 9 3.1 16.3 7.8 16.3 18.2 0 12.1-9.9 20-24.8 20-7.3 0-14.7-2.1-19.4-5.3l4.1-10c4.1 2.8 10.3 5.1 16 5.1 7.2 0 12.3-3.2 12.3-8.2 0-5.1-3.6-7-10.2-9.2-9-2.9-14.6-7.8-14.6-17.1 0-11 9.4-19 23-19 6.5 0 12.4 1.7 16.3 4l-4.1 9.8z"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#38B2AC]">
    <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-8.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C7.937 13.382 6.576 12 3.601 12z"/>
  </svg>
);

const NodeJsLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#339933]">
    <path fill="currentColor" d="M115.1 36l-48.4-28a5 5 0 0 0-5.1 0L13.1 36a5 5 0 0 0-2.6 4.4v56a5 5 0 0 0 2.6 4.4l48.4 28a5 5 0 0 0 5.1 0l48.4-28a5 5 0 0 0 2.6-4.4v-56a5 5 0 0 0-2.5-4.4zm-48.9 76.5l-40.1-23.2v-46.3l40.1-23.2 40.1 23.2v46.3zM64 45.4a12 12 0 0 0-8.9 4l-4-4.8A18 18 0 0 1 64 38.6c11.7 0 20.3 8.1 20.3 21v29h-7V59.4c0-9.2-5.4-14.5-13.3-14.5zm-22.3 8.3v21h17.3v6.3h-24V53.7z"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#F05032]">
    <path fill="currentColor" d="M125.8 55.4L72.6 2.2a9 9 0 0 0-12.7 0L49 13l20.4 20.4a14 14 0 0 1 12.3 8c.7 1.4 1 2.8 1 4.3a14.2 14.2 0 0 1-28.4 0v-.6l-14 14v19a14.2 14.2 0 1 1-6.8-21.7l13.6-13.6L14.7 11A9 9 0 0 0 2 14.8l53.2 53.2A9 9 0 0 0 68 70.6L125.8 68c3.5-3.4 3.5-9 0-12.6z"/>
  </svg>
);

const TechStack = () => {
  const tools = [
    { name: 'React', icon: ReactLogo },
    { name: 'Next.js', icon: NextJsLogo },
    { name: 'TypeScript', icon: TypeScriptLogo },
    { name: 'Tailwind CSS', icon: TailwindLogo },
    { name: 'Node.js', icon: NodeJsLogo },
    { name: 'Git', icon: GitLogo },
  ];

  return (
    <section id="stack" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Header */}
          <div className="lg:w-1/4 flex-shrink-0 text-center lg:text-left">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 block">
              MINHA CAIXA DE FERRAMENTAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Tecnologias que eu utilizo.
            </h2>
          </div>

          {/* Cards */}
          <div className="lg:w-3/4 flex-1 flex flex-wrap justify-center lg:justify-end gap-4 w-full">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-colors rounded-2xl flex flex-col items-center justify-center gap-4 group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <tool.icon />
                </div>
                <span className="text-white/60 text-xs font-medium">{tool.name}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tools.length * 0.1 }}
              className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-colors rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-white/60 text-xs font-medium">Mais</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
