import 'tailwindcss/tailwind.css'

interface AppProps {
  Component: any
  pageProps: any
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default App
