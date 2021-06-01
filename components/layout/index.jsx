import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import Footer from './footer'
import Header from './header/header'
import { useRouter } from 'next/router'
import { Row, Col } from 'antd'

export default function Layout({ children, title = "tclearning" }) {
    const router = useRouter();
    const [classMain, setClassMain] = useState('main')
    const handleNav = (param) => {
        console.log(param);
    }
    useEffect(() => {
        if (router.asPath === "/") {
            setClassMain('main_home_page')
        }
    }, [])
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="hitder">
                <Header configNav={handleNav} />
            </div>
            <div className={`${classMain}`}>
                {children}
            </div>
            <div style={{ padding: "2% 0",position:'relative',zIndex:10,background:'#fcfcfc' }}>
                <h5>Cảm ơn bạn đã tin tưởng !</h5>
                <Row justify="center" >
                    <Col>Chúc bạn gặp nhiều thành công!!</Col>
                </Row>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
