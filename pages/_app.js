import '../styles/globals.css'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60} >
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
