import React from 'react'
import {
    Form,
    Input,
    Select
} from 'antd'
const { Option } = Select;
const User = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 60 }}>
                <Option value="84">+84</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div style={{ marginTop: '10px' }}>
            <Form.Item
                hasFeedback
                label="Họ và tên" name="name"
                rules={[{ required: true }, {
                }]} >
                <Input />
            </Form.Item>

            <Form.Item
                name="lop-year"
                label="Lớp - năm sinh"
                hasFeedback
                rules={[{ required: true }]}
            >
                <Input placeholder="12 - 2004" />
            </Form.Item>
            <Form.Item
                hasFeedback
                label="Môn học" name="subject"
                rules={[{ required: true }, {
                }]} >
                <Input placeholder="toán" />
            </Form.Item>
            <Form.Item
                hasFeedback
                label="Chỗ ở hiện tại" name="address" rules={[{ required: true }]}>
                <Input placeholder="tỉnh-huyện(quận)-xã(phường)-thôn" />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                hasFeedback
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name="password"
                hasFeedback
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

        </div>
    )
}
export default User;