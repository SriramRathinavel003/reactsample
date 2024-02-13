import React from 'react'
import Navigation from './Navigation'
import '../styles/contact.css'
import Lowercomp from './Lowercomp'

function Contact() {
  return (
    <div>
      <Navigation />
      <div className='body'>

        <div className="wrapper">
          <form className="form">
            <div class="pageTitle title">Contact Us
            </div>
            <div className="secondaryTitle title">Please fill this form .
            </div>
            <input type="text" class="name formEntry" placeholder="Name" />
            <input type="text" class="email formEntry" placeholder="Email" />
            <textarea class="message formEntry" placeholder="Message"></textarea>
            <button class="submit formEntry" onclick="thanks()">Send</button>

              </form>
            </div>
            <script src="app.js" />
        </div>
        <Lowercomp/>
      </div>

      )
}

      export default Contact