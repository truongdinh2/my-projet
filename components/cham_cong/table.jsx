import React from 'react'
import { Button, Input, Checkbox, Space, Table, Tag, Tooltip, Row, Col, notification } from "antd";
export default function TableChamCong() {
    const columns = [
        {
            title: 'Tên người học',
            dataIndex: 'name',
            align: 'center'
        },
        {
            title: 'Ngày',
            dataIndex: 'day',
            align: 'center'
        },
        {
            title: 'Giờ',
            dataIndex: 'time',
            align: 'center'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (text) =>
                <Checkbox disabled defaultChecked={text}></Checkbox>,
            align: 'center'
        }
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            day: '22-05-2021',
            time: '8h - 10h',
            status: true,
        },
        {
            key: '2',
            name: 'John Brown',
            day: '22-05-2021',
            time: '8h - 10h',
            status: true,
        },
        {
            key: '3',
            name: 'John Brown',
            day: '22-05-2021',
            time: '8h - 10h',
            status: true,
        },
        {
            key: '4',
            name: 'John Brown',
            day: '22-05-2021',
            time: '8h - 10h',
            status: true,
        },
    ];
    return (
        <Row>
            <Col span={24}>
                <h3>
                    Bảng Chấm Công
                </h3>
            </Col>
            <Col span={24}>
                <Row justify="end"
                >
                    <Col span={8}>
                        <span style={{ color: 'red', fontSize: '13px' }}>* Chú thích</span>
                        <span style={{ fontStyle: "italic", fontSize: '12px' }}
                        > Người học cần phải vào xác nhận để đảm bảo kiểm duyệt.</span>
                        <br />
                        <span style={{ fontStyle: "italic", fontSize: '12px', marginLeft: '65px' }}>
                            Nếu có thắc mắc liên hệ ngay với chúng tôi.
                        </span>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Table
                    style={{ padding: ' 1% 5%' }}
                    columns={columns} dataSource={data}
                    pagination={false}
                    size="small"
                    bordered
                />
            </Col>
        </Row>
    )
}
