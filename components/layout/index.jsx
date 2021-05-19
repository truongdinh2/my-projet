import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './header/header'


export default function Layout({ children, title = "tclearning" }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                    <link rel="icon" href="/logo.png" />
            </Head>
            <div className="hitder">
                <Header />
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
