import { Button, Dropdown, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Authentic } from '../../useContext';
import styles from './header.module.css';

const { SubMenu } = Menu
export default function Header(props) {
    const [classHeader, setClassHeader] = useState('not_backgr');
    const router = useRouter();
    const { auth } = useContext(Authentic);
    const hotro = auth === 'nguoihoc' ? '/ho-tro/nguoi-hoc' : '/ho-tro/nguoi-day'
    const handleScroll = () => {
        if (window.scrollY > 90) {
            setClassHeader('_backgr')
        }
        else {
            setClassHeader('not_backgr')
        }
    }
    useEffect(() => {
        if (router.asPath === '/') {
            window.addEventListener('scroll', handleScroll);
        } else {
            setClassHeader('_backgr')
        }
        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, [])
    useEffect(() => {
        props.configNav(classHeader)
    }, [])
    const menu = (
        <Menu triggerSubMenuAction="click" >
            <SubMenu key="sub3" title="Đăng nhập">
                <Menu.Item key="7">
                    <Link href="/nguoi-hoc/dang-nhap">
                        <a href="">
                            Người học
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="8">
                    <Link href="/nguoi-day/dang-nhap">
                        <a href="">
                            Người dạy
                        </a>
                    </Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Đăng ký">
                <Menu.Item key="1">
                    <Link href="/nguoi-hoc/dang-ky">
                        <a href="">
                            Người học
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href="/nguoi-day/dang-ky">
                        <a href="">
                            Người dạy
                        </a>
                    </Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
    return (
        <header className={`${styles[classHeader]} ${styles.site_header}`}>
            <div className={`${styles.wrapper} ${styles.site_header__wrapper}`}>
                <div className={styles.site_header__start}>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            className={styles.img_logo}
                            width="50"
                            height="50"
                        />
                    </Link>
                </div>
                <div className={styles.site_header__middle}>
                    <nav className={styles.nav}>
                        <button type="button" className={styles.nav__toggle}>
                            menu
                        </button>
                        <ul className={styles.nav__wrapper}>
                            <li className={styles.nav__item}>
                                <Link href="/">
                                    <a >Trang chủ</a>
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href={hotro}>
                                <a href="#">Hỗ trợ</a>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>

                            <Link href="/thong-tin">
                                <a href="#">Thông tin</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.site_header__end}>
                <Dropdown overlay={menu}
                    placement="bottomCenter"
                    trigger="click"
                // icon={<UserOutlined />}
                >
                    <Button >Tài khoản</Button>
                </Dropdown>

            </div>
        </div>
        </header >
    )
}
