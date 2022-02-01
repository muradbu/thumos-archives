import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>

                </Head>
                <body className="bg-gray-50 dark:bg-slate-900 px-3">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument