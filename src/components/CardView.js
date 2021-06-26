import React from 'react';

function CardView(props){
    let data = props.item
    console.log('card')
    console.log(data)
    return(
        <div class="main-container">
        <div class="wrapper">
          <div class="main-card">
            <div class="main-card__image">
              <img src="/images/modi.jpg" alt="searching ..." />
            </div>
            <div class="main-card__level main-card__level--type">{data.vaccine}</div>
            <div class="main-card__unit-name">{data.name}</div>
            <div class="main-card__unit-description">
              {data.address}, <br />{data.state_name} - {data.pincode} 
            </div>
      
            <div class="main-card__unit-stats main-card__unit-stats--age clearfix">
              <div class="one-third">
                <div class="stat">{data.min_age_limit}+</div>
                <div class="stat-value">Age</div>
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
    )
}

export default CardView;