import { Container, Toolbar } from '@material-ui/core'
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'
import Footer from 'components/Footer/Footer'

const  app = () => {
  return (
    <Container>
      <Header />

      <Toolbar />

      <Home />

      <Footer />
    </Container>
  );
}

export default app;
