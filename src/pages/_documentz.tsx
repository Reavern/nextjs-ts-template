import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppInitialProps } from 'next/app'

export default function MyDocument() {

    // const getInitialProps = async (ctx) => {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    // async function getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
