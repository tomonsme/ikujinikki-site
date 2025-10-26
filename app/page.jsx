import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-16 sm:gap-24">
            <Hero />
            <Features />
            <Steps />
            <FAQ />
            <FinalCTA />
        </div>
    );
}

function Hero() {
    return (
        <section className="relative isolate overflow-hidden rounded-2xl px-6 py-12 sm:px-10 sm:py-16 ring-1 ring-black/5 bg-gradient-to-b from-pink-100 to-pink-50">
            {/* gradient blobs */}
            <div className="pointer-events-none absolute -left-16 -top-24 -z-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-80 w-80 rounded-full bg-rose-300/25 blur-3xl" />
            <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: 'url(/images/grid-bg.svg)', backgroundSize: 'cover' }} />
            <div className="grid items-center gap-10 sm:grid-cols-2">
                <div>
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-600">
                        <Sparkle className="size-4" /> 配信中
                    </p>
                    <h1 className="gradient-text mb-4">コマ日記 — 思い出が、物語になる。</h1>
                    <p className="mb-6 max-w-prose text-lg opacity-90">
                        写真とテキストからAIがコマ割り日記を自動生成。旅行、育児、日常の一コマを、かわいく・きれいに残せます。
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link href="#" className="btn btn-lg sm:min-w-44" aria-label="App Storeでダウンロード">
                            App Storeでダウンロード
                        </Link>
                        <span className="text-xs opacity-70">無料で始める・アプリ内課金あり</span>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-sm hover-raise">
                    <PhoneMock>
                        <Image
                            src="/images/app-screen.jpg"
                            alt="コマ日記の画面イメージ"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 80vw, 400px"
                            priority
                        />
                    </PhoneMock>
                </div>
            </div>
        </section>
    );
}


