import Link from 'next/link';

const navItems = [
    { linkText: 'ホーム', href: '/' },
    { linkText: 'ダウンロード', href: '#download' },
    { linkText: '利用規約', href: '/terms' },
    { linkText: 'プライバシー', href: '/privacy' }
];

export function Header() {
    return (
        <div className="sticky top-0 z-50 pt-6 sm:pt-8">
            <nav className="glass mx-auto flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2 sm:px-6">
                <Link href="/" className="no-underline">
                    <span className="gradient-text text-lg font-extrabold tracking-tight">コマ日記</span>
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap items-center gap-x-1 gap-y-0.5 sm:gap-x-2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="no-underline rounded-full px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/5"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    );
}
