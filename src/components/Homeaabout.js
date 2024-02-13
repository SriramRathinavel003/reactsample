import React from 'react'
import '../styles/about.css'



function Homeaabout() {
  return (
    <div>
      <div className='bboi'>
      <div class="w3-container w3-padding-64 w3-center" id="team">
        <h1 style={{ fontSize: "70px",color:"#fff" }}>OUR TEAM</h1>
        <p style={{color:"#fff" }}>Meet the team - our office</p>

        <div class="w3-row"><br></br>

          <div class="w3-quarter">
            <img src="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg" alt="Boss" style={{ width: "40%" }} class="w3-circle w3-hover-opacity" />
            <h3 style={{color:"#fff" }}>Aakaash</h3>
            <p style={{color:"#fff" }}>Full Stack Developer</p>
          </div>

          <div class="w3-quarter">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg" alt="Boss" style={{ width: "40%" }} class="w3-circle w3-hover-opacity" />
            <h3 style={{color:"#fff" }}>Jeshwanth</h3>
            <p style={{color:"#fff" }}>Technician</p>
          </div>

          <div class="w3-quarter">
            <img src="data:image/jpeg;base64,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" alt="Boss" style={{ width: "40%" }} class="w3-circle w3-hover-opacity" />
            <h3 style={{color:"#fff" }}>Josh</h3>
            <p style={{color:"#fff" }}>Back-End Devopler</p>
          </div>

          <div class="w3-quarter">
            <img src="data:image/jpeg;base64,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" alt="Boss" style={{ width: "40%" }} class="w3-circle w3-hover-opacity" />
            <h3 style={{color:"#fff" }}>Vignesh</h3>
            <p style={{color:"#fff" }}>Tester</p>
          </div>

        </div>
      </div>
      <div class="w3-row-padding w3-padding-64 w3-theme-l1" id="work">

        <div class="w3-quarter">
          <h2>Our Work</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="w3-quarter">
          <div class="w3-card w3-white">
            <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png" alt="Snow" style={{ width: "100%" }} />
            <div class="w3-container">
              <h3>Sriram</h3>
              <h4>Chemist</h4>
              <p>Student</p>
              <p>Kamaraj college of engineering<br>
              </br> and technology </p>
            </div>
          </div>
        </div>

        <div class="w3-quarter">
          <div class="w3-card w3-white">
            <img src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg" alt="Lights" style={{ width: "100%" }} />
            <div class="w3-container">
              <h3>C.Hari prasath</h3>
              <h4>IT</h4>
              <p>Student</p>
              <p>Kamaraj college of engineering<br>
              </br> and technology </p>
            </div>
          </div>
        </div>

        <div class="w3-quarter">
          <div class="w3-card w3-white">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg" style={{ width: "100%" }} />
            <div class="w3-container">
              <h3>A.Shiyam</h3>
              <h4>Dancer</h4>
              <p>Student</p>
              <p>Kamaraj college of engineering<br>
              </br> and technology </p>
            </div>
          </div>
        </div>

      </div>
      <div class="w3-row-padding w3-center w3-padding-64" id="pricing">
        <h2>PRICING</h2>
        <p>Choose a pricing plan that fits your needs.</p><br>
        </br>
        <div class="w3-third w3-margin-bottom">
          <ul class="w3-ul w3-border w3-hover-shadow">
            <li class="w3-theme">
              <p class="w3-xlarge">Basic</p>
            </li>

            <li class="w3-padding-16"><b>10</b> Emails</li>

            <li class="w3-padding-16"><b>Limited</b> Support</li>
            <li class="w3-padding-16">
              <h2 class="w3-wide"><i class="fa fa-usd"></i> 10</h2>
              <span class="w3-opacity">per month</span>
            </li>
            <li class="w3-theme-l5 w3-padding-24">
              <button class="w3-button w3-teal w3-padding-large"><i class="fa fa-check"></i> Buy</button>
            </li>
          </ul>
        </div>

        <div class="w3-third w3-margin-bottom">
          <ul class="w3-ul w3-border w3-hover-shadow">
            <li class="w3-theme-l2">
              <p class="w3-xlarge">Pro</p>
            </li>
            <li class="w3-padding-16"><b>25</b> Emails</li>

            <li class="w3-padding-16"><b>Endless</b> Support</li>
            <li class="w3-padding-16">
              <h2 class="w3-wide"><i class="fa fa-usd"></i> 25</h2>
              <span class="w3-opacity">per month</span>
            </li>
            <li class="w3-theme-l5 w3-padding-24">
              <button class="w3-button w3-teal w3-padding-large"><i class="fa fa-check"></i>Buy</button>
            </li>
          </ul>
        </div>

        <div class="w3-third w3-margin-bottom">
          <ul class="w3-ul w3-border w3-hover-shadow">
            <li class="w3-theme">
              <p class="w3-xlarge">Premium</p>
            </li>
            <li class="w3-padding-16"><b>50</b> Emails</li>
            <li class="w3-padding-16"><b>Endless</b> Support</li>
            <li class="w3-padding-16">
              <h2 class="w3-wide"><i class="fa fa-usd"></i> 50</h2>
              <span class="w3-opacity">per month</span>
            </li>
            <li class="w3-theme-l5 w3-padding-24">
              <button class="w3-button w3-teal w3-padding-large"><i class="fa fa-check"></i> Buy</button>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='lower'>
        <h1 style={{ fontSize: "50px" }}>
          Follow Us
        </h1>
        <p>
          Pre-built automations made to deliver ROI
          With 90+ pre-built automation journeys built using marketing best practices,<br>
          </br> you can reach, engage, and convert more customers at scale.<br>
          </br> Our customers saw up to 2x higher click rates when they used out pre-built welcome automation versus when they did not.*
        </p>
      </div>

    </div>
  )
}

export default Homeaabout;
