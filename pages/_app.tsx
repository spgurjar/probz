import "../src/styles/global.css";
import {DropdownProvider} from "./pages/step2/step2Comps/demographs/dgTemp/dgContext"
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
  <DropdownProvider>
    <Component {...pageProps} />
  </DropdownProvider>
  )
}

export default MyApp;