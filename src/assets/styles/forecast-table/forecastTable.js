import { makeStyles } from '@material-ui/core/styles'

const forecastTableStyles = makeStyles(theme => ({
  head: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }
}))

export default forecastTableStyles
