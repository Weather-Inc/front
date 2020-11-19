import { Card, CardContent, Chip, CircularProgress, Container, Grid } from '@material-ui/core'
import forecastChartStyles from 'assets/styles/forecast-chart/forecastChart'

const forecastChart = props => {
  const classes = forecastChartStyles()

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
          {props.loading && <CircularProgress />}
        </CardContent>
      </Card>
    </Container>
  )
}

export default forecastChart
