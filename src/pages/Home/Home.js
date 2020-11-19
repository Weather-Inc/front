import { Component } from 'react'
import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { AcUnit, Cloud, LabelImportant, WbSunny, Whatshot } from '@material-ui/icons'
import moment from 'moment'

import homeStyles from 'assets/styles/home/home'

import AdviceCard from 'components/AdviseCard/AdviceCard'
import ForecastChart from 'components/ForecastChart/ForecastChart'
import ForecastTable from 'components/ForecastTable/ForecastTable'
import Sidebar from 'components/Sidebar/Sidebar'
import WeatherBox from 'components/WeatherBox/WeatherBox'

import { getToken, getDefaultWeatherData, getWeatherDataForDate, getWeatherDataForRange } from 'services/weatherService'

import theme from 'theme'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avgTemp: '',
      avgWind: '',
      avgSolar: '',
      avgRainfail: '',
      avgHumidity: '',
      endDate: '',
      forecasts: [],
      geolocationAllowed: true,
      latitude: 5.705444,
      loading: false,
      longitude: 12.617354,
      singleDate: this.formattedDate(),
      startDate: '',
      token: null
    }
  }

  async componentDidMount() {
    const showPosition = position => {
      if (position) {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      } else {
        // Display backdrop telling user to allow browser to access location
        this.setState({
          geolocationAllowed: false
        })
      }
    }

    try {
      // Get user's geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        // Display backdrop telling user their browser doesn't support geolocation
      }

      // Display loading indicator
      this.setState({ loading: true })
      
      // Request aWhere access token
      const tokenResponse = await getToken()

      this.state.token = tokenResponse.data.access_token

      // Fetch weather data when component mounts
      const data = {
        bearer_token: this.state.token,
        latitude: this.state.latitude,
        limit: '',
        longitude: this.state.longitude,
        offset: ''
      }
      const weatherDataResponse = await getDefaultWeatherData(data)

      this.setState({
        forecasts: weatherDataResponse.data.forecasts,
        loading: false // Hide loading indicator
      })

      // Update the weather data
      this.updateWeatherData()
    } catch (error) {
      console.log({ error })
    }
  }

  updateWeatherData() {
    let forecastCount = 0
    let temperature = 0
    let wind = 0
    let solar = 0
    let rainfall = 0
    let humidity = 0

    const forecasts = this.state.forecasts

    forecasts.forEach(forecast => {
      forecast.forecast.forEach(f => {
        forecastCount++

        temperature += f.temperatures.value
        wind += f.wind.average
        solar += f.solar.amount
        rainfall += f.precipitation.chance
        humidity += f.relativeHumidity.average
      })
    })

    this.setState({
      avgTemp: `${(temperature/forecastCount).toFixed(1)}°C`,
      avgWind: `${(wind/forecastCount).toFixed(1)}m/s`,
      avgSolar: `${(solar/forecastCount).toFixed(1)}Wh/m^2`,
      avgRainfail: `${(rainfall/forecastCount).toFixed(1)}%`,
      avgHumidity: (humidity/forecastCount).toFixed(1)
    })
  }

  formattedDate(date) {
    const format = 'YYYY-MM-DD'

    return date ? moment(date).format(format) : moment(new Date()).format(format)
  }

  async fetchWeatherDataForDate() {
    try {
      // Display loading indicator
      this.setState({ loading: true })

      // Fetch weather data for single date
      const data = {
        bearer_token: this.state.token,
        date: this.formattedDate(),
        latitude: this.state.latitude,
        limit: '',
        longitude: this.state.longitude,
        offset: ''
      }
      const weatherDataResponse = await getWeatherDataForDate(data)

      this.setState({
        forecasts: [weatherDataResponse.data],
        loading: false // Hide loading indicator
      })

      // Update the weather data
      this.updateWeatherData()
    } catch (error) {
      // Display error message
    }
  }

  async fetchWeatherDataForRange(startDate, endDate) {
    try {
      // Display loading indicator
      this.setState({ loading: true })

      // Fetch weather data for single date
      const data = {
        bearer_token: this.state.token,
        end_date: endDate,
        latitude: this.state.latitude,
        limit: '',
        longitude: this.state.longitude,
        offset: '',
        start_date: startDate
      }
      const weatherDataResponse = await getWeatherDataForRange(data)

      this.setState({
        forecasts: weatherDataResponse.data.forecasts,
        loading: false // Hide loading indicator
      })

      // Update the weather data
      this.updateWeatherData()
    } catch (error) {
      // Display error message
    }
  }

  render() {
    const { classes } = this.props

    const handleTodayClicked = () => {
      this.fetchWeatherDataForDate()
    }

    const handleRangeClicked = () => {
      // Get start and end dates for year
      const startDate = this.formattedDate()
      const endDate = moment().add(15, 'days').format('YYYY-MM-DD')

      this.fetchWeatherDataForRange(startDate, endDate)
    }

    const temperatureData = {
      icon: <Whatshot color="primary" />,
      title: 'Temperature',
      value: this.state.avgTemp
    }
    const rainfallData = {
      icon: <Cloud color="primary" />,
      title: 'Rainfall',
      value: this.state.avgRainfail
    }
    const humidityData = {
      icon: <AcUnit color="primary" />,
      title: 'Humidity',
      value: this.state.avgHumidity
    }
    const solarData = {
      icon: <WbSunny color="primary" />,
      title: 'Solar Radiation',
      value: this.state.avgSolar
    }
    const windData = {
      icon: <LabelImportant color="primary" />,
      title: 'Wind Speed',
      value: this.state.avgWind
    }

    const weatherOverviewData = [
      temperatureData, rainfallData, humidityData, solarData, windData
    ].map(d => (
      <Grid item xs={12} md={2} key={d.title}>
        <WeatherBox data={d} loading={this.state.loading} />
      </Grid>
    ))

    return (
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Sidebar />
          </Grid>

          <Grid item xs={12} sm={9}>
            <Container className={classes.content}>
              <Typography gutterBottom variant="h5" color="primary">
                Overview
              </Typography>

              <Grid container justify="space-evenly" spacing={2}>
                {weatherOverviewData}
              </Grid>

              <Divider className={classes.divider} />

              <Grid className={classes.chart} container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <ForecastChart
                    forecasts={this.state.forecasts}
                    loading={this.state.loading}
                    onTodayClicked={handleTodayClicked}
                    onRangeClicked={handleRangeClicked}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <ForecastTable
                    loading={this.state.loading}
                    humidity={this.state.avgHumidity}
                    rainfall={this.state.avgRainfail}
                    solar={this.state.avgSolar}
                    temperature={this.state.avgTemp}
                    wind={this.state.avgWind}
                  />
                </Grid>
              </Grid>

              <Divider className={classes.divider} />

              <Typography gutterBottom variant="h5" color="primary">
                Advisory
              </Typography>

              <Grid container justify="space-evenly" spacing={2}>
                <Grid item xs={12} md={4}>
                  <AdviceCard />
                </Grid>

                <Grid item xs={12} md={4}>
                  <AdviceCard />
                </Grid>

                <Grid item xs={12} md={4}>
                  <AdviceCard />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(homeStyles(theme))(Home)
