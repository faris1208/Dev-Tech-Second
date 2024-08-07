import React from 'react'
import styles from "../experience/styles.module.scss"

export default function Experience() {
  return (
    <div className={styles.experience_container}>
        <div className={styles.experience_text}>
            <h1>Experience the power of creativity, Let’s Build Your Website</h1>
        </div>
        <div className={styles.experience_button}>
            <button>Start a project</button>
        </div>
    </div>
  )
}
