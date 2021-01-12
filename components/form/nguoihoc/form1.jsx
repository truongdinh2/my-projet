import {
    Button,
    Cascader,
    Col, Form,
    Input,
    InputNumber,
    Radio,
    Row, Select, Tooltip, Upload
} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useState } from 'react';
import styles from '../_form.module.css';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
const relation = ['bố', 'mẹ', 'anh ruột', 'chị ruột', 'bạn bè', 'ông bà'];
const nameClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '>12']
const trinh_do = ['0-3 || kém', '3-5 || yếu', '5-6.5 || trung bình', '6.5-8 || khá', '8-10 || giỏi',];
const so_buoi = []
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
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="84">+84</Option>
        </Select>
    </Form.Item>
);
const Relation = () => {
    return (
        <div>

            <Form.Item
                hasFeedback
                label="Họ và tên" name="relation_name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item
                name="relation_with_you"
                label="Mqh với người học "
                hasFeedback
                rules={[{ required: true }]}
            // style={{width: '50%', marginLeft:'50px'}}
            // labelAlign=""

            >
                <Select
                // style={{ paddingLeft:'50px'}}
                >
                    {relation.map((data, index) => {
                        return (
                            <Option key={index} value={data} >
                                {data}
                            </Option>)
                    })}
                    <Option value="khac" onChange={() => alert('hi')}>
                        khác
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item
                hasFeedback
                rules={[{ required: true }, { type: 'number', min: 1, max: 100 }]}
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
        </div>
    )
}
const User = () => {
    return (
        <>
            <Form.Item
                hasFeedback
                label="Họ và tên" name="name"
                rules={[{ required: true }, {
                }]} >
                <Input />
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
                name="lop"
                label="Lớp"
                hasFeedback
                rules={[{ required: true }]}
            >
                <Select>
                    {nameClass.map((data, index) => {
                        return (
                            <Option value={data} key={index}>
                                {data}
                            </Option>
                        )
                    })}
                </Select>
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
            // rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Giới tính gia sư"
                name="gender"
                rules={[{ required: true }]}
            >
                <Radio.Group>
                    <Radio value="nam">Nam</Radio>
                    <Radio value="nu">Nữ</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="Trình độ hiện tại"
                name="trinh_do"
                rules={[{ required: true }]}
            >
                <Select>
                    {trinh_do.map((data, index) => {
                        return (
                            <Option value={data} key={index}>
                                {data}
                            </Option>
                        )
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                label="Thời gian học"
                name="time"
                rules={[{ required: true }]}
            >
                <Select>
                    {/* {trinh_do.map((data,index) => {
                    return (
                        <Option value={data} key={index}>
                            {data}
                        </Option>
                    )
                })} */}
                    <Option value="3"> 3 tháng</Option>
                    <Option value="5"> 5 tháng</Option>
                    <Option value="10"> 10 tháng</Option>
                    <Option value="khac"> khác</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Giá cả(1 buổi)"
                name="money"
                rules={[{ required: true }]}
                title="giá tiền 1 buổi học"
            >
                <Input style={{ width: 150 }} placeholder="120k" />
            </Form.Item>
            <Form.Item
                label="Mong muốn"
                name="mong_muon"
                rules={[{ required: true }]}
            >
                <TextArea
                    rows="4"
                    placeholder="điểm số học viên sau khi học, tiêu chuẩn gia sư, tình trạng học hiện tại, số buổi học trên tuần, thời gian học,..." />
            </Form.Item>
        </>
    )
}

//function

const FormStatic1 = () => {
    const [isRelation, setIsRelation] = useState(false)
    const [form] = Form.useForm();
    const [isImg, setIsImg] = useState(false);
    // const [who, setWho] = useState('người thân');
    const data = ['vietinbank', 'agribank', 'vietcombank']
    const [role, setRole] = useState('nguoi hoc')
    const ButtonRela = () => {
        return (
            <Tooltip title="thêm người thân để liên lạc khi có sự cố">
                <Button htmlType="button" onClick={() => setIsRelation(!isRelation)}>
                    Người thân
            </Button>
            </Tooltip>
        )
    }
    const ButtonUser = () => {
        return (
            <Tooltip title="đăng kí thông tin cho người học">
                <Button htmlType="button"
                    onClick={() => setIsRelation(!isRelation)}
                >
                    Người học
            </Button>
            </Tooltip>
        )
    }
    const onFinish = (params) => {
        // setWho(params.who)
        console.log(params);
    }
    const bank = (
        <Form.Item name="typeBank" noStyle>
            <Select labelInValue="bank" style={{ width: 120 }}>
                {data.map((data1, index) => (
                    <Option value={data1} key={index}>
                        {data1}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    )

    return (
        <div className={styles}>
            <div className={styles.title}>
                Đăng kí
            </div>
            <div>
                <Button onClick={() => setRole('nguoi hoc')}>Người học</Button>
                <Button onClick={() => setRole('nguoi than')}> Người thân</Button>
            </div>
            <Form
                // className={styles.form}
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
                {role === 'nguoi hoc' ? <User /> : <Relation />}
                <Form.Item >
                    <Tooltip title="thêm ảnh để xác minh bạn">
                        <Button htmlType="button" onClick={() => setIsImg(!isImg)}>
                            Post image
                    </Button>
                    </Tooltip>
                </Form.Item>
                {isImg && <div>
                    <Form.Item
                        hasFeedback
                        label="STK ngân hàng" name="stk"
                        rules={[{ required: true }, {
                        }]} >
                        <Input addonBefore={bank} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="img_face"
                        label="Ảnh chân dung"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="4x6"
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
                </div>}
                {/* <ButtonRela /> */}
                {role === 'nguoi hoc' ? <ButtonRela /> : <ButtonUser />}

                {(isRelation && role === 'nguoi hoc') && <Relation />}
                {(isRelation && role === 'nguoi than') && <User />}
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
export default FormStatic1;