import React from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav() {
    return (
        <div className={styles.nav_container}>
            <Link href="/"><a className={styles.title}>To-do</a></Link>

            <div className={styles.nav_content}>
                <Link href='/login'><a className={styles.nav_item}>Log In</a></Link>
                <Link href='/login'><a className={styles.nav_item}>Sign Up</a></Link>
            </div>
        </div>
    )
}
