import { Col, Row } from 'antd'
import React from 'react'
import Link from 'next/link'
// import styles from './noteInform.module.css'
export default function NoteForm() {
    return (
        <Row 
        // className={styles.container}
        >
            <Col>
                <Link href="danh-sach-lop-hoc"> Danh sách người học</Link>
            </Col>
        </Row>
    )
}
