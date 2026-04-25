import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Tecnologias', href: '#stack' },
    { name: 'Processo', href: '#process' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full z-50 bg-[#050505]"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 py-6">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-xl font-display font-bold italic text-white flex items-center">
            JV <span className="w-1.5 h-1.5 bg-brand-purple rounded-full ml-1 mr-1"></span> 
            <span className="text-white/60 text-sm font-normal">.dev</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="https://wa.me/5527997038373" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium flex items-center gap-2 transition-all active:scale-95"
        >
          Vamos conversar
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
