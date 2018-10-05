import React, { Component } from 'react'
import CountryAutoComplete from '../CountryAutoComplete'
import WeatherForecast from '../WeatherForecast'
import './styles.css'

class MainApp extends Component {
  constructor(props) {
    super(props)
    const { cookies } = this.props;
    this.state = {

    }
    this.onChangeEditAgency = this.onChangeEditAgency.bind(this)

  }

  onChangeEditAgency() {

  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="main-app-container">
        <div className="main-app-container__content" >
          <div className="main-app-container__container">
            {false ? <CountryAutoComplete className="main-app-container__countryAutoComplete" /> :
              <WeatherForecast />}
          </div>

        </div>
      </div>
    )
  }
}




export default MainApp
