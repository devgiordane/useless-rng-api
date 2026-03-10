import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'useless-rng-api',
    description: 'Simple random number generator API built for automation tools like n8n and Make.',
    openGraph: {
        title: 'useless-rng-api',
        description: 'Simple random number generator API built for automation tools like n8n and Make.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
