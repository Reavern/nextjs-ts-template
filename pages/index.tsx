import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import ResponsiveDrawer from '../components/ResponsiveDrawer';


const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <html>
        <Head>
            <title>My page title</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
            <ResponsiveDrawer />
            <h1>TEST : {userAgent}</h1>
        </body>
    </html>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;