import React from 'react';
import Sidebar from '../layouts/Sidebar';

export default function Customer() {
  return (
    <div className='row'>
    <div className='col-md-2'>
      <Sidebar />
    </div>
    <div className='card col-md-10 p-4'>
      <h1 className='text-center mb-5'>All Customers </h1>


    </div>
  </div>
    )
}
