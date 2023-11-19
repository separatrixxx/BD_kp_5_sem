import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BD kp</title>
        <meta name='description' content='BD kp' />
        <meta property='og:title' content='BD kp' />
        <meta property='og:description' content='BD kp' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" type='image/ico' />
      </Head>
      <Component {...pageProps} />
    </>

  );
}
