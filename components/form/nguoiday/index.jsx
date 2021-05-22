import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Col, Form,
    Input,
    InputNumber, Row, Select, Tooltip, Upload
} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import TextArea from 'antd/lib/input/TextArea';
import router from 'next/router';
import React, { useContext, useState } from 'react';
import NoteForm from '../../note/nguoiday/noteInForm';
import { Authentic } from '../../useContext';
import styles from '../_form.module.css';
import User from './user';

const relation = ['bố', 'mẹ', 'anh ruột', 'chị ruột', 'bạn bè', 'ông bà'];
const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};
const validateMessages = {
    required: 'Hãy nhập ô ${label}!',
    types: {
        email: '${label} không hợp lệ!',
        number: '${label} không hợp lệ!!',
    },
    number: {
        range: '${label}phải lớn hơn ${min} và nhỏ hơn ${max}',
    },
};
const { Option } = Select;
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 60 }}>
            <Option value="84">+84</Option>
        </Select>
    </Form.Item>
);
const Relation = () => {
    return (
        <div style={{ marginTop: '10px' }}>

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
            >
                <Select
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

const FormDemand = () =>
    <div style={{ marginTop: '10px' }}>
        <Form.Item
            name="birth"
            label="Năm sinh"
            hasFeedback
            rules={[{ required: true }]}
        >
            <Input placeholder="2004 - lớp 12" />
        </Form.Item>
        <Form.Item
            hasFeedback
            label="Các môn học" name="subjects"
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
            label="Nghề nghiệp"
            name="job"
            rules={[{ required: true }]}
        >
            <Input placeholder="sinh viên ..." />
            {/* <Radio.Group>
                <Radio value="nam">Nam</Radio>
                <Radio value="nu">Nữ</Radio>
            </Radio.Group> */}
        </Form.Item>
        {/* <Form.Item
            label="Thời gian học"
            name="time"
            rules={[{ required: true }]}
        >
            <Select>
                <Option value="3"> 3 tháng</Option>
                <Option value="5"> 5 tháng</Option>
                <Option value="10"> 10 tháng</Option>
                <Option value="khac"> khác</Option>
            </Select>
        </Form.Item> */}
        <Form.Item
            label="Khu vực dạy"
            name="money"
            rules={[{ required: true }]}
            title="giá tiền 1 buổi học"
        >
            <Input style={{ width: 150 }} placeholder="Cầu Giấy bán kính 2 cây" />
        </Form.Item>
        <Form.Item
            label="Thành tích (nếu có)"
            name="achievements"
            rules={[{ required: true }]}
        >
            <TextArea
                rows="4"
                placeholder="điểm số: toán-9-HK1 10 điểm, đi thi olympia 2021, ilets: 8.0, thời gian học: tối t2,t3,t4,..." />
        </Form.Item>
    </div>
//function

const FormTeacher = () => {
    const [isRelation, setIsRelation] = useState(false)
    const [form] = Form.useForm();
    const [isImg, setIsImg] = useState(false);
    // const [who, setWho] = useState('người thân');
    const data = ['vietinbank', 'agribank', 'vietcombank']
    const [role, setRole] = useState('nguoi hoc');
    const [isFormDemand, setIsFormDemand] = useState(false);
    const { auth } = useContext(Authentic)
    const ButtonRela = () => {
        return (
            <Tooltip title="thêm người thân để liên lạc khi có sự cố">
                <Button danger htmlType="button" onClick={() => setIsRelation(!isRelation)}>
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
                    Người dạy
                </Button>
            </Tooltip>
        )
    }
    const onFinish = (params) => {
        // setWho(params.who)
        console.log(params);
        router.push('/nguoi-day/dang-nhap')
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
        <div className={styles.page}>
            <h2 className={styles.title}>
                Đăng ký
            </h2>
            <Row>
                <Row style={{ width: '60%' }} justify="center">
                    <Col span={20}>
                        <Row justify="center" gutter={[14, 14]} className={styles.btn_ng_hoc_ng_than}>
                            <Col offset={5}>
                                <Button style={{ marginRight: '5px' }} onClick={() => setRole('nguoi hoc')}>Người học</Button>
                            </Col>
                        </Row>
                        <Form
                            // className={styles.form}
                            validateMessages={validateMessages}
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="horizontal"
                            onFinish={onFinish}
                            form={form}
                            colon={false}
                        >
                            {role === 'nguoi hoc' ? <User /> : <Relation />}
                            <Row justify="center">
                                <Col offset={5}>
                                    <Tooltip title="Bổ sung thông tin cần thiết để biết bạn muốn gì?">
                                        <Button htmlType="button" onClick={() => setIsFormDemand(!isFormDemand)}>
                                            Thông tin bản thân
                                        </Button>
                                    </Tooltip>
                                </Col>
                            </Row>
                            {isFormDemand && <FormDemand />}
                            <Row justify="center" className={styles.ng_hoc_ng_than}>
                                <Col offset={5}>
                                    <Tooltip title="thêm ảnh để xác minh bạn">
                                        <Button htmlType="button" onClick={() => setIsImg(!isImg)}>
                                            Đăng ảnh
                                        </Button>
                                    </Tooltip>
                                </Col>
                            </Row>
                            {isImg && <div style={{ marginTop: '10px' }}>
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
                                    label="Giấy tờ khác"
                                    rules={[{ required: true }]}
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                >
                                    <Upload name="logo1" action="/upload.do" listType="picture">
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item>
                            </div>}
                            <Row justify="center" className={styles.ng_hoc_ng_than}>
                                <Col offset={5}>
                                    {role === 'nguoi hoc' ? <ButtonRela /> : <ButtonUser />}
                                </Col>
                            </Row>

                            {(isRelation && role === 'nguoi hoc') && <Relation />}
                            {(isRelation && role === 'nguoi than' && auth === 'nguoiday') && <User />}
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                label="Điều khoản"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                        required: true
                                    },
                                ]}
                            >
                                <Checkbox>
                                    I have read the <a href="#">agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <Row justify="center" >
                                <Col offset={5}>
                                    <Button type="primary" htmlType="submit" >Đăng kí</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <NoteForm />
                </Row>
            </Row>
        </div>
    );
};
export default FormTeacher;