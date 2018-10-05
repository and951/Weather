import React, { Component } from 'react'
import CountryAutoComplete from '../CountryAutoComplete'
import WeatherForecast from '../WeatherForecast'
import {
  getLatLng
} from 'react-places-autocomplete';
import { getWeatherByGeoloc } from '../../server/apiCalls'
import './styles.css'
import { ICONS } from '../../utils/general.constants';
import moment from 'moment';

class MainApp extends Component {
  constructor(props) {
    super(props)
    // To show that the state si saved and can be getted even when it is reloded.
    console.log(localStorage.getItem('persistentState'))
    const { cookies } = this.props;
    this.state = {
      weatherObj: null

    }
  }

  componentWillMount() {
  }

  onPlaceSelected(address) {
    getLatLng(address).then(latLng =>
      getWeatherByGeoloc(latLng.lat, latLng.lng).then(weatherObj => {
        this.setState({
          weatherObj: this.normalizeWeatherObj(weatherObj)
        }, () => {
          localStorage.setItem('persistentState', JSON.stringify(this.state.weatherObj))
        })
      }).catch((error) => {
        console.log(error)
      })
    )
  }
  /**
   * This method is used to normalize the fetched object and filter the needed parts.
   * @param {*} weatherObj 
   */
  normalizeWeatherObj(weatherObj) {
    //First we are going to filter the weather obj by today.
    let normalizedWeatherObj = {
      cityName: weatherObj.city.name,
      date: moment().format('LLLL'),
      nextDays: this.fetchByDay(weatherObj.list),
      temperature: weatherObj.list[0].main.temp,
      icon: ICONS[weatherObj.list[0].weather[0].id],
      weather: weatherObj.list[0].weather[0].main
    };
    //We are getting the first in the list to get the timestampo accoriding to the city timezone
    var today = moment(weatherObj.list[0].dt_txt, 'YYYY-DD-MM hh:mm:ss')
    weatherObj.list.map((actualWeatherObj) => {
      let actualWeatherObjTime = moment(actualWeatherObj.dt_txt, 'YYYY-DD-MM hh:mm:ss')
      if (actualWeatherObjTime.isSame(today, 'd')) {
        let actualTimeOfDay = this.getTimeOfDay(actualWeatherObj.dt_txt);
        normalizedWeatherObj[actualTimeOfDay] = actualWeatherObj.main.temp;
      }
    })
    console.log(normalizedWeatherObj);

    return normalizedWeatherObj

  }
  /**
   * This method is in charge of fetching the parts of the day of each of the 5 days brougth by the API.
   * @param {*} weatherTimes 
   */
  fetchByDay(weatherTimes) {
    let days = {};
    weatherTimes.map((actualWeatherTime) => {
      let weekDayName = moment(actualWeatherTime.dt_txt, 'YYYY-DD-MM hh:mm:ss').format('dddd');
      days[weekDayName] = days[weekDayName] ? days[weekDayName] : {};
      days[weekDayName]["dayName"] = weekDayName;
      days[weekDayName]["temperature"] = days[weekDayName].temperature ? (days[weekDayName].temperature + actualWeatherTime.main.temp) / 2 : actualWeatherTime.main.temp;
      days[weekDayName]["icon"] = ICONS[actualWeatherTime.weather[0].id]
    })
    return days
  }

  /**
   * A method in charge of getting the corresponding time of the date
   * 
   * @param {*} timestamp 
   */
  getTimeOfDay(timestamp) {
    var timeOfDay = null; //return timeOfDay
    var split_afternoon = 12 //24hr time to split the afternoon
    var morning = 9;
    var split_evening = 17 //24hr time to split the evening
    var currentHour = moment(timestamp, 'YYYY-DD-MM hh:mm:ss').format("HH");
    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      timeOfDay = "afternoon";
    } else if (currentHour >= split_evening) {
      timeOfDay = "evening";
    } else if (currentHour >= morning) {
      timeOfDay = "day";
    }
    else {
      timeOfDay = "morning";
    }

    return timeOfDay;
  }
  onPlaceSelectedError(error) {
    console.log(error);

  }
  onCurrentLocationSelected() {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherByGeoloc(position.coords.latitude, position.coords.longitude).then(weatherObj => {
        this.setState({
          weatherObj: this.normalizeWeatherObj(weatherObj)
        }, () => {
          localStorage.setItem('persistentState', JSON.stringify(this.state.weatherObj))
        })
      }).catch((error) => {
        console.log(error)
      })
    });
  }
  render() {
    return (
      <div className="main-app-container">
        <div className="main-app-container__content" >
          <div className="main-app-container__container">
            {!this.state.weatherObj ?
              <CountryAutoComplete
                className="main-app-container__countryAutoComplete"
                onPlaceSelected={(selectedPlace) => { this.onPlaceSelected(selectedPlace) }}
                onPlaceSelectedError={(error) => { this.onPlaceSelectedError(error) }}
                onCurrentLocationSelected={() => { this.onCurrentLocationSelected() }}
              /> :
              <WeatherForecast
                weatherObj={this.state.weatherObj}
                return={() => {
                  this.setState({
                    weatherObj: null
                  }, () => {
                    localStorage.setItem('persistentState', JSON.stringify(this.state.weatherObj))
                  })
                }}
              />}
          </div>

        </div>
      </div>
    )
  }
}




export default MainApp
