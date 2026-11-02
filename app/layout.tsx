import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plott - Interactive 3D Property Tours",
  description: "Transform your property listings into interactive 3D experiences. Close more deals with virtual tours, lead tracking, and data-driven insights.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#3B82F6",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
