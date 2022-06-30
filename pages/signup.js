import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Signup() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passConf, setPassConf] = useState("")
    const [errors, setErrors] = useState([])

    const submit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!email) {
            errors.push(['email', 'Email is required']);
        }

        if (!pass) {
            errors.push(['pass', 'Password is required']);
        }

        if (pass !== passConf) {
            errors.push(['passConfirm', 'Passwords do not match']);
        }

        // POST the data
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    email: email,
                    password: pass,
                })
        });

        const data = await res.json();
        if (res.status !== 200) {
            setErrors([['other', data.msg]]);
            return;
        }

        // Success, sign in and redirect
        const status = await signIn('credentials', {
            redirect: false,
            email: email,
            password: pass
        });

        if (status.error) {
            setErrors([['other', status.error]]);
        }
        else {
            router.push("/dashboard");
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
                    <label htmlFor="password">Confirm Password: </label>
                    <input type="password" name="password" id="password" onChange={e => {
                        const newPassConf = e.target.value
                        setPassConf(newPassConf)
                    }} required />
                </div>
                <div className="form-example">
                    <input type="submit" value="Sign up!" onClick={submit} />
                </div>
                {errors}
            </form>
        </div>
    )
}
