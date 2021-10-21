import NavbarContextProvider from './context/NavbarContext';
import './assets/css/style.css';
import 'normalize.css/normalize.css'
import {BrowserRouter} from 'react-router-dom'
import Router from './router/Router';
import {Helmet} from 'react-helmet';

function App() {

  return (
      <NavbarContextProvider>
        <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio</title>
        </Helmet>
          <AppContainer />
        </div>
      </NavbarContextProvider>
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