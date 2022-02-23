import React from 'react';
import Sidebar from './layouts/Sidebar';

export default function Products() {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <Sidebar />
      </div>
      <div className='col-md-8'>
        My Products
      </div>

    </div>
  )
}
