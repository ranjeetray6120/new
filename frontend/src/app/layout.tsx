import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Adda | Your Ultimate Sports Store',
  description: 'The premium MVP sports eCommerce application for Sports Adda fans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#07080a] text-slate-100 min-h-screen" suppressHydrationWarning>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
