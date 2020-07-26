import React from 'react';


export default function Activities() {
    return (
        <div>
            <div class="container" id='activities'>
                <div class="row">
                    <div class="col" id='activity1'>
                        <span>
                            <strong>Your Activities</strong>
                        </span>
                        <p>06.07.2020 - 21.07.2020</p>
                    </div>
                    <div class="col">
                        <div className="mt-2" id='calender'>
                            <p className="dash" id='date'>choose the date</p>
                            <input
                                type="date"
                                value="2020-07-21"
                                className="dash__text-s no-border"
                            />

                        </div>

                    </div>
                </div>

            </div>

           
        </div>
    )
}
