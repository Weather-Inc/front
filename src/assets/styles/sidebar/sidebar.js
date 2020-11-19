import { makeStyles } from '@material-ui/core/styles'

const sidebarStyles = makeStyles(theme => ({
  root: {
    padding: '10px'
  },

  cardTitle: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  }
}))

export default sidebarStyles

