import React from 'react'
import '../styles/login.css'
import Navigation from './Navigation'
import Lowercomp from './Lowercomp'

function Login() {
  return (
    <div>
      <Navigation />
      <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />

      <div className='body'>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label for="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="txt" placeholder="User name" required="" />
              <input type="email" name="email" placeholder="Email" required="" />
              <input type="password" name="pswd" placeholder="Password" required="" />
              <button>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label for="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required="" />
              <input type="password" name="pswd" placeholder="Password" required="" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
      <Lowercomp/>
    </div>

  )
}

export default Login