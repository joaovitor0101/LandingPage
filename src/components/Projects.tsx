import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

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
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    category: 'AI & SaaS'
  },
  {
    id: 2,
    title: 'Box Building',
    description: 'E-commerce de suplementos de elite com plataforma de compras inteligente e integrada.',
    image: boxBuildingImg,
    link: 'https://boxbuilding.store/',
    tags: ['React', 'Stripe', 'Node.js'],
    category: 'E-commerce'
  },
  {
    id: 3,
    title: 'Whats Sender',
    description: 'Sistema de automação e agendamento de mensagens para WhatsApp com dashboard intuitivo.',
    image: whatsSenderImg,
    link: 'https://whatssender.online/',
    tags: ['React', 'API WhatsApp', 'Redis'],
    category: 'Automation'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 block">
              TRABALHOS SELECIONADOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Algumas coisas que eu criei.
            </h2>
          </div>
          <a href="#" className="text-white/60 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group">
            Ver todos os projetos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors h-full"
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden bg-white/5 p-6 pb-0 flex items-end justify-center border-b border-white/5">
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 z-20">
                  <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider">{project.category}</span>
                </div>
                <div className="w-[90%] h-[90%] relative rounded-t-xl overflow-hidden border border-white/10 border-b-0 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2 text-white/40 text-xs font-mono">
                    {project.tags.join(' • ')}
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
