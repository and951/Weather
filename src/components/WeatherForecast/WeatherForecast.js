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
import tuc from 'temp-units-conv';
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
    this.calculateTemp = this.calculateTemp.bind(this);
    this.handleSwitchButtonChange = this.handleSwitchButtonChange.bind(this);

  }

  /**
   * This method is in charge of handling the temp switch
   * @param {*} checked 
   */
  handleSwitchButtonChange() {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  /**
   * This method is in charge of calculating the temp variable
   * @param {*} temp 
   */
  calculateTemp(temp) {
    return this.state.checked ? `${Math.round(tuc.k2c(temp))}°C` : `${Math.round(tuc.k2f(temp))}°F`
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
              <MaterialIcon icon="arrow_back" onClick={this.props.return} />
              <p className="cityName" >{this.props.weatherObj.cityName}</p>
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
              onChange={() => { this.handleSwitchButtonChange() }} />
          </div>
        </div>
        {/* 
          Date Section
        */}
        <div class="flex-grid date">
          <div class="col"><p className="subtitle">{this.props.weatherObj.date}</p></div>
        </div>
        <div class="flex-grid">
          <div class="col"><p className="weather">{this.props.weatherObj.weather}</p></div>
        </div>
        {/* 
          Actual Weather 
        */}
        <div class="flex-grid actualTemperatureContainer">
          <div class="col actualTemperature">{this.calculateTemp(this.props.weatherObj.temperature)}</div>
          <div class="col">
            <i class={"wi  actualTemperature actualTemperatureElement " + this.props.weatherObj.icon}></i>
          </div>
          <div class="col actualTemperatureElement">
            {this.props.weatherObj.morning &&
              <div class="flex-grid ">
                <div class="col ">Morning</div>
                <div class="col">{this.calculateTemp(this.props.weatherObj.morning)}</div>
              </div>}

            {this.props.weatherObj.day &&
              <div class="flex-grid">
                <div class="col ">Day</div>
                <div class="col">{this.calculateTemp(this.props.weatherObj.day)}</div>
              </div>}

            {this.props.weatherObj.evening &&
              <div class="flex-grid">
                <div class="col ">Evening</div>
                <div class="col">{this.calculateTemp(this.props.weatherObj.evening)}</div>
              </div>}

            {this.props.weatherObj.noon &&
              <div class="flex-grid">
                <div class="col ">Noon</div>
                <div class="col">{this.calculateTemp(this.props.weatherObj.noon)}
                </div>
              </div>}
            <div class="space" />
          </div>
        </div>
        {/* 
          Next Days Weather 
        */}
        <div class="flex-grid nextDaysContainer">
          {Object.keys(this.props.weatherObj.nextDays).map((weatherKey) => {
            return <div class="col">
              <div class="flex-grid">
                <div class="col"><p className="temperatureFont">{weatherKey}</p></div>
              </div>
              <div class="flex-grid">
                <div class="col"><i class={"wi temperatureIcon " + this.props.weatherObj.nextDays[weatherKey].icon}></i></div>
              </div>
              <div class="col"><p className="temperatureFont">{this.calculateTemp(this.props.weatherObj.nextDays[weatherKey].temperature)}</p></div>
            </div>
          })}


        </div>

      </div >
    )
  }
}



export default WeatherForecast
