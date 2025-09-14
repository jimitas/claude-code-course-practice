"use client";

import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Play,
  Code2,
  Brain,
  Rocket,
  Target
} from "lucide-react";

export default function Curriculum() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Claude Code基礎",
      description: "Claude Codeの基本的な使い方とAI活用の基礎を学びます。",
      lessons: [
        "Claude Codeの概要と導入",
        "基本的なコマンドとショートカット",
        "効果的なプロンプト作成",
        "コード生成とリファクタリング"
      ],
      duration: "10時間",
      icon: <BookOpen className="w-6 h-6" />,
      color: "blue"
    },
    {
      week: "Week 3-4",
      title: "実践的AI活用",
      description: "実際の開発シナリオでのClaude Code活用方法を習得します。",
      lessons: [
        "デバッグとトラブルシューティング",
        "テストコード自動生成",
        "ドキュメント作成の自動化",
        "コードレビューの効率化"
      ],
      duration: "12時間",
      icon: <Code2 className="w-6 h-6" />,
      color: "green"
    },
    {
      week: "Week 5-6",
      title: "プロジェクト開発",
      description: "実際のプロジェクトを通してAIペアプログラミングを実践します。",
      lessons: [
        "Webアプリケーション開発",
        "API設計と実装",
        "データベース連携",
        "デプロイメント自動化"
      ],
      duration: "15時間",
      icon: <Brain className="w-6 h-6" />,
      color: "purple"
    },
    {
      week: "Week 7-8",
      title: "応用とベストプラクティス",
      description: "高度な活用法とチーム開発でのベストプラクティスを学びます。",
      lessons: [
        "チーム開発での活用方法",
        "セキュリティ考慮事項",
        "パフォーマンス最適化",
        "継続的な学習とスキル向上"
      ],
      duration: "13時間",
      icon: <Rocket className="w-6 h-6" />,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="w-4 h-4" />
              <span>学習カリキュラム</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            8週間で完全習得
          </h2>
          <p className="text-xl text-gray-600">
            段階的に構成されたカリキュラムで、基礎から応用まで体系的に学習できます。
            実践的なプロジェクトを通して、即戦力となるスキルを身につけましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${getColorClasses(module.color)} mr-4`}>
                    {module.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">{module.week}</div>
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {module.duration}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{module.description}</p>
              
              <ul className="space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              学習サポート体制
            </h3>
            <p className="text-gray-600">
              充実したサポートで、確実にスキルアップできる環境を提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">動画講義</h4>
              <p className="text-gray-600 text-sm">分かりやすい動画で理論と実践をバランス良く学習</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ハンズオン課題</h4>
              <p className="text-gray-600 text-sm">実際にコードを書きながら体験的に学習</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">個別フィードバック</h4>
              <p className="text-gray-600 text-sm">講師からの丁寧なフィードバックで確実にスキルアップ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}