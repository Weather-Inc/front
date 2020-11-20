import { makeStyles } from '@material-ui/core/styles'

const footerStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    maxWidth: '100%',
    padding: '20px',
    textAlign: 'center'
  }
}))

export default footerStyles
