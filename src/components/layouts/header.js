import React from 'react';
import Logo from '../../Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='row my-2'>
    <div className='col-md-3'>
        <Logo/>
    </div>
    <div className='col-md-9'>
      <Navbar/>
    </div>

  </div>

  )
}
