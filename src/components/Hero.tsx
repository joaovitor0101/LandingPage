import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type TargetAndTransition } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

/* ─── Showcase Projects ──────────────────────────────────────── */
const showcaseProjects = [
  {
    title: 'Nexus Analytics',
    category: 'Fintech SaaS',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    color: 'from-indigo-600 to-violet-600',
    accentColor: '#6366f1',
    stats: { users: '12k', growth: '+24%' },
  },
  {
    title: 'Horizon CRM',
    category: 'Enterprise Solution',
    tech: ['React', 'Node.js', 'Docker'],
    color: 'from-cyan-500 to-blue-600',
    accentColor: '#06b6d4',
    stats: { users: '8k', growth: '+15%' },
  },
  {
    title: 'Aura Design System',
    category: 'Design Tools',
    tech: ['TypeScript', 'Framer', 'Sass'],
    color: 'from-fuchsia-500 to-purple-600',
    accentColor: '#d946ef',
    stats: { users: '25k', growth: '+42%' },
  },
];

/* ─── Diagonal Stats Cluster ─────────────────────────────────── */
const statsData = [
  {
    value: '+30',
    label: 'projetos entregues',
    glow: 'rgba(99,102,241,0.4)',
    delay: 0.6,
    rotate: -8,
    tx: 0,
    ty: 0,
    zIndex: 30,
    scale: 1,
  },
  {
    value: '+10',
    label: 'automações criadas',
    glow: 'rgba(6,182,212,0.35)',
    delay: 0.75,
    rotate: -4,
    tx: 32,
    ty: 28,
    zIndex: 20,
    scale: 0.93,
  },
  {
    value: '100%',
    label: 'foco no resultado',
    glow: 'rgba(217,70,239,0.3)',
    delay: 0.9,
    rotate: 0,
    tx: 60,
    ty: 52,
    zIndex: 10,
    scale: 0.86,
  },
];

