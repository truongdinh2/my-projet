// import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Layout from '../components/layout'
import ScrollTo from '../components/scrollToFooter'
import { Authentic } from '../components/useContext'
import styles from './_index.module.css';
import { Row, Col, Button } from 'antd'

export default function Home() {
  const { auth } = useContext(Authentic);
  return (
    <div >
      <Layout>
        <div className="backgro_img">
          <div className={styles.title}>
            <h1>TCL</h1>
            <div>TEACHING CONNECT LEANING</div>
          </div>
          <div className={styles.content}>
            <p className={styles.p1}>
              Trang web giúp tìm và tạo lớp bằng hình thức trực tuyến
              <strong> uy tín</strong>, <strong>tinh thần</strong>  phục vụ , chất lượng, và <strong>chi phí</strong>
              <span> tốt nhất.</span></p>
          </div>
          <Row justify="center" style={{ paddingTop: '2%' }}>
            <Col>
              <Button></Button>
              {auth === '' && ''}
              {auth === 'nguoihoc' && <Button>Đăng ký học</Button>}
              {auth === 'nguoiday' && <Button> Đăng ký dạy</Button>}
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: '10%', color: "#FFF200", fontWeight: 600, fontSize: '16px' }}>
            <Col style={{ borderBottom: '1px solid white' }}>
              <p>Chúng tôi sẽ cung cấp cho các phương pháp tốt nhất </p>
            </Col>
          </Row>
          <Row justify="space-around" style={{ paddingTop: '10%', color: "#FFF200" }}>
            <Col push={1} offset={2} span={4}>
              <h4 style={{ color: "#FFF200" }}>Tìm và tạo các lớp online ,offline. Với các môn học đa dạng. </h4>
            </Col>
            <Col span={6}>
              <h4 style={{ color: "#FFF200" }}>Hỗ trợ các phương thức khi học, khi dạy cho những bạn mới.</h4>
            </Col>
            <Col pull={1} span={6}>
              <h4 style={{ color: "#FFF200" }}>Chi phí hoàn hảo nhất, hỗ trợ mọi khó khăn trước và sau khi nhận lớp, đảm bảo tài chính.</h4>
            </Col>
          </Row>
        </div>
        <div className={styles.main}>
          <div className={`${styles.flexitem_main} ${styles.main1}`}>
            <div>
              <h2>Những  khó khăn bạn có thể gặp trước khi biết đến chúng tôi?</h2>
              <ul>
                <li> Tìm lớp đến bất lực ?</li>
                <li> Gặp bí bách và tình huống khó xử khi giảng dạy.</li>
                <li> Nợ lương hoặc là quỵt tiền của một số trung tâm không rõ ràng ?</li>
                <li> Phí cao và luôn bị động ?</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.flexitem_main} ${styles.main2}`}>
            <h2>Chúng tôi xin cam kết</h2>
            <ul>
              <li> Giải pháp toàn bộ khó khăn nêu trên. </li>
              <li> Hỗ trợ các bạn trong toàn bộ quá trình là đối tác của chúng tôi.</li>
              <li> Giúp bạn tối đa tiết kiệm chi phí và bảo mật những thông tin quan trọng.</li>
              <li> Hoàn phí với lý do phù hợp trong 10 ngày. </li>
              <li> Uy tín, chất lượng. Luôn luôn ưu tiên các đối tác.  </li>
            </ul>
          </div>
          <div className={`${styles.flexitem_main} ${styles.main3}`}>
            <h2>Lợi ích khi bạn trở thành đối tác</h2>
            <ul>
              <li> Giá cả hợp lý chỉ bằng khoảng một nửa so với truyền thống.</li>
              <li> Thông qua công nghệ giúp : tiếp cận nhanh , quá trình tìm lớp, trao đổi, học hỏi kỹ năng , đánh giá ,..</li>
              <li> Giải pháp cho học từ xa và đảm bảo lợi ích cho tất cả các bên.</li>
              <li> Tận dụng những người giỏi nhưng chưa gặp thời, chưa có danh tiếng </li>
            </ul>
          </div>
          <div className={`${styles.flexitem_main} ${styles.main4}`}>
            <h2 style={{color:'blue'}}>Châm ngôn</h2>
            <ul>
              <li> " Đừng xấu hổ khi bạn không biết, ta chỉ xấu hổ khi không học."- Bill-gate -.</li>
              <li style={{fontStyle:'italic',color:'  #bf36e6'}}>"Không phải bất động sản hay là chứng khoán hay là vàng mà
               kiến thức mới là thứ đầu tư sinh lời cao nhất bạn cần tập trung bỏ vốn!"- Jack-ma -. </li>
              <li> "Điều tuyệt vời nhất của việc học hành là không ai có thể lấy nó đi khỏi bạn"-Khuyết Danh-.</li>
            </ul>
          </div>
        </div>
        <Row justify="center" >
          <Col style={{ height: '400px', width: '600px', border: '1px solid' }}>
            Video hướng dẫn cách đăng ký
          </Col>
        </Row>
        <ScrollTo />
      </Layout>
    </div>
  )
}
