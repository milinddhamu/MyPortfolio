import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { motion } from 'framer-motion'
import Cursor from 'components/Cursor'
import Background from 'components/Background'


export default function App({ Component, pageProps }) {
  
  return (
    <motion.div>
     
      <Cursor/>
      <Background />
      <Component {...pageProps} />
    </motion.div>
  )
  
}
