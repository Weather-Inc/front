import { Container, Typography } from '@material-ui/core'

import footerStyles from 'assets/styles/footer/footer'

import theme from 'theme'

const footer = () => {
  const classes = footerStyles(theme)

  return (
    <Container className={classes.root}>
      <Typography>
        AbundeSEG Task
      </Typography>
    </Container>
  );
}

export default footer;
