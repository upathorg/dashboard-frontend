import React from 'react';
import profile2 from '../images/profile2.jpg';
import {FaRegBell} from 'react-icons/fa';
import {BsBoxArrowInRight} from 'react-icons/bs';
import Progress from './Progress'
import '../App.css';

export default function LeftDash() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" id='profile'>
          <div className="col-md-6">
                <img src={profile2} className="card-img" alt="..." style={{height:'40px', width:'50px'}}/>
              </div>
              <div className="col-md-4">
                <div className="name">
                  <h5 className="card-title">Steven</h5>
                  
                  
                </div>
              </div>

        </div>

        <div className='col' id='profile1'>
         <FaRegBell id='p1'/>

        </div>

        <div className='col' id='profile1'>
        <BsBoxArrowInRight id='p1'/>
        </div>
        <div class="row">
  <div class="col-sm-6" id='others2'>
    <div class="card">
      <div class="card-body">
        <div id='course1'>
        <h5 class="card-title" id='course1'>14</h5>
        <p class="card-text">Courses Completed</p>
        </div>
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-6" id='others2'>
    <div class="card">
      <div class="card-body">
        <div id='course1'>
        <h5 class="card-title" id='course1'>2</h5>
        <p class="card-text">Courses in progress</p>
        
        </div>
        
      </div>
    </div>
    
  </div>
  <Progress/>
      </div>
    </div>
    </div>
    </div>
  );
}