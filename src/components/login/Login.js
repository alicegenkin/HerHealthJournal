import React from 'react'
import { LoginWrapper } from './loginStyles'

export default function Login() {
    return (
        <LoginWrapper>
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div> <br />
                <button type="submit" className="btn btn-primary btn-block">Login</button> <br />
                <br />
                     <a href="/"> I forgot my password.</a>
            </form>
        </LoginWrapper>
    )
}
