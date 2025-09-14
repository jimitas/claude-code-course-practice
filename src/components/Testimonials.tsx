"use client";

import { Star, Quote, User, Briefcase } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "佐藤 健太",
      role: "フロントエンドエンジニア",
      company: "株式会社テックイノベーション",
      content: "Claude Codeを使った開発手法を学んで、コーディング速度が3倍になりました。特にコンポーネント設計の部分で大きな改善を実感しています。講師の指導も非常に分かりやすく、実務にすぐ活かせる内容でした。",
      rating: 5,
      beforeAfter: {
        before: "手動コーディングで1日かかっていた作業",
        after: "AI活用で3時間で完了"
      }
    },
    {
      name: "田中 美咲",
      role: "バックエンドエンジニア",
      company: "フリーランス",
      content: "プログラミング経験は浅かったのですが、AIとペアプログラミングする手法を学んだことで、複雑なAPIも自信を持って開発できるようになりました。8週間のカリキュラムが非常に体系的で、段階的にスキルアップできました。",
      rating: 5,
      beforeAfter: {
        before: "基礎的なCRUD操作のみ",
        after: "複雑な認証システムも構築可能"
      }
    },
    {
      name: "山田 大輔",
      role: "プロダクトマネージャー",
      company: "スタートアップX",
      content: "技術者ではありませんが、開発チームとのコミュニケーション向上のために受講しました。Claude Codeでのプロトタイピングができるようになり、アイデアを素早く形にできるようになったのが大きな収穫です。",
      rating: 5,
      beforeAfter: {
        before: "アイデアの具現化に数週間",
        after: "プロトタイプを1日で作成"
      }
    }
  ];

  const stats = [
    { label: "満足度", value: "96%", description: "非常に満足・満足と回答" },
    { label: "転職成功", value: "85%", description: "年収アップを実現" },
    { label: "継続学習", value: "92%", description: "修了後も技術学習を継続" },
    { label: "推薦意向", value: "94%", description: "友人・同僚に推薦したい" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>受講生の声</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            実際に成果を上げた受講生の声
          </h2>
          <p className="text-xl text-gray-600">
            講座を修了した受講生の皆さんが、実際にどのような成果を上げているかご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="mb-4">
                <Quote className="w-6 h-6 text-gray-300 mb-2" />
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mt-4">
                <h5 className="font-semibold text-gray-900 mb-2 text-sm">成果</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">Before:</span>
                    <span className="text-gray-600">{testimonial.beforeAfter.before}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">After:</span>
                    <span className="text-gray-600">{testimonial.beforeAfter.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              受講生アンケート結果
            </h3>
            <p className="text-gray-600">
              修了生を対象にした満足度調査の結果（回答者数: 347名）
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-2">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">キャリアアップを実現</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            講座修了後、多くの受講生が転職成功やフリーランスとして独立、
            社内での昇進など様々な形でキャリアアップを実現しています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">平均年収アップ</div>
              <div className="text-3xl font-bold text-yellow-300">120万円</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">転職成功率</div>
              <div className="text-3xl font-bold text-yellow-300">85%</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">フリーランス独立</div>
              <div className="text-3xl font-bold text-yellow-300">23%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}