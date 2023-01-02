import React from 'react'
import Head from 'next/head'
import BaseThemeProvider from '../providers/BaseThemeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CZODIAC | Blockchain Products Delivered Globally</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BaseThemeProvider>
        <Component {...pageProps} />
      </BaseThemeProvider>
    </>
  )
}

export default MyApp
