import React from 'react'
import styles from "../about-us/styles.module.scss"
import Image from 'next/image'
import { Dash, Qualified, Thumbs } from '../../icons'
import women from "../../../../../../public/assets/images/women.svg"
import two from "../../../../../../public/assets/images/two.svg"

export default function AboutUs() {
  return (
    <div className={styles.about_us_container}>
        <div className={styles.about_us_wrapper}>
            <div className={styles.about_us_img}>
                <Image
                src={women}
                alt='women'
                width={450}
                className={styles.about_us_image}
                />
            </div>

            <div className={styles.about_us_img_two}>
                <Image
                src={two}
                alt='women'
                width={250}
                className={styles.about_us_image}
                />
            </div>
            <div className={styles.about_us_about}>
                <div className={styles.about_us_text}>
                    <Dash />
                    <h2>About Us</h2>
                </div>
                <div className={styles.about_us_power}>
                    <h4>The Power Of Software</h4>
                    <h3>The Simplicity Of Solutions</h3>
                </div>
                <div className={styles.about_us_rogue}>
                    <p><b>RogueDevTech</b> is a team of highly skilled experienced software development company that specializes in creating custom software solutions for all businesses of all sizes. With a team of highly skilled and experienced developers,</p>
                    <p><b>RogueDevTech</b> offers a wide range of  software development services, including web development, mobile development, desktop application development and enterprise software development. </p>
                    <span><p>Our team work closely with the clients to understand their business needs and develop solutions that meets thier objectives and exceed thier expectations. </p></span>
                </div>
                <div className={styles.about_us_qualified}>
                    <div className={styles.about_us_qualified_wrapper}>
                        <div className={styles.about_us_qualified_head}>
                            <Qualified />
                            <b>Qualified <br />Consultants</b>
                        </div>
                        <p>A qualified consultants will be involved in the entire lifecycle of your product</p>
                    </div>
                    <div className={styles.about_us_qualified_wrapper}>
                        <div className={styles.about_us_qualified_head}>
                            <Thumbs />
                            <b>100% <br />Trusted</b>
                        </div>
                        <p>We have helped numerous clients across various industries.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
