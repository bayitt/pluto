import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Work+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ minHeight: "100vh" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
