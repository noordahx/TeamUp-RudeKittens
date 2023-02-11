import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'
import { HomePage } from './api/HomePage'
import { AboutPage } from './api/AboutPage'
import { ContactPage } from './api/ContactPage'

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
