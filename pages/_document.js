import { Html, Head, Main, NextScript } from 'next/document'

const OpenGraphImg = "https://storageapi.fleek.one/plasticdigits-team-bucket/czodiac-site-v3/opengraph.png"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Delivering quality products to blockchain customers globally" />
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:locale" content="en_EN" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="CZODIAC | Blockchain Products Delivered Globally" />
        <meta property="og:site_name" content="CZodiac" />
        <meta property="og:url" content="https://czodiac.com" />
        <meta property="og:description" content="Delivering quality products to blockchain customers globally" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OpenGraphImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://czodiac.com" />
        <meta name="twitter:title" content="CZODIAC | Blockchain Products Delivered Globally" />
        <meta name="twitter:image" content={OpenGraphImg} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:description" content="Delivering quality products to blockchain customers globally" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
