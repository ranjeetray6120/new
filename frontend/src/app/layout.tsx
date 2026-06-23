import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import type { Metadata } from 'next';
import Script from 'next/script';

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NT3DQKR3');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID || 'AW-17780056138'}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID || 'AW-17780056138'}');
            `,
          }}
        />
        {/* End Google Tag (gtag.js) */}
      </head>
      <body className="antialiased bg-[#07080a] text-slate-100 min-h-screen" suppressHydrationWarning>

        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

