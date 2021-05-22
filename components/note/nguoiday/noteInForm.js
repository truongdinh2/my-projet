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
                        Hãy điền đầy đủ và chính xác nhé!
                    </span>
                </Col>
            </Row>
        </Row>
    )
}
