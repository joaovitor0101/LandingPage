import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    desc: 'Eu entendo seus objetivos, requisitos e usuários.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Crio wireframes e interfaces intuitivas e modernas.'
  },
  {
    num: '03',
    title: 'Desenvolvimento',
    desc: 'Escrevo código limpo, escalável e de alta performance.'
  },
  {
    num: '04',
    title: 'Entrega',
    desc: 'Eu testo, faço o deploy e coloco seu projeto no ar.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Header */}
          <div className="lg:w-1/4 flex-shrink-0">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 block">
              MEU PROCESSO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Como eu construo as coisas.
            </h2>
          </div>

          {/* Steps */}
          <div className="lg:w-3/4 flex-1 flex flex-col md:flex-row gap-8 relative mt-8 lg:mt-0">
            {/* Dashed Line Background (only visible on desktop) */}
            <div className="hidden md:block absolute top-4 left-0 w-full h-[1px] border-t border-dashed border-white/10 z-0" />

            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 relative z-10"
              >
                <div className="text-brand-purple font-mono text-xl font-bold mb-6 bg-[#050505] inline-block pr-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
