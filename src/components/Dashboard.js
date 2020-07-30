import React from 'react';
import { FcGraduationCap } from 'react-icons/fc';
import { FcMoneyTransfer } from 'react-icons/fc';
import { MdDashboard } from "react-icons/md";
import { FaEnvelope } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import welcomeimg from '../images/welcomeimg.png';

import Activities from './Activities';
import LeftDash from './LeftDash';
import D3chart from './D3chart';

export default function dashboard() {
  return (
    <div>
      <div className='' id='container'>

        <div className='row' >

          <div className='col' id='dashleft'>

            <div >
              <h2 id='logoname'>YellowTeam</h2><br />

              <div id='dash1' style={{ color: 'blue' }}>
                <MdDashboard color='purple' id='dashicon' />
                <strong><p>Dashboard</p></strong>
              </div>
              <div id='dash1'>
                <FcGraduationCap color='purple' id='dashicon' />
                <strong><p>Courses</p></strong>
              </div>
              <div id='dash1'>
                <FcMoneyTransfer color='purple' id='dashicon' />
                <strong><p>Pricing Plans</p></strong>
              </div>
              <div id='dash1'>
                <FaEnvelope color='purple' id='dashicon' />
                <strong><p>Inbox</p></strong>
              </div>
              <div id='dash1'>
                <MdPeople color='purple' id='dashicon' />
                <strong><p>Help & Support</p></strong>
              </div>

              <div id='dash2'>
                <MdPeople color='black' id='dashicon' />
                <strong><p>Settings</p></strong>
              </div>

            </div>


          </div>

          <div className='col-md-10' id="others">
            <div className='row'>
              <div className='col-md-6'>
                <input type='text' placeholder='Search here' id='typehere' />
                <div class="card mb-3" style={{ maxwidth: "540px" }} id='others1'>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img id='welcome' src={welcomeimg} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Welcome back, Steven</h5>
                        <p className="card-text">You have 2 interesting courses in progres.We have every available resources and instructors to help.Keep up the good work,you are a rockstar/</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <Activities/>
                <D3chart/>
              </div>

              <div className='col-md-4'>
                <LeftDash/>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>


  )
}
