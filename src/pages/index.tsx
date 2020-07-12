import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {

    return (
        <>
            <Head>
                <title>My page title</title>

            </Head>
            <>
                <h1>{userAgent}</h1>
                <Link href="/admin"><a>ADMIN</a></Link><br />
            </>
        </>
    );
}

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;