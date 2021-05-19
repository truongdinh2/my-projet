import { Button, Col, Row } from "antd";
import React from 'react';
import { useEffect } from "react";

export default function ModalContact(props) {
    const onSuccess = () => {
        props.onSuccess()
    }
    const onFail = () => {
        props.onFail()
    }
    const { isContact, dataItem } = props
    return (
        <Row justify={isContact ? "space-between" : "center"}>
            <Col>
                <p>Số điện thoại: {dataItem[0].sdt}</p>
                <p>Địa chỉ: {dataItem[0].diachi}</p>
                <img
                    src={`${dataItem[0].img}`}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    style={{ margin: 'auto' }}
                />
            </Col>
            {isContact &&
                <Col>
                    <p>Bạn thỏa thuận thành công hay thất bại?</p>
                    <Row justify="space-around">
                        <Button onClick={onSuccess}>Thành công</Button>
                        <Button onClick={onFail} type="primary" danger>Thất bại</Button>
                    </Row>
                </Col>
            }
        </Row>
    )
}
