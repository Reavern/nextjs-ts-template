import React, { useEffect, useState } from 'react';

import '../assets/fonts/open_sans.css'
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/argon-dashboard-react.css";
import 'aos/dist/aos.css';

import { firebaseApp, getCurrentUser } from '~/src/utils/Firebase';
import Router from 'next/router';

export default function MyApp({ Component, pageProps }) {

<<<<<<< HEAD
  return (
    // <AnimatePresence exitBeforeEnter={true}>
      <Component {...pageProps} />
    // </AnimatePresence>
  )
}

// MyApp.getInitialProps = async ({router}) => {
//   console.log(router)
// }
=======
	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((auth) => {
			if (!auth) {
				const path = Router.pathname;
				if (path.includes('admin/dashboard')) {
					Router.push('/admin');
				}
			}
		});
	}, []);

	return (<Component {...pageProps} />);
}
>>>>>>> 762371d8ba59efb2d40aa0ee600c9a51bb886107
