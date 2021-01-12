import { Button, Col, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styles from './scroll.module.css'
export default function Scroll() {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [hasModel, setHasmodel] = useState(false)
    function onScroll() {
        const num = window.scrollY;
        if (num > 1400 && num < 1700) {
            setHasmodel(true)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () =>
            window.addEventListener("scroll", onScroll);
    }, []);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        hasModel && <div>
            <Modal title="Bạn là ..."
                visible={isModalVisible ? hasModel : false}
                onCancel={handleCancel}
                footer={null}
            >
                <Row justify="space-around" gutter={[30,30]}>
                    <Col>
                        <Link href="/nguoi-hoc/dang-ky">
                            Người học
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/nguoi-day/dang-ky">
                            Người dạy
                        </Link>
                    </Col>
                </Row>
            </Modal>
            <Row gutter={[40,30]} justify="center">
                <Col>Chúc bạn gặp nhiều thành công!!</Col>
            </Row>
        </div>
    )
        ;
}