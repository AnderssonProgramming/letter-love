// src/app/layout.tsx

import "./styles/globals.css"; // o simplemente "./globals.css" si está en src/app

export const metadata = {
  title: "Carta para mamá",
  description: "Una app para felicitar a mamá en su día",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
