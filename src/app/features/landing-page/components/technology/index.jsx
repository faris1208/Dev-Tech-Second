import React from 'react'
import styles from "../technology/styles.module.scss"
import Image from 'next/image'
import desktop from "../../../../../../public/assets/images/desktop.jpeg"
import mobile from "../../../../../../public/assets/images/mobile.jpeg"
import { Dash } from '../../icons'
import { choose } from '../../data'

export default function Technology() {
  return (
    <div className={styles.technology_container}>
        <div className={styles.technology_wrapper}>
            <div className={styles.technology_technology}>
                <h2>Empowering business through technology</h2>
                <p>We specialise in delivering end-to-end services and also turn your ideas into reality. No matter where you are based.</p>
                <button>Talk to us today  </button>
                <div className={styles.technology_last}>
                    <div className={styles.technology_last_text}>
                        <h2>24-7</h2>
                        <p>Availability</p>
                    </div>
                    <div className={styles.technology_last_text}>
                        <h2>100%</h2>
                        <p>Customer Support</p>
                    </div>
                </div>
            </div>
            <div className={styles.desktop_img}>
                <Image
                src={desktop} 
                alt='desk'
                width={300}
                className={styles.desktop_image}
                />
            </div>
            <div className={styles.mobile_img}>
                <Image
                src={mobile} 
                alt='desk'
                width={250}
                className={styles.desktop_image}
                />
            </div>
        </div>
        <div className={styles.choose_wrapper}>
            <div className={styles.services_wrapper}>
                <div className={styles.services_head}>
                    <Dash  />
                    <h2>Why Choose Us</h2>
                </div>
            </div>
            <div className={styles.choose_choose}>
                    <div className={styles.logo_img}>
                        {choose.map((item, index) => (
                            <div
                            key={index}
                            className={styles.logo_icon}
                            >
                            <Image 
                            src={item.icon}
                            alt='logo'
                            width={65}
                            className={styles.choose_image}
                            />
                            <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}
