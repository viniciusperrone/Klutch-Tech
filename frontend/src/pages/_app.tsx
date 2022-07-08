import React from 'react';
import { AppProps } from '../../node_modules/next/app';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
