import React from "react";
import { Footer, Provider } from "../components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
