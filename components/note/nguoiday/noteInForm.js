import { Col, Row } from 'antd'
import React from 'react'
import Link from 'next/link'
import styles from './note.module.css'
export default function NoteForm() {
    return (
        <Row
            className={styles.container}
        >
            <Row>
                <Col >
                    <span style={{ color: 'red', fontSize: '15px' }}>* Chú thích</span>
                    <br />
                    <span style={{ fontStyle: "italic", fontSize: '14px',marginLeft: '65px' }}
                    > Những thông tin bên dưới có thể bổ sung sau (thông tin bản thân ,...).</span>
                    <br />
                    <span style={{ fontStyle: "italic", fontSize: '14px', marginLeft: '65px' }}>
                        Thông tin rất cần thiết để người dạy có thể hiểu bạn hơn!
                    <br />
                    </span>
                    <span style={{ fontStyle: "italic", fontSize: '14px', marginLeft: '65px' }}>
                        Đăng ký người thân trong trường hợp người học chưa đủ 18 tuổi.
                    <br />
                    </span>
                    <span style={{ fontStyle: "italic", fontSize: '14px', marginLeft: '65px' }}>
                        
                    <br />
                    </span>
                    <span style={{ fontStyle: "italic", fontSize: '14px', marginLeft: '65px' }}>
                        Hãy điền đầy đủ và chính xác nhé!
                    <br />
                    </span>
                </Col>
            </Row>
        </Row>
    )
}
