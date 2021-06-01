import React, { useContext, useMemo } from 'react'
import {
    Button,
    Col,
    Form,
    Input,
    notification,
    Row,
    Spin,
    Typography,
} from 'antd'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Layout from '../../components/layout';
import { Authentic } from '../../components/useContext';
export default function Page() {
    const [form] = Form.useForm();
    const router = useRouter();
    const formItemLayout = useMemo(
        () => ({
            labelCol: { span: 24 },
            wrapperCol: { span: 24 },
        }),
        []
    );
    const { Title, Paragraph } = Typography;
    const onFinish = () => {
        setAuth('nguoiday')
        router.push('/ho-tro/nguoi-day')
    }
    const {setAuth} = useContext(Authentic)
    return (
        <Layout>
            <Row>
                <Form
                    {...formItemLayout}
                    layout="vertical"
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    style={{ maxWidth: 500, margin: 'auto', padding: '2%',minWidth:400 }}
                >
                    <Form.Item
                        name="username"
                        label="Số điện thoại"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại!',
                            },
                            {
                                pattern: /^[0-9]+$/,
                                message: 'Không nhập kí tự đặc biệt',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            block
                            htmlType="submit"
                        // loading={loading}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Row justify="space-between">
                        <Col>
                            <Paragraph>
                                <Link href="/dang-ky">
                                    <a> Đăng ký ngay</a>
                                </Link>
                            </Paragraph>
                        </Col>
                        <Col>
                            <Link href="#">Quên mật khẩu?</Link>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Layout>
    )
}
