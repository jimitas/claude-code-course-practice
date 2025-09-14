"use client";

import { ArrowRight, Clock, Gift, CheckCircle, Rocket, Zap, Crown, Star, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function CTA() {
  const urgencyFeatures = [
    "無条件100%返金保証",
    "24/7 VIPサポート", 
    "エリート限定修了証",
    "転職成功完全保証"
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1) star.opacity = 0;

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#fbbf24';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-black via-slate-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Animated Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Advanced Background Effects */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 animate-morphing-blob bg-gradient-to-r from-yellow-500/40 via-orange-500/30 to-red-500/40 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 animate-morphing-blob bg-gradient-to-r from-purple-500/50 via-pink-500/40 to-cyan-500/30 mix-blend-screen filter blur-3xl animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 animate-morphing-blob bg-gradient-to-r from-cyan-500/40 via-blue-500/35 to-purple-500/45 mix-blend-screen filter blur-3xl animation-delay-4000"></div>
      </div>

      {/* Holographic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 animate-holographic"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 perspective-2000" style={{ zIndex: 10 }}>
        
        {/* Supreme Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative group animate-float-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative ultra-glass px-10 py-5 rounded-full border-2 border-yellow-400/30">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-yellow-400 animate-bounce" />
                  <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent font-black text-xl">
                    🔥 最後のチャンス 🔥
                  </span>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse animation-delay-2000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-display-1 mb-8 transform-3d animate-float-3d">
            <span className="block text-white mb-4">
              革命を起こす時が来た
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-holographic leading-none">
              今すぐ頂点へ
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-slate-200 mb-12 max-w-6xl mx-auto leading-relaxed font-light">
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Claude Codeマスターとして、業界を
            </span>
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-3xl md:text-4xl mx-2">
              支配する側
            </span>
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              に回りませんか？
            </span>
            <br />
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              限定48時間
            </span>
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              での特別オファーです。
            </span>
          </p>

          {/* Countdown Timer Mock */}
          <div className="flex justify-center mb-12">
            <div className="ultra-glass rounded-3xl p-8 border-2 border-yellow-400/20">
              <div className="flex items-center justify-center space-x-8">
                {[
                  { value: "47", label: "時間" },
                  { value: "23", label: "分" },
                  { value: "15", label: "秒" }
                ].map((time, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      {time.value}
                    </div>
                    <div className="text-slate-300 text-sm font-medium">
                      {time.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Offer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
              なぜ
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                今すぐ
              </span>
              なのか？
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Crown className="w-8 h-8" />,
                  title: "業界支配権の獲得",
                  description: "AI開発の最前線に立ち、競合を圧倒的に引き離す",
                  gradient: "from-yellow-400 to-orange-500"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "年収1000万円への最短ルート",
                  description: "トップ企業が奪い合う希少人材になる",
                  gradient: "from-cyan-400 to-purple-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "時代の変革者として君臨",
                  description: "AI時代を牽引するリーダーとして歴史に名を残す",
                  gradient: "from-purple-400 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl ultra-glass border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {urgencyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium CTA Card */}
          <div className="relative">
            {/* Ultimate Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-30 blur-3xl animate-pulse"></div>
            
            <div className="relative ultra-glass rounded-3xl p-10 border-2 border-yellow-400/30 transform-3d hover:rotate-y-6 transition-all duration-700">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-6 py-2">
                    <span className="text-black font-black text-lg">🏆 PREMIUM ELITE 🏆</span>
                  </div>
                </div>
                
                <h4 className="text-3xl font-black text-white mb-4">
                  究極の成功体験
                </h4>
                <p className="text-slate-300 mb-6">
                  業界トップ1%の開発者が選ぶプレミアムプラン
                </p>
                
                <div className="mb-8">
                  <div className="text-sm text-slate-400 line-through mb-2">通常価格 ¥298,000</div>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">¥89,800</span>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-bold inline-block shadow-lg">
                    🔥 70%OFF 限定価格 🔥
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <button className="group w-full relative overflow-hidden transform-3d hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl py-6 px-8 group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center space-x-4 text-black">
                      <Rocket className="w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-2xl font-black">
                        今すぐエリートになる
                      </span>
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </button>
                
                <button className="group w-full ultra-glass border-2 border-slate-500/30 rounded-2xl py-4 px-8 hover:border-slate-400/50 transition-all duration-300 hover:scale-105">
                  <span className="text-xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-100">
                    48時間無料トライアル
                  </span>
                </button>
              </div>

              <div className="text-center mt-8 text-sm text-slate-400">
                <div className="mb-2">💳 全決済方法対応 | 📱 即座にアクセス開始</div>
                <div>🛡️ SSL暗号化で完全セキュア</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Urgency Message */}
        <div className="text-center">
          <div className="inline-block ultra-glass rounded-2xl p-8 border-2 border-red-500/30 mb-8">
            <div className="flex items-center justify-center font-black text-2xl mb-4">
              <Clock className="w-8 h-8 mr-4 text-red-400 animate-bounce" />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                あと47名で募集締切
              </span>
            </div>
            <p className="text-slate-300 text-lg">
              このチャンスを逃すと、次回は半年後になります。
            </p>
          </div>
          
          <p className="text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed">
            <span className="font-light">AI革命の</span>
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">勝者</span>
            <span className="font-light">になるか、</span>
            <span className="font-bold bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">取り残される側</span>
            <span className="font-light">に回るか。<br />
            選択は今、あなたの手にあります。</span>
          </p>
        </div>
      </div>
    </section>
  );
}