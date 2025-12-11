import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-background text-foreground max-w-md mx-auto min-h-screen">
        {children}
      </body>
    </html>
  );
}
