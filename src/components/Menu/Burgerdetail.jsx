import React from 'react'

const Burgerdetail = (props) => {
  return (
    <div className="burgerdetail">
      <img src={props.burgerImage} alt="/"/>
        <div className="description">
          <h3>{props.burgerName}</h3>
          <p>{props.burgerInfo}</p>
        </div>
    </div>
  )
}

export default Burgerdetail
