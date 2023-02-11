import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css';
import { MantineProvider } from '@mantine/core'
import NavBar from '../src/components/NavBar'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <NavBar
        links={[
          { link: '/homepage', label: 'Join' },
          { link: '/signup', label: 'Create Event' },
          { link: 'ujh', label: 'My Events' },
        ]}
      />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}