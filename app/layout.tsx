import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import {cn} from "@/lib/utils";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Sync",
  description: "Collaborate, create, and edit documents in real-time with ease!" +
      " Our app provides seamless teamwork, cloud storage, and powerful editing" +
      " tools—perfect for individuals and teams looking to boost productivity " +
      "and stay organized",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider
        appearance={{
            baseTheme: dark,
            variables:
                {
                    colorPrimary: "#3371FF",
                    fontSize: "16px"
                }
        }}
      >
            <html lang="en" suppressHydrationWarning>
              <body
                  className={cn(
                      "min-h-screen antialiased",
                  )}
              >
              <Provider>
                  {children}
              </Provider>
              </body>
            </html>
      </ClerkProvider>
  );
}
