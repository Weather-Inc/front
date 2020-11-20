import { makeStyles } from '@material-ui/core/styles'

const adviceCardStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  cardContent: {
    textAlign: 'justify'
  }
}))

export default adviceCardStyles
