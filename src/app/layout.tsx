import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Courier Delivery - Send Packages Across Cities",
  description: "Fast and reliable courier delivery services",
};      

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
          <div className="pointer-events-none absolute -left-40 -top-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-indigo-300 opacity-40 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-pink-300 via-purple-200 to-indigo-400 opacity-30 blur-3xl animate-blob animation-delay-2000" />
          <div className="pointer-events-none absolute left-1/2 top-[55vh] -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-emerald-200 via-lime-200 to-cyan-200 opacity-30 blur-3xl animate-blob animation-delay-4000" />

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
