import React from 'react';
import piechat from '../images/piechat.jpg';

export default function Progress() {
    return (
        <div className='col-md-12' id='p1'>
            <div className="card" style={{width: '18rem'}} id='progress'>
                <div className="card-body">
                    <h5 className="card-title">Progress statistic</h5>
                    <img src={piechat} className="card-img" alt="..." style={{height:'100px', width:'100px'}}/>
                    <p className="card-text">Last weeks result</p>
                     
                </div>
            </div>
        </div>
    )
}
