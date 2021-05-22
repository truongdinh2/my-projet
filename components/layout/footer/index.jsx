import { Col, Divider, Row } from "antd";
import React from 'react';
import styles from './footer.module.css';
export default function Footer() {
    return (
        <Row className={styles.container}>
            <Col span={24}>
                <Row justify="space-around" className={`${styles.row1}`}>
                    <Col offset={2} span={10}>
                        <h6>About</h6>
                        <p style={{textAlign:'center'}}>
                            Con gấu kiếm ăn đủ, thì nó mới có thể ngủ đông<br/>
                            Đại bàng tập đập cánh, <i> TRƯỚC CẢ KHI NÓ ĐÃ ĐỦ LÔNG </i><br/>
                            Chịu nhiều vết thương nhất, mới đủ sức làm con sói đầu đàn<br/>
                            Con người trong nghịch cảnh, càng không được phép chịu đầu hàng<br/>
                            Trong đầu là vàng, lửa trong tim, dưới chân sỏi đá<br/>
                            Không có hoa hồng, nếu không làm, mà chỉ giỏi phá<br/>
                            Có lẽ việc ta làm, chỉ là thứ gì đó đang hợp thời<br/>
                        </p>
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
