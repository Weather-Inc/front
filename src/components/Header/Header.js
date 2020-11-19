import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core'
import logo from 'assets/images/logo.svg'
import headerStyles from 'assets/styles/header/header'
import './Header.scss'

const header = () => {
  const classes = headerStyles()

  return (
    <AppBar color='primary' className="Header">
      <Toolbar>
        <IconButton edge="start" className={classes.logo} color="inherit">
          <img src={logo} className="Header-logo" alt="logo" />
        </IconButton>

        <div className={classes.space}></div>

        <Button variant="outlined" className={classes.menuItem}>
          AbundeSEG Task
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default header;
