import React from 'react';
import styles from './footer.module.css'

export default function Footer() {
    return (
        <section className={styles.section}>
            <div className={styles.footer}>
                <div className={styles.ft_left}>
                    <div>
                        <h2>thong tin</h2>
                    </div>
                    <div className={styles}>
                        <div className={styles}>
                            <p> cong ty tnhh tclearn </p>
                            <p>dia chi: 47 ngoc ha ba dinh ha noi</p>
                            <p>ma so doanh nghiep:280801</p>
                        </div>
                        <div className={styles}></div>
                    </div>
                    <h6>thank you and go with our</h6>
                    <p> <a href="#">
                    </a>
                        <a href="#">
                        </a>
                    </p>
                    <p> <a href="#">
                    </a></p>
                    <p>cam on nha tai tro</p>
                    <p><a href="#">link dang ky danh nghiep</a></p>
                </div>
                <div className={styles.ft_right}>
                    <p>dai dien phap ly: nguyen van a</p>
                    <p>chuc vu:giam doc dieu hanh</p>
                </div>
            </div>
            <div className={styles.end}>
                <h5> dieu khoan va chinh sach bao mat</h5>
                <p>
                </p>
            </div>
        </section>
    )
}
