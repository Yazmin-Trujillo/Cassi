import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "../primereact-theme/themes/mytheme/theme.scss";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";
import { menuEnd, menuStart } from "./menuItems";
import Menu from "./components/organismos/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eco Creadores",
  description: "Aplicacion sobre ecosustentabilidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-green-50 via-white to-emerald-50 font-sans`}
      >
        <PrimeReactProvider
          value={{
            pt: {
              button: {
                root: {
                  className: "cursor-pointer p-3 rounded-xl  flex gap-2",
                },
              },
            },
          }}
        >
          <Menu />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
