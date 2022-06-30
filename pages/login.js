import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { signIn, getSession } from 'next-auth/react';


export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        const status = await signIn('credentials', {
            redirect: false,
            email: email,
            password: pass
        });

        if (status.error) {
            console.log(status.error)
        }
        else {
            if (router.query.redirect) {
                router.push(router.query.redirect);
            }
            else {
                router.push("/dashboard");
            }
        }
    }

    return (
        <div>
            <form action="" method="get" className="form-example">
                <div className="form-example">
                    <label htmlFor="name">Email: </label>
                    <input type="text" name="name" id="name" onChange={e => {
                        const newEmail = e.target.value
                        setEmail(newEmail)
                    }} required />
                </div>
                <div className="form-example">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => {
                        const newPass = e.target.value
                        setPass(newPass)
                    }} required />
                </div>
                <div className="form-example">
                    <input type="submit" value="Login!" onClick={submit} />
                </div>
            </form>
        </div>
    )
}
