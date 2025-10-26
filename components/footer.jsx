export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                <p>© 2025 コマ日記</p>
                <span className="opacity-30">•</span>
                <a href="/terms" className="no-underline hover:underline">利用規約</a>
                <span className="opacity-30">•</span>
                <a href="/privacy" className="no-underline hover:underline">プライバシー</a>
                <span className="opacity-30">•</span>
                <a href="mailto:komanikki.support@gmail.com" className="no-underline hover:underline">お問い合わせ</a>
            </div>
        </footer>
    );
}
