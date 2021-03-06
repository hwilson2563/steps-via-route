import React from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NameForm from './components/prompt/NameForm'
const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div className='rightContentContainer'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/prompt' component={NameForm} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
