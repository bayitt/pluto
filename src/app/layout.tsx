import { Work_Sans } from "next/font/google";
import React from "react";
import { Footer, Provider } from "../components";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
