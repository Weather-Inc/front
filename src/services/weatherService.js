import axios from 'axios'

import config from 'utils/config'

const { backUrl } = config

export const getToken = async () => await axios.post(`${backUrl}/weather/auth`)

export const getDefaultWeatherData = async data => await axios.post(`${backUrl}/weather`, data)

export const getWeatherDataForDate = async data => await axios.post(`${backUrl}/weather/single-date`, data)

export const getWeatherDataForRange = async data => await axios.post(`${backUrl}/weather/date-range`, data)
