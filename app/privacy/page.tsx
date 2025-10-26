export const metadata = {
  title: 'プライバシーポリシー'
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl pt-8 sm:pt-12">
      <header className="mt-4 mb-8 sm:mt-6 sm:mb-10">
        <h1 className="gradient-text mb-2">プライバシーポリシー</h1>
        <p className="text-sm opacity-70">最終更新日: 2025-10-25</p>
      </header>

      <article className="glass rounded-2xl p-6 sm:p-8 leading-relaxed">
        <section className="space-y-3">
          <h2>1. 事業者情報</h2>
          <p className="opacity-90">
            本ポリシーは、アプリ「コマ日記」（以下「本アプリ」）を提供する当社（以下「当社」）が、ユーザーの個人情報
            およびそれに準ずる情報を取り扱う際の方針を定めるものです。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>2. 収集する情報</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-90">
            <li>
              アプリ内データ（端末内保存）: ユーザーが作成した日記、写真、レイアウト、テンプレート設定など。これらは原則として端末内に保存され、
              ユーザーが削除可能です。
            </li>
            <li>
              サーバに送信される情報: 生成に必要なテキスト、サムネイル等の最小限のデータ（AI処理やレート制御、セッション維持等のため）。
            </li>
            <li>
              端末情報・ログ: アプリの利用状況、エラー、識別子（OS種別、アプリバージョン等）。個人を特定しない範囲の統計情報として活用します。
            </li>
            <li>
              課金情報: Appleの決済に関する情報は Apple により管理され、当社はクレジットカード番号等の決済情報を取得しません（StoreKit）。
            </li>
            <li>
              広告関連情報: Google AdMob による非パーソナライズド広告の配信に伴い、広告識別子等が利用される場合があります。
            </li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2>3. 利用目的</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-90">
            <li>本アプリの提供、維持、保護、改善のため</li>
            <li>コンテンツ生成、保存、共有等の機能を適切に動作させるため</li>
            <li>不正利用の防止、セキュリティ対策、サービスの安定運用のため</li>
            <li>品質向上のための統計的分析（個人を特定しない形で実施）</li>
            <li>法令や利用規約に違反する行為への対応のため</li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2>4. 法的根拠・同意</h2>
          <p className="opacity-90">
            一部の処理はユーザーの同意、契約の履行、正当な利益、法的義務の履行等に基づいて行われます。ユーザーは端末設定やアプリ設定を通じて、
            許可の範囲を変更または撤回できます（ただし、機能の一部が利用できなくなる場合があります）。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>5. 第三者提供・業務委託</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-90">
            <li>OpenAI（画像・台本生成等のAI処理）</li>
            <li>Cloudflare Workers（中継、レート制御、セッション管理等）</li>
            <li>Google（AdMob による広告配信）</li>
            <li>Apple（StoreKitによる決済管理）</li>
          </ul>
          <p className="opacity-90">
            当社は、上記の委託先に対し、契約等により適切な安全管理措置を義務付け、必要最小限の範囲で情報を取り扱います。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>6. 保存期間・削除</h2>
          <p className="opacity-90">
            端末内データはユーザーの操作でいつでも削除できます。サーバ側に一時保存されるデータは、目的達成に必要な最小限の期間のみ保存し、
            その後削除または匿名化します。法令により一定期間の保存が義務付けられる場合を除きます。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>7. 安全管理措置</h2>
          <p className="opacity-90">
            当社は、アクセス制御、暗号化、監査ログ、権限管理等の技術的・組織的安全管理措置を講じ、情報の漏えい、滅失、毀損の防止に努めます。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>8. ユーザーの権利</h2>
          <p className="opacity-90">
            ユーザーは、保有個人データの開示、訂正、追加、削除、利用停止、第三者提供の停止等を求めることができます。ご請求は「お問い合わせ」までご連絡ください。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>9. 国際移転</h2>
          <p className="opacity-90">
            委託先のサーバが国外に所在する場合、当該国に情報が移転されることがあります。当社は、適用法令に従い、適切な移転保護措置を講じます。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>10. 児童のプライバシー</h2>
          <p className="opacity-90">13歳未満の個人情報は、保護者の同意なく収集しません。</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>11. 本ポリシーの変更</h2>
          <p className="opacity-90">
            本ポリシーの内容は、必要に応じて改定されることがあります。重要な変更がある場合は、本アプリ内またはウェブサイトでお知らせします。
          </p>
        </section>

        <section className="mt-6 space-y-3">
          <h2>12. お問い合わせ</h2>
          <p className="opacity-90">メール: komanikki.support@gmail.com</p>
        </section>
      </article>
    </div>
  );
}
