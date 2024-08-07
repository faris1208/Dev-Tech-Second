import React from 'react'
import styles from "../touch/styles.module.scss"
import Image from 'next/image'
import table from "../../../../../../public/assets/images/table.svg"
import laptop from "../../../../../../public/assets/images/laptop.svg"
import { SearchIcon } from '../../icons'

export default function Touch() {
  return (
    <div className={styles.touch_container}>
        <div className={styles.touch_wrapper}>
            <div className={styles.touch_img}>
                <Image
                src={table}
                alt='table'
                width={550}
                className={styles.touch_image}
                 />
            </div>
            <div className={styles.touch_img_two}>
                <Image
                src={laptop}
                alt='table'
                width={250}
                className={styles.touch_image}
                 />
            </div>
            <div className={styles.touch_touch}>
                <div className={styles.touch_touch_text}>
                    <SearchIcon />
                    <h2>Get In Touch</h2>
                </div>
                <div className={styles.touch_touch_text_two}>
                    <p>We’d  love to hear from you</p>
                    <span><p>Thank you for reaching out to <b>RogueDevTech!</b> Please fill the form right. Our team will contact you shortly.</p></span>
                </div>
                <form action="" className={styles.touch_form}>
                    <input type="email" placeholder='Enter your email address'  className={styles.touch_input} />
                    <input type="text" placeholder='How can we help you?' className={styles.touch_input_two} />
                    <div className={styles.touch_form_last}>
                        <input type="checkbox"  className={styles.touch_form_last_input} />
                        <p>I’m not a robot</p>
                    </div>
                    <button>Talk to us</button>
                </form>
            </div>
        </div>
    </div>
  )
}
