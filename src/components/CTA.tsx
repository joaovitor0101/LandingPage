import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Vamos construir algo <br className="hidden md:block" />
              <span className="text-brand-purple">incrível</span> juntos.
            </h2>
          </div>

          <div className="lg:w-1/3 flex flex-col items-center lg:items-end gap-4">
            <a 
              href="https://wa.me/5527997038373"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-brand-purple hover:bg-[#6D28D9] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(124,58,237,0.3)] text-lg"
            >
              Vamos conversar
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:jvgb.es@gmail.com" className="text-brand-purple hover:text-white transition-colors text-sm font-medium">
              jvgb.es@gmail.com
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
