import { makeStyles } from '@material-ui/core/styles'

const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  logo: {
    marginRight: theme.spacing(2)
  },

  space: {
    flexGrow: 1
  },

  menuItem: {
    color: '#fff',
    border: 0,
    marginRight: theme.spacing(2)
  }
}))

export default headerStyles
