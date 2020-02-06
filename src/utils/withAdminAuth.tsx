import React, { useState, useEffect, FunctionComponent } from 'react';
import { NextPage, NextComponentType } from 'next';

import Router from 'next/router';

import { firebaseApp } from '~/src/utils/Firebase';

export function withAdminAuth<T>(Component: FunctionComponent<T>): FunctionComponent {
    return (props: T) => (
        <HOC>
            <Component {...props} />
        </HOC>
    );
}

const HOC: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const sub = firebaseApp.auth().onAuthStateChanged((auth) => {
            // Role Authentication
            if (auth && Router.pathname.includes('admin/dashboard')) {
                firebaseApp.firestore()
                    .collection('admins')
                    .doc(auth.email)
                    .get()
                    .then((snap) => {
                        if (snap.exists) {
                            if (snap.data().admin) {
                                setIsLoading(false);
                            }
                        }
                        firebaseApp.auth().signOut();
                    })
                    .catch((e) => {
                        console.log(e);
                    })
            }
        });
        return () => sub();
    }, []);

    return (
        <>
            {
                isLoading ?
                    (<h1>Loading . . .</h1>) : (children)
            }
        </>
    );
}


export default HOC;