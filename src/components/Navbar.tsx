import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'início', href: '#inicio' },
    { name: 'serviços', href: '#servicos' },
    { name: 'projetos', href: '#projetos' },
    { name: 'sobre', href: '#sobre' },
    { name: 'contato', href: '#contato' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-brand-dark/50 backdrop-blur-lg border border-white/5 px-6 py-4 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-white italic">/dev<span className="text-brand-blue">.</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors capitalize"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:border-white/20 active:scale-95 group">
          vamos conversar
          <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
