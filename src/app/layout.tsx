import React from "react";
import { getCategories } from "../api";
import { Footer, Nav, Provider } from "../components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

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
          <Nav categories={categories} />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
