/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

const api_key = "69d6c44fb125c3c7e9d2a1b9aa0dc437";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=69d6c44fb125c3c7e9d2a1b9aa0dc437`
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid=69d6c44fb125c3c7e9d2a1b9aa0dc437`
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=69d6c44fb125c3c7e9d2a1b9aa0dc437`
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=69d6c44fb125c3c7e9d2a1b9aa0dc437`
  },
  /**
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=69d6c44fb125c3c7e9d2a1b9aa0dc437`
  }
}