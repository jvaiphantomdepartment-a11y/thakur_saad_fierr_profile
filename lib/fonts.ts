import { Inter, Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fontList = [lexend, inter];

export const fontVariants = fontList.map((font) => font.variable).join(" ");
