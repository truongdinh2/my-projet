import React from 'react'
import {
  Button,
  Col,
  Form,
  Input, Row, Typography
} from 'antd';
import Layout from '../../components/layout'
import Link from 'next/link';
export default function Page() {
  const msg = "Chúng tôi nhận ra thông tin của bạn đủ để tìm người dạy."
  return (
    <Layout>
      <Row justify="center">
        <Col span={24}>
          <h3>
            Chúng tôi xin cám ơn bạn Trường đã đăng ký!
          </h3>
        </Col>
        <Col offset={3} span={12} style={{ marginTop: '35px' }}>
          <p style={{ fontSize: "15px", fontWeight: 500 }}>Bạn có bất kỳ thắc mắc gì ? Liên hệ với đội ngũ mình nhé!
            Ở đây có rất nhiều giải pháp để hỗ trợ bạn. Như là:
            <ul>
              <li>
                Thuận tiện theo dõi quá trình học tập để tổng hợp lại và phản hồi của người dạy.
              </li>
              <li>
                Danh tính người dạy sẽ được xác minh rõ ràng.
              </li>
              <li>
                Tích hợp sẵn ứng dụng chấm công. 
              </li>
              <li>
                 Hướng dẫn thêm kỹ năng khi học online, offline tùy ý.
              </li>
              <li>
                Hỗ trợ thanh toán online.
              </li>
            </ul>
          </p>
          <p>
            <Link href="/nguoi-hoc/dang-ky">
              {msg}
            </Link>
          </p>
          <p>
            Cảm ơn bạn đã trao sự tin tưởng cho chúng tôi!
          </p>
        </Col>
        <Col span={8} ></Col>
      </Row>
      <Row justify="space-around" style={{ paddingTop: '4%', }}>
        <Col push={1} offset={1} span={6}>
        <div>
            <img src="https://chamcong.timviec365.vn/images/box4_img.png"
             alt="anh cham cong"
             width="350"
             height="250"
             />
          </div>
          <h4 style={{}}>Hỗ trợ <Link href="/ho-tro/cham-cong">chấm công </Link>trực tuyến, sau mỗi buổi
            học. <a target="blank" href="https://chamcong.timviec365.vn/">https://chamcong.timviec365.vn/</a>
          </h4>
        </Col>
        <Col span={6}>
          <div>
            <img src="https://chamcong.timviec365.vn/images/box4_img.png"
             alt="anh cham cong"
             width="350"
             height="250"
             />
          </div>
          <h4 style={{}}>Khóa học kỹ năng sư phạm free, hướng dẫn phân luồng kiến thức, hỏi đáp trong quá trình dạy
            <a target="blank" href="https://www.youtube.com/watch?v=lCaCBzhM0tw&ab_channel=Ti%E1%BA%BFnS%E1%BB%B9Quay">
              {` https://www.youtube.com/watch?v=`}</a>
          </h4>
        </Col>
        <Col pull={1} span={7}>
        <div>
            <img src="https://chamcong.timviec365.vn/images/box4_img.png"
             alt="anh cham cong"
             width="350"
             height="250"
             />
          </div>
          <h4 style={{}}>
            Có 2 phương án thanh toán là trực tiếp 
            và <Link href="/ho-tro/thanh-toan-online">
               trực tuyến. 
            </Link> Ở trực tuyến sẽ hỗ trợ bạn thương thảo với người dạy có thể trả theo từng buổi.
          </h4>
        </Col>
      </Row>
    </Layout>
  )
}
