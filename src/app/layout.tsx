// src/app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Solar Investment Calculator',
  description: 'ソーラー投資評価システム',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}