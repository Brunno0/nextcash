import { GlobalState } from '../context/GlobalState';
import '../styles/globals.css';



export default function App({ Component, pageProps }) {
  return <GlobalState>
   <Component {...pageProps} />
    </GlobalState>
}
