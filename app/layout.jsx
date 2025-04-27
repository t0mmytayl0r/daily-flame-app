export const metadata = {
  title: "The Daily Flame",
  description: "Daily love challenges for couples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}