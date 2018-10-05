/*!
 * Use is subject to license terms.
 * Filename: general.functions.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        30/09/2018
 * Description: This helper file is used to describe functions of general use. 
 */

import Mustache from 'mustache'


/**
 * Gets the final url for an api call
 * @param {String} url  [The initial url]
 * @param {JSON} params [Json object with parameter values]
 */
export function getUrl(url, params) {
  return Mustache.render(url, params)
}
