import { Col, Divider, Row, Space, Typography } from "antd";
import React from 'react';
import styles from './footer.module.css';
const { Text, Link } = Typography;
export default function Footer() {
    return (
        <Row className={styles.container}>
            <Col>
                <Row justify="space-around" className={`${styles.row1}`}>
                    <Col offset={4} span={8}>
                        <h6>About</h6>
                        <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </Col>
                    <Col span={6}>
                        <h6>Categories</h6>
                        <ul className={styles.footer_links}>
                            <li>tit1</li>
                            <li>tit1</li>
                            <li>tit1</li>
                            <li>tit1</li>
                            <li>tit1</li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <h6>Contact</h6>
                        <ul className={styles.footer_links}>
                            <li>tit1</li>
                            <li>tit1</li>
                            <li>tit1</li>
                            <li>tit1</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Divider style={{ borderTop: '1px solid #bbb' }} />
            </Col>
            <Col span={24}>
                <Row className={`${styles.row2}`}>
                    <Col offset={4} span={8}>
                        <p>Copyright &copy; 2020 All Rights Reserved by dinh</p>
                    </Col>
                    <Col offset={2} span={10}>
                        <h6>Xin trân thành cảm ơn bạn!</h6>
                        <p>Nhóm Facebook</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
