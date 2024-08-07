import React from 'react'
import styles from "../services/styles.module.scss"
import { SearchIcon } from '../../icons'
import { services} from "../../data/index"

export default function Services() {
  return (
    <div className={styles.services_container}>
        <div className={styles.services_wrapper}>
            <div className={styles.services_head}>
                <SearchIcon  />
                <h2>Our Services</h2>
            </div>
            <p>What we can help you with</p>
        </div>
        <div className={styles.services_services}>
            <div className={styles.logo_img}>
                {services.map((item, index) => (
                    <div
                    key={index}
                    className={styles.logo_icon}
                    >
                    <b>{item.name}</b>
                    <b>{item.first}</b>
                    <p>{item.text}</p>
                    <small>{item.last}</small>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
