"use client";

import { 
  Zap, 
  Target, 
  Users, 
  Clock, 
  Award, 
  BookOpen,
  Lightbulb,
  TrendingUp,
  Sparkles,
  Rocket,
  Brain,
  Shield
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "革命的AI統合",
      description: "Claude Codeとの完全同期により、従来の10倍の開発速度を実現。未来のコーディング体験を今すぐ。",
      gradient: "from-yellow-300 via-orange-400 to-red-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      glowColor: "shadow-yellow-500/40",
      accentColor: "text-yellow-400",
      stats: "10x",
      statsLabel: "生産性向上"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "実戦マスタリー", 
      description: "Fortune 500企業の最前線で使われる高度テクニックを直接習得。即戦力エンジニアへの最短ルート。",
      gradient: "from-emerald-300 via-cyan-400 to-blue-500",
      bgGradient: "from-emerald-500/20 to-cyan-500/20",
      glowColor: "shadow-emerald-500/40",
      accentColor: "text-emerald-400",
      stats: "98%",
      statsLabel: "就職成功率"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI思考回路習得",
      description: "AIの思考パターンを理解し、人間とAIの協働による次世代開発手法を完全マスター。",
      gradient: "from-blue-300 via-purple-400 to-pink-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      glowColor: "shadow-blue-500/40",
      accentColor: "text-blue-400",
      stats: "∞",
      statsLabel: "創造性拡張"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "超高速学習システム",
      description: "独自開発の加速学習メソッドにより、通常2年かかる内容を8週間で完全習得可能。",
      gradient: "from-purple-300 via-pink-400 to-red-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "shadow-purple-500/40",
      accentColor: "text-purple-400",
      stats: "8x",
      statsLabel: "学習速度"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "キャリア保証制度",
      description: "修了後6ヶ月以内の転職成功を完全保証。未達成の場合は受講料を全額返金いたします。",
      gradient: "from-pink-300 via-rose-400 to-orange-500",
      bgGradient: "from-pink-500/20 to-rose-500/20",
      glowColor: "shadow-pink-500/40",
      accentColor: "text-pink-400",
      stats: "100%",
      statsLabel: "成功保証"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "エリート限定コミュニティ",
      description: "業界トップ1%のエンジニアたちとの専用ネットワーク。一生モノの人脈と最新情報を獲得。",
      gradient: "from-cyan-300 via-blue-400 to-purple-500",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      glowColor: "shadow-cyan-500/40",
      accentColor: "text-cyan-400",
      stats: "1%",
      statsLabel: "エリート層"
    }
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 animate-morphing-blob bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 animate-morphing-blob bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-orange-500/20 mix-blend-screen filter blur-3xl animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 animate-morphing-blob bg-gradient-to-r from-pink-500/30 via-cyan-500/25 to-purple-500/35 mix-blend-screen filter blur-3xl animation-delay-4000"></div>
      </div>

      {/* Neural Network Pattern */}
      <div 
        className="absolute inset-0 opacity-5 animate-gradient-shift"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 perspective-2000">
        {/* Revolutionary Header */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="flex justify-center mb-8">
            <div className="relative group animate-float-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative ultra-glass px-10 py-5 rounded-full border-2 border-white/20">
                <div className="flex items-center space-x-4">
                  <Lightbulb className="w-6 h-6 text-emerald-400" />
                  <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent font-black text-xl">
                    圧倒的優位性
                  </span>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse animation-delay-2000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-display-2 mb-8 transform-3d animate-float-3d">
            <span className="block text-white mb-4">
              なぜ選ばれ続けるのか
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-holographic">
              圧倒的差別化要因
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed font-light max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              業界標準を遥かに超越した
            </span>
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mx-2">
              革命的学習体験
            </span>
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              があなたを
            </span>
            <br />
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-3xl md:text-4xl">
              トップ1%エンジニア
            </span>
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              へと押し上げます。
            </span>
          </p>
        </div>

        {/* Revolutionary Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative transform-3d hover:rotate-x-6 hover:rotate-y-6 transition-all duration-700"
            >
              {/* Advanced Glow Effects */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity duration-700`}></div>
              <div className={`absolute -inset-2 bg-gradient-to-br ${feature.bgGradient} opacity-50 group-hover:opacity-80 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className={`relative ultra-glass border-2 border-white/10 rounded-3xl p-8 lg:p-10 group-hover:border-white/30 transition-all duration-700 group-hover:scale-105 ${feature.glowColor} hover:shadow-2xl`}>
                
                {/* Floating Stats Badge */}
                <div className="absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-300">
                  <div className={`ultra-glass rounded-2xl px-4 py-2 border border-white/20 bg-gradient-to-r ${feature.bgGradient}`}>
                    <div className="text-center">
                      <div className={`text-2xl font-black ${feature.accentColor}`}>
                        {feature.stats}
                      </div>
                      <div className="text-xs text-slate-300 font-medium">
                        {feature.statsLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Icon with Advanced Effects */}
                <div className="relative mb-8">
                  <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${feature.bgGradient} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-white/10`}>
                    <div className={`${feature.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    {/* Micro Sparkle Effects */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Floating Ring Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 ${feature.accentColor} opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-125 transition-all duration-500`}></div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-cyan-100 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-sm animate-pulse`}></div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">
                  学習効果を実感
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                受講生の90%以上が「AI活用スキルが大幅に向上した」と回答。
                実際のプロジェクトでの生産性向上を実感できます。
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 開発時間の短縮: 平均50%削減</li>
                <li>• コード品質の向上: バグの発生率30%減少</li>
                <li>• 新技術の習得速度: 従来の2倍のペース</li>
              </ul>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-gray-600">満足度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}