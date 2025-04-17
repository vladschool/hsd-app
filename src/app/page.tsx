'use client';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { makeStore } from '../store';
import  RootLayout from "./layout"
import 'bootstrap/dist/css/bootstrap.min.css';

const store = makeStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </RootLayout>
  );
}