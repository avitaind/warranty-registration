import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


export default function RecoverPassword() {
  return (
    <>
    <Header/>
    <div className='row-fluid my-5'>
    <div className='container col-md-5'>
      <form>
       <h3 className='my-4 mb-4'>Forgot Password</h3>
       <small>Please enter your AVITA account email to reset password</small>
       <hr/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <button type="submit" class="btn btn-submit">Reset Password</button>
      </form>
    </div>
    </div>
    <Footer/>

    </>
  )
}
