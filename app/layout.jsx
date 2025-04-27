export const metadata = {
  title: "The Daily Flame",
  description: "Daily love challenges for couples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/icon-192.png" />
    <meta name="theme-color" content="#ffe4e6" />
  </head>
  <body>{children}</body>
</html>
  );
}