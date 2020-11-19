import { Button, Card, CardActionArea, CardActions, CardContent, Container, Divider, Typography } from '@material-ui/core'
import { ArrowForwardIos, FlagOutlined, LocationOnOutlined } from '@material-ui/icons'
import sidebarStyles from 'assets/styles/sidebar/sidebar'
import theme from 'theme'

const sidebar = () => {
  const classes = sidebarStyles(theme)

  const countryClicked = () => {
    console.log('Country clicked')
  }

  const regionClicked = () => {
    console.log('Region clicked')
  }

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardTitle}>
            <Typography>
              DASHBOARD ADMIN
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            endIcon={<ArrowForwardIos />}
            fullWidth
            onClick={countryClicked}
            startIcon={<FlagOutlined color='primary' />}
          >
            Select Your Country
          </Button>
        </CardActions>

        <Divider />

        <CardActions>
          <Button
            endIcon={<ArrowForwardIos />}
            fullWidth
            onClick={regionClicked}
            startIcon={<LocationOnOutlined color='primary' />}
          >
            Select Your Region
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default sidebar
