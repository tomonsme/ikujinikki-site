export const metadata = {
  title: '送信ありがとうございました'
};

export default function Thanks() {
  return (
    <div className="mx-auto max-w-2xl pt-16 sm:pt-24">
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h1 className="gradient-text mb-3">ご登録ありがとうございます</h1>
        <p className="opacity-90">リリース情報をメールでお届けします。公開まで今しばらくお待ちください。</p>
      </div>
    </div>
  );
}

