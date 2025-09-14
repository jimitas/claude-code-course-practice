"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "プログラミング初心者でも受講できますか？",
      answer: "はい、大丈夫です。基礎的なプログラミング知識があれば十分です。HTMLやCSS、JavaScriptの基本的な知識があれば、AIを活用したプログラミング手法を効率的に学習できます。初心者の方には事前学習コンテンツもご用意しています。"
    },
    {
      question: "Claude Codeを使ったことがないのですが問題ありませんか？",
      answer: "全く問題ありません。講座ではClaude Codeの基本的な使い方から始まり、段階的に高度な活用方法まで学習します。実際に多くの受講生がClaude Code未経験からスタートして、優秀な成果を上げています。"
    },
    {
      question: "仕事をしながらでも受講できますか？",
      answer: "はい、可能です。オンライン形式なので、お好きな時間に学習していただけます。週あたり10-15時間程度の学習時間を確保していただければ、8週間で完走できるように設計されています。多忙な社会人の方も多数受講されています。"
    },
    {
      question: "受講期間中のサポート体制はどうなっていますか？",
      answer: "プランによって異なりますが、メールサポート、ライブセッション、個別メンタリングなどを提供しています。スタンダードプラン以上では24時間以内の質問回答を保証しており、学習でつまずくことがないよう手厚くサポートいたします。"
    },
    {
      question: "修了後のキャリアサポートはありますか？",
      answer: "スタンダードプラン以上では、修了後のキャリア相談サポートを提供しています。プレミアムプランでは、履歴書添削や面接対策、転職エージェントのご紹介なども行っており、実際に多くの方がキャリアアップを実現されています。"
    },
    {
      question: "返金保証の条件を教えてください",
      answer: "受講開始から30日以内であれば、理由を問わず全額返金いたします。講座内容にご満足いただけない場合や、学習時間が確保できない場合など、どのような理由でも対応いたします。返金手続きも簡単で、メール1本で承ります。"
    },
    {
      question: "分割払いは可能ですか？",
      answer: "はい、クレジットカードでの分割払いに対応しています。最大24回まで分割可能で、月々のお支払い額を抑えて受講していただけます。詳しい分割回数と手数料については、お申し込み時にご確認いただけます。"
    },
    {
      question: "受講に必要な環境や機材はありますか？",
      answer: "インターネットに接続されたパソコン（Windows、Mac問わず）があれば受講できます。Claude Codeはブラウザベースで動作するため、特別なソフトウェアのインストールは不要です。推奨スペックについては申込後にご案内いたします。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              <span>よくある質問</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            FAQ
          </h2>
          <p className="text-xl text-gray-600">
            受講をご検討中の皆さまからよくいただくご質問にお答えします。
            その他ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            まだ疑問が解決しませんか？
          </h3>
          <p className="text-gray-600 mb-6">
            上記以外にもご質問がございましたら、お気軽にお問い合わせください。
            専門スタッフが丁寧にお答えいたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              無料相談を予約する
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-white transition-colors">
              メールで問い合わせる
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-gray-900">無料相談</div>
              <div className="text-gray-600">平日 9:00-18:00</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">メールサポート</div>
              <div className="text-gray-600">24時間受付</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">チャットサポート</div>
              <div className="text-gray-600">平日 10:00-17:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}