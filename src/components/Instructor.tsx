"use client";

import { 
  Award, 
  BookOpen, 
  Users, 
  Star,
  Github,
  Linkedin,
  Twitter,
  User
} from "lucide-react";

export default function Instructor() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "10年以上の開発経験",
      description: "フルスタック開発から大規模システム設計まで豊富な実務経験"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "技術書籍3冊出版",
      description: "AI活用プログラミングに関する専門書籍の著者"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1000名以上の指導実績",
      description: "企業研修から個人指導まで幅広い指導経験"
    }
  ];

  const expertise = [
    "AI活用プログラミング",
    "フルスタック開発",
    "クラウドアーキテクチャ",
    "DevOps・CI/CD",
    "チーム開発・コードレビュー",
    "技術教育・メンタリング"
  ];

  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
              <User className="w-4 h-4" />
              <span>講師紹介</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            経験豊富な講師があなたをサポート
          </h2>
          <p className="text-xl text-gray-600">
            AI時代のプログラミング教育の第一人者が、実践的なスキルを丁寧に指導します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">田中 AI郎</h3>
                <p className="text-gray-600">主任講師 / AI開発エンジニア</p>
                
                <div className="flex justify-center space-x-4 mt-4">
                  <div className="bg-white p-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
                    <Github className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="bg-white p-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="bg-white p-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-4 text-indigo-600">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              講師メッセージ
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                AI時代のプログラミングは、従来とは全く違うアプローチが求められます。
                私自身、Claude CodeをはじめとするAIツールを活用することで、
                開発効率が飛躍的に向上した経験があります。
              </p>
              <p>
                この講座では、単にツールの使い方を教えるだけでなく、
                AIとどのように協調してコードを書いていくか、
                その思考プロセスから実践的なテクニックまでを体系的にお伝えします。
              </p>
              <p>
                プログラミング初心者の方も、経験豊富な開発者の方も、
                新しい時代のコーディングスタイルを一緒に学んでいきましょう。
                皆さんのスキルアップを全力でサポートいたします。
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">専門分野</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              講師への質問・相談
            </h3>
            <p className="text-gray-600 mb-6">
              学習に関する疑問や技術的な質問は、いつでもお気軽にご相談ください。
              オフィスアワーやコミュニティを通じて、丁寧にサポートいたします。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">24時間</div>
                <div className="text-gray-600 text-sm">質問回答</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">週2回</div>
                <div className="text-gray-600 text-sm">ライブセッション</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">無制限</div>
                <div className="text-gray-600 text-sm">コード添削</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}