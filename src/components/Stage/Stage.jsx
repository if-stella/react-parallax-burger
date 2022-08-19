import React from 'react'
import './Stage.scss'

const Stage = () => {
  return (
    <div className="stage">
      <div className="container">
        <div className="content">
          <div className="text">
            <h1>Geek Burgers</h1>
            <p>The best for the best! Always served daily & fresh.</p>
          </div>
          <button className="btn">Delivery</button>
          <button className="btn">Reservation</button>
        </div>
      </div>
    </div>
  )
}

export default Stage
