import NavbarContextProvider from './context/NavbarContext';
import './assets/css/style.css';
import 'normalize.css/normalize.css'
import {BrowserRouter} from 'react-router-dom'
import Router from './router/Router';

function App() {

  return (
      <NavbarContextProvider>
        <div className="App">
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
//layout && lazy loading