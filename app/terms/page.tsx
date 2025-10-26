export const metadata = {
  title: '利用規約'
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl pt-8 sm:pt-12">
      <header className="mt-4 mb-8 sm:mt-6 sm:mb-10">
        <h1 className="gradient-text mb-2">利用規約</h1>
        <p className="text-sm opacity-70">最終更新日: 2025-10-25</p>
      </header>

      <article className="glass rounded-2xl p-6 sm:p-8 leading-relaxed">
        <p className="mb-6 opacity-90">
          本規約は、アプリ「コマ日記」（以下「本アプリ」）の提供条件および当社と利用者との権利義務関係を定めるものです。
          本アプリをインストールまたは利用することにより、利用者は本規約に同意したものとみなされます。
        </p>

        <section className="space-y-3">
          <h2>1. 定義</h2>
          <p className="opacity-90">
            「利用者」とは、本アプリを利用する全ての個人をいいます。「コンテンツ」とは、利用者が作成・投稿・保存・共有する日記、画像、
            テキスト、テンプレートその他一切のデータをいいます。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>2. 適用</h2>
          <p className="opacity-90">
            本規約は、本アプリに関して当社が提供する一切のサービスに適用されます。当社が別途定める個別規約やガイドラインがある場合、
            それらは本規約の一部を構成し、相違がある場合は個別規約が優先します。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>3. アカウント・年齢</h2>
          <p className="opacity-90">未成年者は、保護者の同意を得た上で本アプリを利用してください。</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>4. サブスクリプションと課金</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-90">
            <li>本アプリの有料機能はサブスクリプション方式で提供されます。</li>
            <li>決済は Apple により行われ、当社は決済情報を保持しません（StoreKit）。</li>
            <li>自動更新: 契約期間満了の24時間前までにキャンセルしない限り自動更新されます。</li>
            <li>購読の管理・解約: 端末の「設定 ＞ Apple ID ＞ サブスクリプション」から行えます。</li>
            <li>返金: Apple の規約・手続に従います。当社は個別の返金対応を行いません。</li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2>5. 生成コンテンツの取扱い</h2>
          <p className="opacity-90">
            利用者が生成したコンテンツの著作権は原則として利用者に帰属します。ただし、当社はサービス運営・品質向上・不正防止等の目的に限り、
            コンテンツを必要最小限の範囲で表示、保存、分析できる非独占的かつ無償の利用権を有するものとします。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>6. 禁止事項</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-90">
            <li>法令・公序良俗に反する行為、第三者の権利侵害</li>
            <li>不正アクセス、スパム、過度な負荷を生じさせる行為</li>
            <li>わいせつ・差別・暴力・自傷等を助長するコンテンツの生成依頼</li>
            <li>リバースエンジニアリング等、当社システムの解析・妨害</li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2>7. 知的財産</h2>
          <p className="opacity-90">
            本アプリに関する著作権・商標権その他の知的財産権は当社または権利者に帰属します。利用者は、本アプリにより明示的に許諾された範囲を超えて利用してはなりません。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>8. サービスの変更・停止</h2>
          <p className="opacity-90">
            当社は、やむを得ない事由により、事前の通知なく本アプリの内容を変更・中断・終了することがあります。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>9. 免責</h2>
          <p className="opacity-90">
            当社は、本アプリに関して、事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有用性、特定目的適合性等）を含め、いかなる保証も行いません。
            利用者が被った損害について、当社に故意または重過失がある場合を除き、責任を負いません。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>10. 責任の限定</h2>
          <p className="opacity-90">
            当社が責任を負う場合でも、当社の賠償責任は、利用者が直近12ヶ月に当社に実際に支払った金額を上限とします。間接損害・特別損害・逸失利益について当社は責任を負いません。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>11. 反社会的勢力の排除</h2>
          <p className="opacity-90">利用者は、反社会的勢力に該当せず、また関与しないことを表明・保証します。</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>12. 規約の変更</h2>
          <p className="opacity-90">
            当社は、本規約を随時変更できます。重要な変更は、本アプリ内またはウェブサイトで告知し、告知後に利用を継続した場合は変更後規約に同意したものとみなします。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>13. 準拠法・裁判管轄</h2>
          <p className="opacity-90">本規約は日本法に準拠し、当社所在地を管轄する裁判所を第一審の専属的合意管轄とします。</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>14. お問い合わせ</h2>
          <p className="opacity-90">メール: komanikki.support@gmail.com</p>
        </section>
      </article>
    </div>
  );
}
