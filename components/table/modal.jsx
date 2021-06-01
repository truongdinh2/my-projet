import { Button, Col, Row } from "antd";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ModalContact(props) {
    const {isFee} = props;
    const onSuccess = () => {
        props.onSuccess()
    }
    const onFail = () => {
        props.onFail()
    }
    const { isContact, dataItem } = props;
    const FeeDone = () => {
        props.FeeDone()
        console.log(isFee);
    }
    const Fee = () =>
        <Col>
            <h3 style={{ textAlign: 'left' }}>Chúng tôi cần phí của bạn để duy trì hoạt động và phát triển.</h3>
            <h3 style={{ textAlign: 'left' }}>*Đặc biệt: Hoàn tiền sau 10 ngày với lý do hợp phù hợp.</h3>
            <div>
                <p>
                    Chúng tôi hiện tại có 2 thể thức tùy theo bạn lựa chọn:
                </p>
                <span style={{ fontSize: '13px', marginLeft: '10px' }}
                ><span >(1) Theo buổi <Link href="/tien-phi">10%/buổi </Link></span> 10%/buổi (~ 10k với 100k/buổi).
                 Nên lựa chọn khi bạn dạy {`số buổi < 10.`}</span>
                <br />
                <span style={{ fontSize: '13px', marginLeft: '10px' }}>
                    (2)Các gói thanh toán:
                    <ul style={{}}>
                        <li><span ><Link href="/tien-phi"> 7%/buổi  </Link></span> thời hạn 5 tháng.</li>
                        <li><span ><Link href="/tien-phi"> 6%/buổi  </Link></span> thời hạn 10 tháng.</li>
                        <li><span ><Link href="/tien-phi"> 4%/buổi </Link></span> thời hạn dưới 3 năm sử dụng.</li>
                    </ul>
                </span>
                <span onClick={FeeDone} style={{cursor:'pointer'}}> <a>ấn đây coi như đã chọn(test)</a></span>
            </div>
        </Col>
    return (
        <Row justify={isContact ? "space-between" : "center"}>
            {isFee ?
                <> <Col>
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
                </>
                : <Fee />
            }
        </Row>
    )
}
