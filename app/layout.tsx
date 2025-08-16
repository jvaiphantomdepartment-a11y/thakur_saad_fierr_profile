import { Nav } from "@/components/sections";
import { ThemeProvider } from "@/components/theme-provider";
import { fontVariants } from "@/lib/fonts";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thakur Saad",
  description: "A Full Stack Developer with AI Integration Expertise",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={fontVariants}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="azure-depths-light dark:azure-depths-dark">
            <Nav className="sticky top-0 bg-transparent" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
