import type { Metadata } from "next";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/themeProvider"
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Fiber frontend App",
  description: "UI by shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="lg:p-8">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[500px] lg:w-[650px] xl:w-[800px]">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
