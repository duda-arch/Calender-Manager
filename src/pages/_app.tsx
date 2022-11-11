import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'


import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import '@fullcalendar/react/dist/vdom';
import { useEffect} from "react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])
  return <Component {...pageProps} />
}
