import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/Layout'
import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal'
import '../styles/globals.css'
import EditModal from '../components/modals/EditModal';

import Head from "next/head";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "X twitter",
  description: "Welcome to X"
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </>
  )
}