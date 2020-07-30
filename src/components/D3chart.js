import React from 'react';
import linechat from '../images/linechat.jpg';
import '../App.css';

export default function D3chart() {
    return (
        <div>
            <div class="card w-75"  id='d3'>
                <div class="card-body">
                    <h5 class="card-title">study Chart</h5>
                    <img src={linechat} className="card-img" alt="..." style={{height:'300px', width:'350px'}}/>
                    
                </div>
            </div>
        </div>
    )
}
