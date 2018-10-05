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

import apiRequest from './apiRequest'
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
    apiRequest({
      url: finalURL,
      headers: {
        'Content-Type': 'application/json',
      },
      onSuccess: response => { resolve(response) },
      onError: error => { reject(error) },
    })
  })

}
