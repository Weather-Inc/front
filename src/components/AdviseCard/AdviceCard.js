import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import adviceCardStyles from 'assets/styles/advice-card/adviceCard'

const adviceCard = props => {
  const classes = adviceCardStyles()

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          Card
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          color="primary"
          endIcon={<ArrowForward />}
          variant="contained"
        >
          Know More
        </Button>
      </CardActions>
    </Card>
  )
}

export default adviceCard
