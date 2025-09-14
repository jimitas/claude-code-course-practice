"use client";

import { Check, Star, Crown, Zap, DollarSign } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "ベーシックプラン",
      price: "39,800",
      period: "8週間",
      description: "個人学習に最適なプランです",
      icon: <Zap className="w-6 h-6" />,
      color: "blue",
      popular: false,
      features: [
        "8週間のオンライン講座",
        "動画講義（全50本）",
        "ハンズオン課題（20課題）",
        "基本サポート（メール）",
        "修了証明書発行",
        "コミュニティアクセス（3ヶ月）"
      ],
      buttonText: "今すぐ始める",
      savings: null
    },
    {
      name: "スタンダードプラン",
      price: "59,800",
      period: "8週間",
      description: "最も人気の充実プランです",
      icon: <Star className="w-6 h-6" />,
      color: "green",
      popular: true,
      features: [
        "8週間のオンライン講座",
        "動画講義（全50本）",
        "ハンズオン課題（30課題）",
        "プレミアムサポート（24時間以内返信）",
        "ライブセッション（週2回）",
        "個別コードレビュー（無制限）",
        "修了証明書発行",
        "コミュニティアクセス（6ヶ月）",
        "キャリア相談サポート"
      ],
      buttonText: "人気プランで始める",
      savings: "20%お得"
    },
    {
      name: "プレミアムプラン",
      price: "89,800",
      period: "8週間",
      description: "本格的にスキルアップしたい方向け",
      icon: <Crown className="w-6 h-6" />,
      color: "purple",
      popular: false,
      features: [
        "8週間のオンライン講座",
        "動画講義（全50本）",
        "ハンズオン課題（40課題）",
        "VIPサポート（12時間以内返信）",
        "ライブセッション（週3回）",
        "個別コードレビュー（無制限）",
        "マンツーマンメンタリング（月4回）",
        "修了証明書発行",
        "コミュニティアクセス（12ヶ月）",
        "キャリア相談サポート",
        "転職サポート（履歴書添削・面接対策）",
        "追加プロジェクト課題（5個）"
      ],
      buttonText: "プレミアムで始める",
      savings: "30%お得"
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    if (popular) {
      return {
        card: "border-green-500 shadow-green-100 shadow-xl",
        button: "bg-green-600 hover:bg-green-700 text-white",
        icon: "bg-green-100 text-green-600",
        badge: "bg-green-500 text-white"
      };
    }
    
    const colors = {
      blue: {
        card: "border-gray-200",
        button: "bg-blue-600 hover:bg-blue-700 text-white",
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-500 text-white"
      },
      green: {
        card: "border-gray-200",
        button: "bg-green-600 hover:bg-green-700 text-white",
        icon: "bg-green-100 text-green-600",
        badge: "bg-green-500 text-white"
      },
      purple: {
        card: "border-gray-200",
        button: "bg-purple-600 hover:bg-purple-700 text-white",
        icon: "bg-purple-100 text-purple-600",
        badge: "bg-purple-500 text-white"
      }
    };
    
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <DollarSign className="w-4 h-4" />
              <span>料金プラン</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            あなたに最適なプランを選択
          </h2>
          <p className="text-xl text-gray-600">
            学習目標とライフスタイルに合わせて、3つのプランからお選びいただけます。
            全プラン30日間返金保証付きで安心してご利用いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            
            return (
              <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''}`}>
                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                )}
                
                <div className={`relative bg-white/90 backdrop-blur-xl rounded-3xl border p-8 transition-all duration-500 hover:transform hover:scale-[1.02] ${plan.popular ? 'border-purple-300 shadow-2xl shadow-purple-500/20' : 'border-gray-200 hover:border-gray-300'} hover:shadow-2xl`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg">
                        ✨ 最人気 ✨
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${plan.popular ? 'bg-gradient-to-br from-purple-100 to-cyan-100' : 'bg-gray-100'} group-hover:scale-110 transition-transform duration-300`}>
                      <div className={plan.popular ? 'text-purple-600' : 'text-gray-600'}>
                        {plan.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-black text-gray-900">¥{plan.price}</span>
                        <span className="text-gray-500 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    
                    {plan.savings && (
                      <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                        🔥 {plan.savings} 🔥
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`group/btn w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/25' 
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl'
                  }`}>
                    <span className="group-hover/btn:scale-105 inline-block transition-transform">
                      {plan.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                安心の保証制度
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">30日間返金保証</h4>
                    <p className="text-gray-600 text-sm">満足いただけない場合は全額返金いたします</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">分割払い対応</h4>
                    <p className="text-gray-600 text-sm">クレジットカード分割払いに対応</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">無料体験</h4>
                    <p className="text-gray-600 text-sm">申込前に7日間の無料体験が可能</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">限定価格</div>
                <div className="text-gray-600 mb-4">早期申込割引実施中</div>
                <div className="text-lg text-gray-900">
                  <span className="line-through text-gray-400">通常価格</span>
                  <span className="text-2xl font-bold text-red-600 ml-2">20%OFF</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  ※ 2024年12月末まで
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            プラン選択でお悩みの方は、まずは無料相談をご利用ください
          </p>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            無料相談を予約する
          </button>
        </div>
      </div>
    </section>
  );
}