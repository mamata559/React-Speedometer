// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="SpeedoMeter"
          className="image1"
        />
        <h2 className="heading heading1">Speed is 0mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button-element button1"
            onClick="onClickAccelerate"
          >
            Accelerate
          </button>
          <button type="button" className="button-element">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
