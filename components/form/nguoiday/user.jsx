import {
    Form,
    Input,
    Select
} from 'antd';
const { Option } = Select;
import React from 'react';
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