import React from 'react'
import styles from "../portfolio/styles.module.scss"
import { Dash} from "../../icons"
import Image from 'next/image'
import { portfolio } from '../../data'

export default function Portfolio() {
  return (
    <div className={styles.portfolio_container}>
        <div className={styles.portfolio_wrapper}>
            <div className={styles.portfolio_head}>
                <Dash  />
                <h2>Our Portfolio</h2>
            </div>
            <p>Latest Projects</p>
        </div>
        <div className={styles.portfolio_portfolio}>
            <div className={styles.logo_img}>
                {portfolio.map((item, index) => (
                    <div
                    key={index}
                    className={styles.logo_icon}
                    >
                    <div className={styles.lenbo_img}>
                        <Image 
                        src={item.icon}
                        alt='image'
                        width={100}
                        className={styles.lenbo_image}
                        />
                    </div>
                    <div className={styles.portfolio_text}>
                        <b>{item.name}</b>
                        <p>{item.text}</p>
                    </div>
                    </div>
                ))}
            </div>
            <div className={styles.portfolio_button}>
                <button>View all project</button>
            </div>
        </div>
    </div>
  )
}
