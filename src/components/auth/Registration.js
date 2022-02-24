import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


export default function Registration() {
  return (
    <>
    <Header/>
    <div className='row-fluid my-2'>
      <div className='container col-md-5'>
        <form>
          <h3 className='my-4 mb-4'>Join Now</h3>
          <small>Welcome, AVITA Member! Once you have filled out the following information, you can complete your registration. The information you provide will not be used in any other way, so feel secure as you fill in your information.</small>
          <p className='my-2'>Items marked with an asterisk (*) must be filled out.</p>
          <hr />
          <div class="mb-3">
            <label for="exampleInputUserId" class="form-label">Username</label>
            <input type="text" class="form-control" id="exampleInputUserId" aria-describedby="usernameHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="confirm" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputGender" class="form-label">Gender</label>
            <select class="form-select" aria-label="Select">
              <option selected>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>


          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Date of Birth</label>
            <input type="date" class="form-control" id="exampleInputDateofBirth" />
          </div>


          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">I agree to the AVITA's Terms of Use Notice and AVITA's Privacy Policy.</label>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Keep me up to date by eDMs with AVITA news, latest product and service information.</label>
          </div>
          <button type="submit" class="btn  btn-submit">Register</button>
        </form>
      </div>
    </div>
    <Footer/>

    </>
  )
}
