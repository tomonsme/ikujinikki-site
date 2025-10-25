export default function Privacy() {
  return (
    <main style={{ maxWidth: 800, margin: "32px auto", padding: "0 16px", lineHeight: 1.8 }}>
      <h1>プライバシーポリシー</h1>

      <h2>1. 収集する情報</h2>
      <ul>
        <li>アプリ内データ: 日記・写真・設定（端末内保存）。</li>
        <li>送信される情報: 生成に必要なテキスト等（サーバ/AI処理のため）。</li>
        <li>課金情報: Appleの決済情報は当社で取得しません（StoreKit）。</li>
        <li>広告: AdMob（非パーソナライズ）。</li>
      </ul>

      <h2>2. 利用目的</h2>
      <p>機能提供、品質改善（匿名化された統計）、不正防止…</p>

      <h2>3. 第三者提供・委託</h2>
      <ul>
        <li>OpenAI（画像/台本生成API）</li>
        <li>Cloudflare Workers（中継、レート制御、セッショントークン）</li>
        <li>Google（AdMob）</li>
        <li>Apple（StoreKit）</li>
      </ul>

      <h2>4. 保存期間・削除</h2>
      <p>端末内データはユーザー操作で削除可能。サーバ側は必要最小限の期間保存…</p>

      <h2>5. 児童のプライバシー</h2>
      <p>13歳未満の個人情報は保護者の同意なく収集しません。</p>

      <h2>6. お問い合わせ</h2>
      <p>support@example.com</p>
      <p>最終更新日: 2025-10-25</p>
    </main>
  );
}

