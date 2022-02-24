import React from 'react';
import Sidebar from './layouts/Sidebar';
import User from '../../src/img/User.png';

export default function Profile() {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <Sidebar />
      </div>
      <div className='card col-md-10 p-4'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={User} className="m-2" style={{ width: 250 }} />
            <h6>Usrename : <span>sandy4u1994</span></h6>
            <h6>Email : <span>sandy4u1994@gmail.com</span></h6>
         
          </div>

          <div className='col-6 '>
      
            <form>
            <h3 className='mb-4'>Member Center</h3>

            <small>Items marked with an asterisk (*) must be filled out.</small>
            <hr />

              <div class="mb-3">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" />
              </div>
              <div class="mb-3">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" />
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
              <div class="mb-3">
              <label for="phone" class="form-label">Mobile Number</label>
              <input type="mobile" class="form-control" id="phone" />
            </div> 
              <div class="mb-3">
                <label for="exampleInputCountry" class="form-label">Country</label>
                <select class="form-select" aria-label="Select">
                  <option selected>Select</option>
                  <option value="india">India</option>
                  <option value="other">Other</option>
                </select>
              </div>
         
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea type="text" class="form-control" id="address" />
              </div>    
               <div class="mb-3">
                <label for="pin" class="form-label">Pin</label>
                <input type="text" class="form-control" id="pin" />
              </div>

              <button type="submit" class="btn btn-submit">Save</button>
            </form>


          </div>

        </div>


      </div>
    </div>

  )
}
