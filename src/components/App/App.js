import { Fragment } from 'react'
import { Container, Toolbar } from '@material-ui/core'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import Home from 'pages/Home/Home'

const  app = () => {
  return (
    <Fragment>
      <Container>
        <Header />

        <Toolbar />

        <Home />
      </Container>

      <Footer />
    </Fragment>
  );
}

export default app;
