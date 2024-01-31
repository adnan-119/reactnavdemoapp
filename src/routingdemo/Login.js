import React from 'react'
import './navbar.css';

export default function Login() {
  return (
    <div>
        <h3>Login Page</h3>
        <form>
          <table align="center">
            <tr>
              <td>Enter Email Address</td>
              <td><input type="email"/></td>
            </tr>
            <tr>
              <td>Enter Password</td>
              <td><input type="password"/></td>
            </tr>
            <tr align="center">
              <td colSpan={2}><input type="submit" value="Login" className="button"/></td>
            </tr>
          </table>
        </form>
         
    </div>
  )
}

