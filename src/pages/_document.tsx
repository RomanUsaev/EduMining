// import { Footer } from '@/components/Footer';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
            <link href="/styles/all.css" rel="stylesheet"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;