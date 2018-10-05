/*!
 * Use is subject to license terms.
 * Filename: url.consntant.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        30/09/2018
 * Description: This module manage all the API calls and their response. 
 */
import config from '../config/env'

import axios from 'axios';
import { getUrl } from '../utils/generalFunctions'
import {
  GET_WEATHER_BY_GEOLOC,
} from '../utils/url.constants'


/**
 * Fetch weather forecast for 5 days with data every 3 hours by geographic coordinates. All weather data can be obtained in JSON.
 * @param {*} lat 
 * @param {*} lon 
 */
export const getWeatherByGeoloc = (lat, lon) => {
  return new Promise((resolve, reject) => {
    const finalURL = getUrl(
      GET_WEATHER_BY_GEOLOC,
      {
        lat: lat,
        lon: lon,
        key: config.server.weather_api.key
      }
    )
    console.log(finalURL)
    fetch(finalURL)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));

  })
}

