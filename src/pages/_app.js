import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { motion } from 'framer-motion'
import Cursor from 'components/Cursor'
import Background from 'components/Background'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  
  return (
    <motion.div>
      <Head>
        <title>Milind Dhamu</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Cursor/>
      <Background />
      <Component {...pageProps} />
    </motion.div>
  )
  
}