const StatsCluster = () => (
  <div className="relative w-[220px] h-[160px]" style={{ perspective: '900px' }}>
    {/* Ambient Glow behind cluster */}
    <div
      className="absolute inset-0 rounded-3xl blur-[60px] opacity-40 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 40% 60%, rgba(99,102,241,0.5) 0%, rgba(6,182,212,0.3) 60%, transparent 80%)',
      }}
    />
    {statsData.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: s.scale }}
        transition={{ delay: s.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
        style={{
          zIndex: s.zIndex,
          transform: `rotate(${s.rotate}deg) translate(${s.tx}px, ${s.ty}px)`,
        }}
      >
        {/* Outer soft glow ring */}
        <div
          className="absolute -inset-[1px] rounded-2xl blur-[6px] opacity-60"
          style={{ background: s.glow }}
        />
        <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-w-[140px]">
          <span className="block text-2xl font-bold text-white tracking-tight leading-none mb-1">
            {s.value}
          </span>
          <span className="block text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em]">
            {s.label}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ─── Premium Card ───────────────────────────────────────────── */
const PremiumCard = ({
  project,
  index,
  activeIndex,
  onClick,
}: {
  project: (typeof showcaseProjects)[0];
  index: number;
  activeIndex: number;
  onClick: () => void;
}) => {
  const isCenter = index === activeIndex;
  const isLeft =
    index === (activeIndex - 1 + showcaseProjects.length) % showcaseProjects.length;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 22,
  });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isCenter) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const variants: Record<string, TargetAndTransition> = {
    center: { x: '0%', scale: 1, rotateY: 0, opacity: 1, zIndex: 30 },
    left: { x: '-30%', scale: 0.78, rotateY: 38, opacity: 0.35, zIndex: 10 },
    right: { x: '30%', scale: 0.78, rotateY: -38, opacity: 0.35, zIndex: 10 },
    hidden: { x: '0%', scale: 0.6, rotateY: 0, opacity: 0, zIndex: 0 },
  };

  const pos = isCenter ? 'center' : isLeft ? 'left' : 'right';

  return (
    <motion.div
      initial={false}
      animate={variants[pos]}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="absolute w-[300px] md:w-[420px] aspect-[4/5] cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        rotateX: isCenter ? rotateX : 0,
      }}
    >
      {/* Glow behind card */}
      <div
        className="absolute -inset-4 rounded-[44px] blur-[50px] opacity-20 pointer-events-none transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse, ${project.accentColor} 0%, transparent 70%)` }}
      />

      <div className="relative w-full h-full bg-white/[0.04] backdrop-blur-3xl border border-white/[0.09] rounded-[36px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] group">
        {/* Gradient overlay per card */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-500`}
        />

        <div className="p-7 h-full flex flex-col gap-5">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/25 block mb-1">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center border border-white/10">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
          </div>

          {/* Mini dashboard */}
          <div className="flex-1 bg-black/40 rounded-2xl border border-white/5 p-4 flex flex-col gap-4">
            {/* Bar chart */}
            <div className="h-16 w-full relative overflow-hidden rounded-lg bg-white/3">
              <div className="absolute inset-x-0 bottom-3 flex items-end justify-around gap-1 px-3">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.9, ease: 'easeOut' }}
                    className="w-full rounded-t-[2px]"
                    style={{ background: `${project.accentColor}55` }}
                  />
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/4 rounded-xl p-3 border border-white/5">
                <span className="block text-[8px] uppercase text-white/35 mb-0.5">Users</span>
                <span className="text-sm font-bold text-white">{project.stats.users}</span>
              </div>
              <div className="bg-white/4 rounded-xl p-3 border border-white/5">
                <span className="block text-[8px] uppercase text-white/35 mb-0.5">Growth</span>
                <span className="text-sm font-bold text-emerald-400">{project.stats.growth}</span>
              </div>
            </div>

            {/* Tech tags */}
            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/4 rounded-md text-[9px] font-semibold text-white/50 border border-white/8"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-black/60 bg-zinc-700" />
              ))}
              <div
                className="w-7 h-7 rounded-full border-2 border-black/60 flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: project.accentColor }}
              >
                +8
              </div>
            </div>
            <button className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all active:scale-95 shadow-xl">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Glossy sweep on hover */}
        <div className="absolute top-0 left-[-100%] w-full h-[200%] bg-white/4 rotate-[45deg] group-hover:left-[100%] transition-all duration-1000 pointer-events-none" />
      </div>
    </motion.div>
  );
};

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((p) => (p + 1) % showcaseProjects.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center bg-brand-dark"
    >
      {/* ── Cinematic background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-24 w-[550px] h-[550px] bg-cyan-500/8 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,transparent_30%,rgba(10,10,10,0.95)_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            OLÁ, EU SOU
          </motion.span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
            Desenvolvedor web que transforma ideias em{' '}
            <span className="bg-gradient-to-r from-brand-blue to-violet-400 bg-clip-text text-transparent">
              soluções reais.
            </span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Automatizações, sistemas completos, páginas dinâmicas e estáticas com foco em
            performance e experiência.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10 group">
              Iniciar um projeto
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
              Ver portfólio
            </button>
          </div>

          {/* ── Stats Cluster (3D diagonal) ── */}
          <StatsCluster />

          {/* Scroll hint */}
          <div className="flex items-center gap-3 text-white/30 text-sm mt-14">
            <span className="w-px h-10 bg-white/20" />
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
            <span className="uppercase tracking-widest text-[10px]">rolar para explorar</span>
          </div>
        </motion.div>

        {/* ── Right: Premium 3D Carousel ── */}
        <div
          className="relative h-[560px] flex items-center justify-center mt-12 lg:mt-0"
          style={{ perspective: '2000px' }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {showcaseProjects.map((project, index) => (
              <PremiumCard
                key={project.title}
                project={project}
                index={index}
                activeIndex={activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Navigation pill */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-5 bg-white/4 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full">
            <button
              onClick={() =>
                setActiveIndex((p) => (p - 1 + showcaseProjects.length) % showcaseProjects.length)
              }
              className="p-1.5 text-white/40 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {showcaseProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex ? 'bg-brand-blue w-6' : 'bg-white/15 w-1.5 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveIndex((p) => (p + 1) % showcaseProjects.length)}
              className="p-1.5 text-white/40 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Ambient floating particles */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full blur-[1px] animate-float opacity-40" style={{ left: '18%', top: '28%' }} />
        <div className="absolute w-1 h-1 bg-white rounded-full blur-[1px] animate-float opacity-25" style={{ left: '72%', top: '62%', animationDelay: '3s' }} />
        <div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] animate-float opacity-30" style={{ left: '42%', top: '78%', animationDelay: '6s' }} />
      </div>

      <style>{`
        .animate-float {
          animation: heroFloat 12s ease-in-out infinite;
        }
        @keyframes heroFloat {
          0%   { transform: translate(0,  0px);   opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translate(80px, -120px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
