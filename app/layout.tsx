import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import 'react-phone-number-input/style.css';
import ContextProvider from "@/providers/ContextProvider";
import "@/styles/globals.css";
import 'react-toastify/ReactToastify.css';
import 'swiper/css'
import ModalProvider from "@/providers/ModalProvider";


export const metadata: Metadata = {
  title: {
    template: "PDLC | %s",
    default: "PDLC"
  },
  description: "DriveIQ is Ghana’s trusted car dealership offering a wide selection of new and used vehicles. Shop directly from us with confidence. Your journey to owning the perfect car starts here.",
  keywords: [],
  creator: "https://github.com/Ebenezeroffei",
  authors: [
    {
      name: "Ebenezer Ofei Okyere",
      url: "https://github.com/Ebenezeroffei"
    },
    {
      name: "HarnessIQ",
      url: "https://github.com/HarnessIQ"
    }
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a]">
        <ToastContainer />
        <ContextProvider>
          <ModalProvider />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
