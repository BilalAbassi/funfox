import { Short_Stack } from "next/font/google";
import "./globals.css";

const short_stack = Short_Stack({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "FunFox",
  description: "a great learning app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={short_stack.className}>
        <div className="overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
