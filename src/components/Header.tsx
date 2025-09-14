"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-2xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="relative">
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Claude Code
              </h1>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              特徴
            </a>
            <a href="#curriculum" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              カリキュラム
            </a>
            <a href="#instructor" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              講師
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              受講生の声
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              料金
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">お申し込み</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}