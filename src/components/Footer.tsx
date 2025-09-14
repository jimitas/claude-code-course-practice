"use client";

import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Youtube,
  Facebook,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    course: [
      { name: "コース概要", href: "#features" },
      { name: "カリキュラム", href: "#curriculum" },
      { name: "講師紹介", href: "#instructor" },
      { name: "料金プラン", href: "#pricing" }
    ],
    support: [
      { name: "よくある質問", href: "#faq" },
      { name: "無料相談", href: "#contact" },
      { name: "技術サポート", href: "#support" },
      { name: "コミュニティ", href: "#community" }
    ],
    company: [
      { name: "会社概要", href: "#about" },
      { name: "利用規約", href: "#terms" },
      { name: "プライバシーポリシー", href: "#privacy" },
      { name: "お問い合わせ", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Claude Code 講座</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI時代のプログラミング技術を学び、
              あなたのキャリアを次のレベルへ。
              実践的なスキルを身につけて、
              即戦力として活躍しましょう。
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* リンクセクション */}
          <div>
            <h4 className="text-lg font-semibold mb-4">コース</h4>
            <ul className="space-y-3">
              {footerLinks.course.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@claude-code-course.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>東京都渋谷区1-2-3</span>
              </div>
            </div>
          </div>
        </div>

        {/* お申し込み促進セクション */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              まだ迷っていますか？
            </h3>
            <p className="text-blue-100 mb-6">
              7日間の無料体験で、Claude Codeの魅力を実際に体験してください。
              気に入らなければ、いつでもキャンセルできます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                無料体験を始める
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                詳細資料をダウンロード
              </button>
            </div>
          </div>
        </div>

        {/* 著作権情報 */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 Claude Code Course. All rights reserved.</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 法的情報 */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-500 text-center">
          <p className="mb-2">
            特定商取引法に基づく表記 | プライバシーポリシー | 利用規約
          </p>
          <p>
            ※ 本講座は個人の学習を支援するものであり、受講により必ずしも転職や昇進を保証するものではありません。
            効果には個人差があります。
          </p>
        </div>
      </div>
    </footer>
  );
}