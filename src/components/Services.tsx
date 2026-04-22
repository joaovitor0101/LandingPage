import { motion } from 'framer-motion';
import { Bot, Layers, Cpu, Monitor, ArrowRight } from 'lucide-react';

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
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 px-6 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <span className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-4 block">
              DESENVOLVEDOR WEB
            </span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Soluções digitais <br /> 
              <span className="text-brand-blue">com propósito</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-sm">
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

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 rounded-[32px] border ${service.dark ? 'bg-zinc-950 border-white/10 text-white' : 'bg-gray-50 border-gray-100 text-black'} transition-all hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-10 ${service.dark ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                  <service.icon className={`w-6 h-6 ${service.dark ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`mb-10 leading-relaxed ${service.dark ? 'text-white/50' : 'text-gray-500'}`}>
                  {service.description}
                </p>
                <div className="flex items-center gap-2 font-semibold cursor-pointer group/link">
                  <span className="text-sm">ver mais</span>
                  <ArrowRight className={`w-4 h-4 group-hover/link:translate-x-1 transition-transform ${service.dark ? 'text-white' : 'text-black'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel indicators/dots as seen in image 2 */}
        <div className="flex justify-center gap-2 mt-10">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-blue w-6' : 'bg-gray-200'} transition-all`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
