import NavbarContextProvider from './context/NavbarContext';
import './assets/css/style.css';
import 'normalize.css/normalize.css'
import {BrowserRouter} from 'react-router-dom'
import Router from './router/Router';
import {Helmet} from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Portfolio Thomas Coelho Développeur web PHP et ReactJS" />
        <title>Portfolio</title>
      </Helmet>
    
      <NavbarContextProvider>
        <div className="App">
          <AppContainer />
        </div>
      </NavbarContextProvider>
    </>
  )
}

const AppContainer = () => {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  )
}

export default App