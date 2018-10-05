/*!
 * Use is subject to license terms.
 * Filename: url.consntant.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        30/09/2018
 * Description: This configuration file is used to manage all the API calls urls. 
 */

import config from '../config/env'

//We are gathering the base url depending to the current enviornment. 
//This in case we were using an API that have a sandbox and production API.
const WEATHER_BASE_URL = config.server.weather_api.baseURL

export const GET_WEATHER_BY_GEOLOC = `${WEATHER_BASE_URL}/forecast?lat={{lat}}&lon={{lon}}&APPID={{key}}`
