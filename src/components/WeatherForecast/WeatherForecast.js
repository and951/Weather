/*!xw
 * Use is subject to license terms.
 * Filename: WeatherForecast.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        01/10/2018
 * Description: This component is a WeatherForecast component.

 */

//Dependencies 
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from 'material-icons-react';
import Toggle from 'react-toggle'
import "react-toggle/style.css" // for ES6 modules

//Stytes
import './styles.css'

class WeatherForecast extends Component {


  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      deegree: 'F'
    };
    this.handleSwitchButtonChange = this.handleSwitchButtonChange.bind(this);
  }

  /**
   * 
   * @param {*} checked 
   */
  handleSwitchButtonChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="container">
        {/* 
          Name and Degree Switch
        */}
        <div class="flex-grid">
          <div class="col">
            <div className="goBackIcon">
              <MaterialIcon icon="arrow_back" />
              <p className="cityName" >Taillin</p>
            </div>
          </div>
          <div class="space" />
          <div class="col centered">
            <Toggle
              defaultChecked={this.state.tofuIsReady}
              icons={false}
              icons={{
                checked: <h6>C°</h6>,
                unchecked: <h6>F°</h6>,
              }}
              className='switchButton'
              onChange={this.handleTofuChange} />
          </div>
        </div>
        {/* 
          Date Section
        */}
        <div class="flex-grid date">
          <div class="col"><p className="subtitle">Tuesday, December 6th 2016</p></div>
        </div>
        <div class="flex-grid">
          <div class="col"><p className="weather">Ligth Snow</p></div>
        </div>
        {/* 
          Actual Weather 
        */}
        <div class="flex-grid actualTemperatureContainer">
          <div class="col actualTemperature">39°F</div>
          <div class="col">
            <i class="wi wi-day-sunny actualTemperature actualTemperatureElement "></i>
          </div>

          <div class="col actualTemperatureElement">
            <div class="flex-grid ">
              <div class="col ">Morning</div>
              <div class="col">39°F</div>
            </div>

            <div class="flex-grid">
              <div class="col ">Day</div>
              <div class="col">39°F</div>
            </div>

            <div class="flex-grid">
              <div class="col ">Evening</div>
              <div class="col">39°F</div>
            </div>

            <div class="flex-grid">
              <div class="col ">Noon</div>
              <div class="col">39°F</div>
            </div>

          </div>
          <div class="space" />
        </div>
        {/* 
          Next Days Weather 
        */}
        <div class="flex-grid nextDaysContainer">
          {[0, 0, 0, 0, 0, 0, 0].map((element) => {
            return <div class="col">
              <div class="flex-grid">
                <div class="col">Day</div>
              </div>
              <div class="flex-grid">
                <div class="col"><i class="wi wi-day-sunny temperatureIcon"></i></div>
              </div>
              <div class="col">Temp</div>
            </div>
          })}


        </div>

      </div >
    )
  }
}



export default WeatherForecast
