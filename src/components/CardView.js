import React from 'react';
import ReactDOM from 'react-dom';

function CardView(props){
    let data = props.item
    console.log('card')
    console.log(data)
    return(
        <div>
            <div class="slide-container">  
                <div class="wrapper">
                    <div class="clash-card barbarian">
                        <div class="clash-card__image clash-card__image--barbarian">
                            <img src="" alt="barbarian" />
                        </div>
                        <div class="clash-card__level clash-card__level--barbarian">{data.vaccine}</div>
                        <div class="clash-card__unit-name">{data.name}</div>
                        <div class="clash-card__unit-description">
                            {data.address}, <br /> {data.state_name}- {data.pincode} <br /> 
                        </div>

                        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                            <div class="one-third">
                                <div class="stat">{data.min_age_limit}+</div>
                                <div class="stat-value">21-06-21</div>
                            </div>

                            <div class="one-third">
                                <div class="stat">{data.available_capacity_dose1}</div>
                                <div class="stat-value">Dose 1</div>
                            </div>

                            <div class="one-third no-border">
                                <div class="stat">{data.available_capacity_dose2}</div>
                                <div class="stat-value">Dose 2</div>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>
    </div>
    )
}

export default CardView;