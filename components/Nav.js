import React from 'react'
import Link from 'next/link'
import styles from './nav.module.css'
import { useSession, signOut } from 'next-auth/react'

export default function Nav() {
    const { data: session, status } = useSession()
    console.log(session)
    console.log(status)

    if (!session) {
        return (
            <div className={styles.nav_container}>
                <Link href="/"><a className={styles.title}>To-do</a></Link>

                <div className={styles.nav_content}>
                    <Link href='/login'><a className={styles.nav_item}>Log In</a></Link>
                    <Link href='/signup'><a className={styles.nav_item}>Sign Up</a></Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.nav_container}>
            <Link href="/"><a className={styles.title}>To-do</a></Link>

            <div className={styles.nav_content}>
                <Link href='/dashboard'><a className={styles.nav_item}>Dashboard</a></Link>
                <a className={styles.nav_item} onClick={signOut}>Sign out</a>
            </div>
        </div>
    )
}
