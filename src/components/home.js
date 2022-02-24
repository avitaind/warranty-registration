import React from 'react';
import Sidebar from './layouts/Sidebar';
import HomeBg from '../img/home-bg.jpg';
import { Link } from 'react-router-dom';


const styles = {
  homeBackground: {
      backgroundImage: `url(${HomeBg})`,
  }
};


export default function Home() {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <Sidebar />
      </div>
      <div className='card home-card col-md-10' style={styles.homeBackground}>
      <div className="sub-panel text-center mt-5 py-5 px-5">
          <h2 className="my-4 ls-5">Become an AVITA Member</h2>
          <div className="py-0 sub-panel-content">
              <div className="home-text my-4 mx-2 ls-1">In addition to AVITA intermittently offering the hottest discounts, news on sales promotions, <br/>and the newest information on AVITA, you will also enjoy having excellent technological support services to promote your experience as a user of our products.</div>
          </div>

          <Link className="btn btn-register my-5 px-4 ls-2" to="/warranty-registration">Register Your Device</Link>
      </div>


      </div>

    </div>
  )
}
