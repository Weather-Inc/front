import { AppBar, Typography } from '@material-ui/core'
import footerStyles from 'assets/styles/footer/footer'

const footer = () => {
  const classes = footerStyles()

  return (
    <AppBar position="fixed" className={classes.root} color='primary'>
      <Typography>
        AbundeSEG Task
      </Typography>
    </AppBar>
  );
}

export default footer;
