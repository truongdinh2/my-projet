import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Col, Form,
    Input,
    InputNumber,
    Radio,
    Row, Select, Tooltip, Upload
} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import TextArea from 'antd/lib/input/TextArea';
import React, { useContext, useState } from 'react';
import styles from '../_form.module.css';
import NoteForm from '../../note/nguoiday/noteInForm';
import User from './user';
import { Authentic } from '../../useContext';


const relation = ['bố', 'mẹ', 'anh ruột', 'chị ruột', 'bạn bè', 'ông bà'];
const trinh_do = ['0-3 || kém', '3-5 || yếu', '5-6.5 || trung bình', '6.5-8 || khá', '8-10 || giỏi',];

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
};
const { Option } = Select;
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
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
    </div>
//function

const FormLearner = () => {
    const [isRelation, setIsRelation] = useState(false)
    const [form] = Form.useForm();
    const [isImg, setIsImg] = useState(false);
    // const [who, setWho] = useState('người thân');
    const data = ['vietinbank', 'agribank', 'vietcombank']
    const [role, setRole] = useState('nguoi hoc');
    const [isFormDemand, setIsFormDemand] = useState(false)
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
                    Người học
                </Button>
            </Tooltip>
        )
    }
    const {auth,setAuth} = useContext(Authentic)
    const onFinish = (params) => {
        // setWho(params.who)
        setAuth('nguoihoc')
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
                                            Thông tin môn học
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
                                    label="Chứng minh thư"
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
                            {(isRelation && role === 'nguoi than' && auth==="nguoihoc") && <User />}
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
                    <NoteForm/>
                </Row>
            </Row>
        </div>
    );
};
export default FormLearner;