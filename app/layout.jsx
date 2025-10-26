import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | コマ日記',
        default: 'コマ日記'
    },
    description:
        '写真とテキストからAIがコマ割り日記を自動生成。思い出をサクッと整理して、かわいく残せるアプリ「コマ日記」。',
    metadataBase: new URL('https://example.com'),
    openGraph: {
        title: 'コマ日記',
        description:
            '写真とテキストからAIがコマ割り日記を自動生成。思い出をサクッと整理して、かわいく残せるアプリ。',
        type: 'website',
        url: 'https://example.com',
        images: [{ url: '/images/og.svg', width: 1200, height: 630, alt: 'コマ日記' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'コマ日記',
        description:
            '写真とテキストからAIがコマ割り日記を自動生成。思い出をサクッと整理して、かわいく残せるアプリ。',
        images: ['/images/og.svg']
    },
    icons: {
        icon: [
            { url: '/icons/app-16.png', sizes: '16x16', type: 'image/png' },
            { url: '/icons/app-32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: '/icons/app-180.png',
        other: [
            { rel: 'mask-icon', url: '/favicon.svg', color: '#ec4899' }
        ]
    }
};

export const viewport = {
    themeColor: '#ffe4e6' // soft pink for mobile browser UI
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <head>
                {/* App icons: add your PNGs in public/icons as named below */}
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/app-180.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/app-32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/app-16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                {/* Fallback SVG icon */}
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-neutral-900 bg-pink-50">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
