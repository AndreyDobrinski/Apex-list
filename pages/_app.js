import '../assets/styles/styles.css'

import Layout from '../cmps/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
