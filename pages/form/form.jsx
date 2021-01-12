import {
    Button,
    Cascader,
    Col, Form,
    Input,
    InputNumber,
    Row, Select, Tooltip, Upload
} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useState } from 'react';
import styles from './_form.module.css';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
    // pattern: {
    //     mismatch: "'${name}' does not match pattern ${pattern}",
    //   },
};
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

//function

const FormStatic = () => {
    const [isRelation, setIsRelation] = useState(false)
    const [form] = Form.useForm();
    const [isImg, setIsImg] = useState(false);
    const onFinish = (params) => {
        console.log(params);
    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+84</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className={styles}>
            <div className={styles.title}>
                Đăng kí
            </div>
            <Form
                className={styles.form}
                validateMessages={validateMessages}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    hasFeedback
                    label="Họ và tên" name="name" 
                    rules={[{ required: true },{
                        // pattern:'^[a-zA-Z_-]{9,30}$'
                        // ,message:"Nhập chữ lating"
                        }]} >
                    <Input />
                </Form.Item>
                {/* <Form.Item label="Tài khoản" name="account" rules={[{ required: true }]}>
                    <Input />
                </Form.Item> */}
                <Form.Item
                    hasFeedback
                    name="email"
                    label="Tài khoản"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="email" />
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
                <Form.Item >
                    <Tooltip title="thêm ảnh để xác minh bạn">
                        <Button htmlType="button" onClick={() => setIsImg(!isImg)}>
                            Post image
                    </Button>
                    </Tooltip>
                </Form.Item>
                {isImg && <div>
                    <Form.Item
                        name="img_face"
                        label="Ảnh chân dung"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="4x6"
                        rules={[{ required: true }]}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="cmt"
                        label="Chứng minh thư"
                        rules={[{ required: true }]}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    // extra="longgggggggggggggggggggggggggggggggggg"
                    >
                        <Upload name="logo1" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="them"
                        label="Thêm xác minh"
                        rules={[{ required: true }]}
                        getValueFromEvent={normFile}
                        valuePropName="fileList"
                    >
                        <Upload name="logo2" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </div>}

                {/* <Form.Item label="Môn học" name="object" rules={[{required:true}]}>
                    <Cascader
                        options={[
                            {
                                value: 'school',
                                label: 'trường học',
                                children: [
                                    {
                                        value: 'trunghoc',
                                        label: 'trung học',
                                        children: [
                                            {
                                                value: 'math',
                                                label: 'toán',
                                            }
                                        ]
                                    },
                                    {
                                        value: 'daihoc',
                                        label: 'đại học',
                                        children: [
                                            {
                                                value: 'math1',
                                                label: 'toán cao cấp',
                                            }
                                        ]
                                    },
                                ],
                            },
                            {
                                value: 'schoolLife',
                                label: 'trường đời',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item> */}
                {/* <Form.Item label="DatePicker">
                    <DatePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                    <InputNumber />
                    </Form.Item>
                    <Form.Item label="Switch">
                    <Switch />
                </Form.Item> */}


                <Form.Item >
                    <Tooltip title="thêm người thân để liên lạc khi có sự cố">
                        <Button htmlType="button" onClick={() => setIsRelation(!isRelation)}>
                            Người thân
                    </Button>
                    </Tooltip>
                </Form.Item>
                {isRelation && <div>

                    <Form.Item
                        hasFeedback
                        label="Họ và tên" name="relation_name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        label="Mối quan hệ với bạn" name="relation_with_you" >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        rules={[{ required: true },{type: 'number',min: 1, max: 100}]} 
                        label="Tuổi" name="age" >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="phone_rela"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />

                    </Form.Item>
                </div>}
                <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                                name="captcha"
                                noStyle
                                rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Button>Get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="#">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item label="Submit">
                    <Button htmlType="submit" >Đăng kí</Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default FormStatic;