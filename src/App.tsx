import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
      </main>
      
      {/* Footer Simple */}
      <footer className="py-20 px-6 bg-brand-dark border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-2xl font-display font-bold text-white italic mb-8 block">
            /dev<span className="text-brand-blue">.</span>
          </span>
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Bruno Dev. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
