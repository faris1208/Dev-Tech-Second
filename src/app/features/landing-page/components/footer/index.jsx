import React from 'react'
import styles from "../footer/styles.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../../../public/assets/images/RogueDevTech.svg"

export default function Footer() {
  return (
    <div className={styles.footer_container}>
       <div className={styles.logo_image}>
          <Link href="/landing">
            <Image
            src={logo}
            alt="logo"
            width={160}
            className={styles.logo_img}
            />
          </Link>
        </div>
        <p>@RogueDev Technologies @2024 Right Reserved</p>
        <div className={styles.footer_facebook}>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin </p>
        </div>
    </div>
  )
}
