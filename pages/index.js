// import Head from 'next/head'
import Layout from '../components/layout'
import styles from './_index.module.css'
import Image from 'next/image'
import FormStatic1 from '../components/form/nguoihoc/form1'
import ScrollTo from '../components/scrollToFooter'

export default function Home() {
  return (
    <div >
      <Layout>
        <div className="backgro_img">
          <div className={styles.title}>
            <h1>TCL</h1>
            <div>TEACHING CONNECT LEANING</div>
          </div>
          <div className={styles.content}>
            <p className={styles.p1}>Chúng tôi ở đây để giúp các bạn việc tìm người học, người dạy . Cam kết <strong>uy tín</strong>, <strong>chất lượng</strong> phục vụ , <strong>chi phí</strong> <span> tốt nhất.</span></p>
          </div>
          <div className={styles.img}>
              <Image src="/hoasen.png" alt="hoasen" width='200' height='200' />
          </div>
        </div>
        <div className={styles.main}>
          <div className={`${styles.flexitem_main} ${styles.main1}`}>
            <div>
              <h3>tieu de1</h3>
              <ul>
                <li> noi dung 1</li>
                <li> noi dung 1</li>
                <li> noi dung 1</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.flexitem_main} ${styles.main2}`}>
            <h3>tieu de2</h3>
            <ul>
              <li> noi dung 1</li>
              <li> noi dung 1</li>
              <li> noi dung 1</li>
            </ul>
          </div>
          <div className={`${styles.flexitem_main} ${styles.main3}`}>
            <h3>tieu de3</h3>
            <ul>
              <li> noi dung 1</li>
              <li> noi dung 1</li>
              <li> noi dung 1</li>
            </ul>
          </div>
          <div className={`${styles.flexitem_main} ${styles.main4}`}>
            <h3>tieu de4</h3>
            <ul>
              <li> noi dung 1noi dung 1noi dung 1noi dung 1noi dung 1noi dung 1</li>
              <li> noi dung 1</li>
              <li> noi dung 1</li>
            </ul>
          </div>
        </div>
        <ScrollTo />
        <FormStatic1 />
      </Layout>
    </div>
  )
}
