import NavigationBar from '@/components/NavigationBar'
import '@/styles/globals.css'
// import '@/styles/featuredproducts.css'


export default function App({ Component, pageProps }) {
  return (
    <main >
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
      /> */}

      <NavigationBar />
      <Component {...pageProps} />
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> */}

    </main>
  )
}
