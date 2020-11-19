import { Card, CardActionArea, CardContent, CircularProgress, Grid, Typography } from '@material-ui/core'

const weatherBox = props => {
  const { icon, title, value } = props.data

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Grid container justify="space-evenly" spacing={3}>
            <Grid item xs={6}>
              {props.loading
                ? <CircularProgress />
                : <Typography align="center" color="primary">{value}</Typography>
              }
            </Grid>

            <Grid item xs={6}>
              <Typography align="center">
                {icon}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography align="center" noWrap>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default weatherBox
