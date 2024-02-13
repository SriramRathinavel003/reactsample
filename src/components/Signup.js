import React from 'react';
import Navigation from './Navigation';

function Signup() {
  return (
    <div>
      <Navigation/>
      <div class="log-form">
  <h1>Signup/Register</h1>
  <form>
    <input type="text" title="Name" placeholder="Name" />
    <input type="text" title="Name" placeholder="Username" />
    <input type="text" title="Name" placeholder="Email address" />
    <input type="password" title="password" placeholder="password" />
    <input type="password" title="password" placeholder="confirm password" />
    <button type="submit" onClick="myFunction()" class="btn">Signup</button>

   
  </form>
</div>
    </div>
  )
}
export default Signup;
function myFunction() {
  document.getElementById("demo").innerHTML = "Thank you for registation";
}