import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'

import adviceCardStyles from 'assets/styles/advice-card/adviceCard'

import theme from 'theme'

const adviceCard = props => {
  const classes = adviceCardStyles(theme)

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography>
            {props.title}
          </Typography>
        }
      />
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography>
            {props.content}
          </Typography>
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
