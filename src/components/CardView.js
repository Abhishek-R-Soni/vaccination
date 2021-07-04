import React from 'react';

function CardView(props){
    let data = props.item
  
    return(
        <div className="main-container">
        <div className="wrapper">
          <div className="main-card">
            <div className="main-card__image">
              <img src="/images/modi.jpg" alt="searching ..." />
            </div>
            <div className="main-card__level main-card__level--type">{data.vaccine}</div>
            <div className="main-card__unit-name">{data.name}</div>
            <div className="main-card__unit-description">
              {data.address}, <br />{data.state_name} - {data.pincode} 
            </div>
      
            <div className="main-card__unit-stats main-card__unit-stats--age clearfix">
              <div className="one-third">
                <div className="stat">{data.min_age_limit}+</div>
                <div className="stat-value">Age</div>
              </div>
      
              <div className="one-third">
                <div className="stat">{data.available_capacity_dose1}</div>
                <div className="stat-value">Dose 1</div>
              </div>
      
              <div className="one-third no-border">
                <div className="stat">{data.available_capacity_dose2}</div>
                <div className="stat-value">Dose 2</div>
              </div>
            </div>
          </div>
        </div> 
    </div>
    )
}

export default CardView;