function Features() {
    const items = [
        { title: 'かんたん作成', desc: '写真と一言から即コマ割り。', Icon: MagicWand },
        { title: 'きれいに保存', desc: '高画質で端末内に保存。', Icon: DownloadIcon },
        { title: '共有も楽々', desc: 'SNS・家族へワンタップ共有。', Icon: ShareIcon },
        { title: 'テンプレ豊富', desc: '雰囲気に合わせて選べる。', Icon: TemplateIcon },
        { title: '編集自由', desc: 'コマの入れ替え・微調整OK。', Icon: EditIcon },
        { title: 'オフライン', desc: '生成後は通信なしで閲覧。', Icon: OfflineIcon }
    ];
    return (
        <section>
            <h2 className="mb-6">主な機能</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(({ title, desc, Icon }) => (
                    <div key={title} className="card hover-raise animate-in-up">
                        <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-white/10">
                            <Icon className="size-5" />
                        </div>
                        <h3 className="mb-1 font-semibold">{title}</h3>
                        <p className="text-sm opacity-90">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Steps() {
    const steps = [
        { n: 1, t: '写真を選ぶ', d: 'アルバムから数枚選ぶだけ。' },
        { n: 2, t: 'ひとこと入力', d: 'できごとを短くメモ。' },
        { n: 3, t: '自動で完成', d: 'AIがコマ割り日記を生成。' }
    ];
    return (
        <section className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="mb-6">使い方は3ステップ</h2>
            <div className="grid gap-4 sm:grid-cols-3">
                {steps.map((s) => (
                    <div key={s.n} className="card">
                        <div className="mb-2 text-sm font-bold text-neutral-600">STEP {s.n}</div>
                        <h3 className="mb-1 font-semibold">{s.t}</h3>
                        <p className="text-sm opacity-90">{s.d}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function FAQ() {
    const qa = [
        { q: '無料で使えますか？', a: '基本機能は無料。追加テンプレ等はアプリ内課金です。' },
        { q: '個人情報は保存されますか？', a: '端末内保存が基本。必要最小限のみサーバ処理します。' },
        { q: 'オフラインでも見られますか？', a: '生成後の作品は通信なしで閲覧できます。' }
    ];
    return (
        <section>
            <h2 className="mb-6">よくある質問</h2>
            <div className="grid gap-4 sm:grid-cols-3">
                {qa.map((i) => (
                    <div key={i.q} className="card">
                        <h3 className="mb-1 font-semibold">{i.q}</h3>
                        <p className="text-sm opacity-90">{i.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section id="download" className="glass rounded-2xl px-6 py-8 sm:px-10">
            <div className="flex flex-wrap items-center gap-4">
                <div className="grow">
                    <h2 className="mb-1">今日から、物語をつくろう。</h2>
                    <p className="opacity-90">コマ日記を今すぐダウンロード。</p>
                </div>
                <div className="flex gap-3">
                    <Link href="#" className="btn btn-lg sm:min-w-44" aria-label="App Storeでダウンロード">
                        App Storeでダウンロード
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* UI primitives */
function PhoneMock({ children }) {
    return (
        <div className="animate-float-slow mx-auto aspect-[9/19] w-full max-w-[320px] rounded-[2rem] bg-neutral-900 p-3 shadow-2xl ring-1 ring-white/20">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black ring-1 ring-white/10">
                {children}
                {/* status bar / notch */}
                <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black/70" />
                <div className="pointer-events-none absolute inset-x-4 top-2 z-10 flex items-center justify-between text-[10px] text-white/80">
                    <span>9:41</span>
                    <span>LTE • 100%</span>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-20" />
            </div>
            <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-white/20" />
        </div>
    );
}

//

/* Inline icon components */
function Sparkle(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 2l1.8 4.9L19 8.8l-5.2 1.1L12 15 10.2 9.9 5 8.8l5.2-1.9L12 2zm7 11l.9 2.4L22 16l-2.1.6L19 19l-.9-2.4L16 16l2.1-.6L19 13zM4 13l.7 1.8L7 15l-1.7.2L5 17l-.3-1.8L3 15l1-.2L4 13z" />
        </svg>
    );
}
function MagicWand(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M4 20l9-9 2 2-9 9H4v-2zm11-9l3-3 1 1-3 3-1-1zM3 21h4l10.3-10.3a2 2 0 000-2.8l-1.2-1.2a2 2 0 00-2.8 0L3 17v4z" />
        </svg>
    );
}
function DownloadIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 3a1 1 0 011 1v8l2.3-2.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L11 12V4a1 1 0 011-1zM5 20a1 1 0 010-2h14a1 1 0 010 2H5z" />
        </svg>
    );
}
function ShareIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M15 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zm13 8a3 3 0 100-6 3 3 0 000 6zM8.3 13.7l7.4 3.6a3 3 0 011.3-1.3l-7.4-3.6a3 3 0 01-1.3 1.3zm7.4-7.4L8.3 9.9a3 3 0 011.3 1.3l7.4-3.6a3 3 0 01-1.3-1.3z" />
        </svg>
    );
}
function TemplateIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M4 4h16a2 2 0 012 2v3H2V6a2 2 0 012-2zm-2 8h10v8H4a2 2 0 01-2-2v-6zm12 0h8v6a2 2 0 01-2 2h-6v-8z" />
        </svg>
    );
}
function EditIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
    );
}
function OfflineIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M2.3 2.3a1 1 0 011.4 0l18 18a1 1 0 01-1.4 1.4l-2.2-2.2A11.9 11.9 0 0112 22a11.9 11.9 0 01-8.8-3.8 1 1 0 111.5-1.3A9.9 9.9 0 0012 20c1.7 0 3.3-.4 4.7-1l-2.7-2.7c-.6.1-1.3.2-2 .2a7 7 0 01-7-7c0-.7.1-1.4.2-2L2.3 3.7a1 1 0 010-1.4zM12 4a7 7 0 016.8 8.3l-2.1-2.1A5 5 0 007.8 7.2L5.9 5.3C7.7 4.5 9.8 4 12 4z" />
        </svg>
    );
}
