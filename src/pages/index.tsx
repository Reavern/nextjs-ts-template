import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import ResponsiveDrawer from '../components/ResponsiveDrawer';

import Link from 'next/link';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <html>
        <Head>
            <title>My page title</title>
        
        </Head>
        <body>
            <h1>TEST : {userAgent}</h1>
            <Link href="/admin">ADMIN</Link>
        </body>
    </html>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;