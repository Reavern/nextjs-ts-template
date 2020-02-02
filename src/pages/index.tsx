import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
// import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { firebaseApp } from '../utils/Firebase';

import Link from 'next/link';

import {
    Button
} from "reactstrap";


const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {

    const [midtransToken, setMidtransToken] = useState('');

    async function createTransaction() {

        const id = firebaseApp.firestore().collection('id').doc().id;

        const parameter = {
            "parameter": {
                "transaction_details": {
                    "order_id": id,
                    "gross_amount": 200000
                }, "credit_card": {
                    "secure": true
                }
            }
        }

        const URL = 'https://nextjs-ts-template.now.sh/api/createTransaction';

        try {
            const res = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify(parameter),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            const json = await res.json();

            if (json.error === 0) {
                console.log(json);
                setMidtransToken(json.data.token);
            } else {
                console.log(json.message);
            }

        } catch (e) {
            console.log(e);
        }


    }

    function snapButtonPressed() {
        (window as any).snap.pay(midtransToken as any, {
            onSuccess: function (result) {
                console.log(result);
            },
            onPending: function (result) {
                console.log(result);
            },
            onError: function (result) {
                console.log(result);
            }
        });
    }

    return (
        <html>
            <Head>
                <title>My page title</title>

            </Head>
            <body>
                <h1>TEST : {userAgent}</h1>
                <Link href="/admin"><a>ADMIN</a></Link><br/>
                <Button onClick={createTransaction}>CREATE MIDTRANS TRANSACTION</Button>
                {midtransToken}
                {
                    midtransToken ?
                        (
                            <Button onClick={snapButtonPressed}>MIDTRANS SNAP</Button>
                        ) : null
                }
                <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-s3ZYCAV1B68etLnU"></script>
            </body>
        </html>
    );
}

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;