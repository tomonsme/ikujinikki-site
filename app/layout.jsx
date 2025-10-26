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
    }
};

export const viewport = {
    themeColor: '#0b1743'
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
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
