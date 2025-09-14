"use client";

import { ArrowRight, Code, Bot, Sparkles, Zap, Star, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
    }> = [];

    const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 100
      };
    };

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        particle.opacity *= 0.995;

        if (particle.life <= 0 || particle.opacity < 0.01) {
          particles[index] = createParticle();
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Add glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fillStyle = particle.color;
        ctx.filter = 'blur(8px)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black perspective-2000"
    >
      {/* Advanced Particle Canvas */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Dynamic Morphing Background Blobs */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 animate-morphing-blob bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 animate-morphing-blob bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-orange-500/20 mix-blend-screen filter blur-3xl animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 animate-morphing-blob bg-gradient-to-r from-pink-500/30 via-cyan-500/25 to-purple-500/35 mix-blend-screen filter blur-3xl animation-delay-4000"></div>
      </div>

      {/* Holographic Grid */}
      <div 
        className="absolute inset-0 opacity-10 animate-holographic"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 20px 20px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Premium Badge */}
            <div className="flex justify-center mb-12">
              <div className="relative group animate-float-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="relative ultra-glass px-8 py-4 rounded-full border-2 border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Bot className="w-6 h-6 text-cyan-400" />
                      <div className="absolute -top-1 -right-1 animate-bounce">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent font-bold text-lg">
                      AI時代の革命的プログラミング教育
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Title with Revolutionary Typography */}
            <div className="relative mb-12">
              <h1 className="text-display-1 mb-6 transform-3d animate-float-3d">
                <span className="block text-white mb-4 relative">
                  <span className="relative inline-block">
                    Claude Code
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-2xl opacity-50 animate-pulse"></div>
                    <div className="absolute inset-0 animate-text-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  </span>
                </span>
                <span className="block bg-gradient-to-r from-cyan-300 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-holographic leading-none">
                  次世代開発体験
                </span>
              </h1>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 left-1/4 animate-particle-float">
                <Zap className="w-8 h-8 text-yellow-400 opacity-60" />
              </div>
              <div className="absolute -top-16 right-1/3 animate-particle-float animation-delay-2000">
                <Rocket className="w-6 h-6 text-cyan-400 opacity-70" />
              </div>
              <div className="absolute -bottom-8 left-1/3 animate-particle-float animation-delay-4000">
                <Code className="w-7 h-7 text-purple-400 opacity-60" />
              </div>
            </div>
            
            {/* Premium Description */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-slate-200 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  AIとペアプログラミングする
                </span>
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mx-2">
                  革命的開発手法
                </span>
                <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  を習得し、
                </span>
                <br />
                <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-3xl md:text-4xl">
                  生産性を10倍向上
                </span>
                <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  させる未来のスキルを、たった8週間で完全習得。
                </span>
              </p>
            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center mb-20 perspective-1000">
              <button className="group relative overflow-hidden transform-3d hover:rotate-y-6 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative ultra-glass border-2 border-white/30 px-12 py-6 rounded-3xl group-hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl group-hover:from-cyan-400/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                  <span className="relative flex items-center justify-center space-x-4 text-2xl font-black text-white">
                    <Rocket className="w-7 h-7 text-cyan-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                    <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                      今すぐ革命を開始
                    </span>
                    <ArrowRight className="w-7 h-7 text-purple-400 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
              </button>
              
              <button className="group relative overflow-hidden transform-3d hover:-rotate-y-6 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative ultra-glass border-2 border-slate-500/30 px-12 py-6 rounded-3xl group-hover:scale-105 group-hover:border-slate-400/50 transition-all duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-100 transition-all duration-300">
                    7日間プレミアム体験
                  </span>
                </div>
              </button>
            </div>
            
            {/* Revolutionary Feature Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: <Code className="w-12 h-12" />,
                  title: "実戦型マスタリー",
                  description: "現場の最前線で即戦力となる高度なテクニックを習得",
                  gradient: "from-cyan-400 to-blue-600",
                  glowColor: "shadow-cyan-500/30"
                },
                {
                  icon: <Bot className="w-12 h-12" />,
                  title: "AI統合エキスパート",
                  description: "Claude Code完全制覇により開発効率を革命的に向上",
                  gradient: "from-purple-400 to-pink-600",
                  glowColor: "shadow-purple-500/30"
                },
                {
                  icon: <Sparkles className="w-12 h-12" />,
                  title: "生産性10倍革命",
                  description: "業界トップレベルの効率的開発フローを完全構築",
                  gradient: "from-pink-400 to-orange-500",
                  glowColor: "shadow-pink-500/30"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative transform-3d hover:rotate-x-6 transition-all duration-700">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className={`relative ultra-glass border border-white/20 rounded-3xl p-10 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${feature.glowColor}`}>
                    <div className="text-center">
                      <div className={`inline-flex p-6 rounded-2xl mb-8 bg-gradient-to-r ${feature.gradient} bg-opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                        <div className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-6 group-hover:text-cyan-100 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Micro interaction elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" style={{ zIndex: 5 }}></div>
    </section>
  );
}