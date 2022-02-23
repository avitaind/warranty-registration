import React from 'react';
import FooterTop from './FooterTop';

export default function Footer() {
  return (
    <>
      <FooterTop />
      <div class="container my-4 mb-4">
        <div class="row">
          <div class="col-sm">
            <ul>
              <li><a href='/'>Products</a></li>
              <li><a href='/'>News</a></li>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Blog</a></li>

            </ul>
          </div>
          <div class="col-sm">
            <ul>
            <li><a href='/'>Where to Buy</a></li>
            <li><a href='/'>Contact AVITA</a></li>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Repair Terms and Condition</a></li>
            <li><a href='/'>Terms of Use Notice</a></li>
            <li><a href='/'>Privacy Policy</a></li>
            <li><a href='/'>Career</a></li>


            </ul>
          </div>
          <div class="col-sm">
          <ul>
            <li><a href='/'>Available On</a></li>
            <li><a href='/'>NEXSTMALL</a></li>
            <li><a href='/'>Flipkart</a></li>
            <li><a href='/'>Amazon</a></li>
            <li><a href='/'>Reliance Digital</a></li>
            <li><a href='/'>Tata Cliq</a></li>
          </ul>
        </div>
        <div class="col-sm">
        <ul>
          <li><a href='/'>India</a></li>
          <li>© NEXSTGO COMPANY LTD. ALL RIGHTS RESERVED. </li>
          </ul>
      </div>
        </div>
      </div>
    </>
  )
}
