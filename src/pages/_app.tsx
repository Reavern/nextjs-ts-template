import '../assets/fonts/open_sans.css'
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/argon-dashboard-react.css";

import 'aos/dist/aos.css';

import { AnimatePresence, motion } from 'framer-motion';
// AOS.init();
export default function MyApp({ Component, pageProps }) {

  return (
    // <AnimatePresence exitBeforeEnter={true}>
      <Component {...pageProps} />
    // </AnimatePresence>
  )
}