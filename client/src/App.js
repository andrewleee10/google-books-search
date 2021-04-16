import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
