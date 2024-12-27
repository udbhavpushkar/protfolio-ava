import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],

});
const geistMono = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Avantika Nayak",
  description: "Avantika Nayak's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {children}
      </body>
    </html>
  );
}
