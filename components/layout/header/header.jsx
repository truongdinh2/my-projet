import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <div>
            <div className={styles.flexbox_bar}>
                <div className={`${styles.flexitem_bar} ${styles.bar_item0}`}><span>icon</span>sign up
                <span ><span>icon</span>Login</span></div>
                <div className={`${styles.flexitem_bar}  ${styles.bar_item1}`}>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className={`${styles.flexitem_bar} ${styles.bar_item3}`}>link1</div>
                <div className={`${styles.flexitem_bar} ${styles.bar_item4}`}>link2</div>
                <div className={`${styles.flexitem_bar} ${styles.bar_item5}`}>link3</div>
                <div className={`${styles.flexitem_bar} ${styles.bar_item6}`}>link4</div>
            </div>
        </div>
    )
}
