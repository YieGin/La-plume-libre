import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import ReactQueryProvider from "@/query/reactQuerySetup";
import { Toaster } from "sonner";
import { createMetadata } from "@/lib/createMetadata";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
  title: {
    absolute: "La Plume Libre",
    template: "La Plume Libre | %s",
  },
  description: "This is my professional La Plume Libre site.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div>
              {children}
              <Toaster visibleToasts={1} position="bottom-right" richColors />
            </div>
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
