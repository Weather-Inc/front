import { Card, CardContent, Chip, CircularProgress, Container, Grid } from '@material-ui/core'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import moment from 'moment'

import forecastChartStyles from 'assets/styles/forecast-chart/forecastChart'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const formattedTime = (date) => moment(date).format('HH:mm')

const formattedDate = (date) => moment(date).format('dddd, MMMM Do YYYY')

const forecastChart = props => {
  const classes = forecastChartStyles()
  const forecasts = props.forecasts

  const chartData = []
  let date = formattedDate()

  if (forecasts.length) {
    const forecast = forecasts[0]
    date = formattedDate(forecast.date)

    forecast.forecast.forEach(f => {
      chartData.push({
        label: formattedTime(f.startTime),
        value: f.temperatures.value.toFixed(1)
      })
    })
  }

  const chartConfigs = {
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: `Weather Forecast for ${date}`,
        xAxisName: 'Time of Day',
        yAxisName: 'Temperature (°C)',
        numberSuffix: '',
        theme: 'fusion'
      },
      data: chartData
    }
  }

  const handleTodayClicked = () => {
    props.onTodayClicked()
  }

  const handleRangeClicked = () => {
    props.onRangeClicked()
  }

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={9}>
          <Grid container justify="space-evenly" spacing={3}>
            <Grid item xs={6}>
              <Chip
                label="Today"
                clickable
                color="secondary"
                onClick={handleTodayClicked}
              />
            </Grid>

            <Grid item xs={6}>
              <Chip
                label="Next 15 days"
                clickable
                color="primary"
                onClick={handleRangeClicked}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {props.loading
            ? <CircularProgress />
            : <ReactFC {...chartConfigs} />
          }
        </CardContent>
      </Card>
    </Container>
  )
}

export default forecastChart
