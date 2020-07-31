import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GoodCheap from './views/GoodCheap'
import GoodIndicators from './views/GoodIndicators'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/good-indicators">
            <GoodIndicators />
          </Route>
          <Route path="/good-cheap">
            <GoodCheap />
          </Route>
          <Route path="/top-dividend"></Route>
          <Route path="/cheap"></Route>
          <Route path="/ibov"></Route>
          <Route path="/sector-ranking"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
