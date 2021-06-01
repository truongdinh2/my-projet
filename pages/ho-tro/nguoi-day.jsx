import React from 'react'
import Layout from '../../components/layout'
import { Row, Col } from 'antd'
import Link from 'next/link'
export default function PageSupport() {
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <h2>Tiện ích hỗ trợ</h2>
        </Col>
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
      <Row style={{ marginTop: '45px' }}>
        <Col span={24}>
          <h3 style={{ fontSize: '18px' }}>Dưới đây là một vài lưu ý trước khi bạn rời khỏi trang.</h3>
        </Col>
        <Col span={24}>
          <ol style={{ width: '50%', margin: '25px auto 0 auto', fontSize: "15px", fontWeight: 500 }}>
            <li> Bạn cần phải đảm bảo thực thi đúng giao kèo giữa 2 bên! </li>
            <li> Để tránh những rủi ro những không đáng có như tiền lương, vấn đề pháp lý ,... bạn nên tiếp tục thông qua chúng tôi. Sau vài tháng bạn có thể dạy không qua chúng tôi.</li>
            <li> Theo thống kê 20 % trường hợp không mong muốn đã xảy ra giữa 2 bên trong những tháng đầu.</li>
            <li> Quan trọng hơn nữa hãy tận dụng tối đa những hỗ trợ của chúng tôi.</li>
            <li> Chúng tôi luôn lắng nghe bạn phản hồi!</li>
          </ol>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop:'20px'}}>
        <Col span={12} >
          <h3>
            <Link href="/nguoi-day/danh-sach-lop-hoc">
              Bảng tìm lớp
            </Link>
          </h3>
        </Col>
      </Row>
    </Layout>
  )
}


