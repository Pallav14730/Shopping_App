import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Login from './Login'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return(
  

   <SessionProvider session={session} refetchInterval={5*60}>
    {/* <Login /> */}
      <Component {...pageProps} />
      </SessionProvider>
    



  ) 
}

export default MyApp
