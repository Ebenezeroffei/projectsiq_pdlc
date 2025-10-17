import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import 'react-phone-number-input/style.css';
import ContextProvider from "@/providers/ContextProvider";
import "@/styles/globals.css";
import 'react-toastify/ReactToastify.css';
import 'swiper/css'


export const metadata: Metadata = {
  title: {
    template: "DriveIQ | %s",
    default: "DriveIQ"
  },
  description: "DriveIQ is Ghana’s trusted car dealership offering a wide selection of new and used vehicles. Shop directly from us with confidence, transparency, and expert support. Your journey to owning the perfect car starts here.",
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
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
