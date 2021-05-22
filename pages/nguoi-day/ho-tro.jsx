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
      <Row justify="space-around" style={{ paddingTop: '7%', }}>
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
