import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Perspresso — Premium Canned Espresso',
  description:
    'Awaken your senses with Perspresso. Single-origin Arabica, 120mg natural caffeine, zero calories. The premium canned espresso for those who refuse to compromise.',
  keywords: ['espresso', 'premium coffee', 'canned espresso', 'single origin', 'arabica', 'perspresso'],
  openGraph: {
    title: 'Perspresso — Premium Canned Espresso',
    description: 'Awaken your senses. Single-origin Arabica in a premium can.',
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
      <body>
        {/* Skip-to-content link for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
