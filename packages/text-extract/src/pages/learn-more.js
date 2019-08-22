/** @jsx jsx */
import { jsx } from 'theme-ui'
import Footer from '../components/footer'

const Container = props =>
  <div
    {...props}
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 3,
    }}
  />
export default props =>
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'base',
      color: 'textDark'
    }}>
    <header
      sx={{
        width: '100%',
      }}>
      <Container>
        &#60;&#45;
      </Container>
    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}>
      <Container>
        {props.children}
      </Container>
    </main>
    <footer
      sx={{
        width: '100%',
      }}>
      <Container>
        <Footer/>
      </Container>
    </footer>
  </div>