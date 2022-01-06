import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.scss'
import Home from './Home'
import WhiteBelt from './Belts/whiteBelt'
import Level from './Level'
import YellowBelt from './Belts/yellowBelt'
import OrangeBelt from './Belts/orangeBelt'
import GreenBelt from './Belts/greenBelt'


function App() {
  return (
    <div className="page">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/ceinture-blanche" component={WhiteBelt}/>
          <Route exact path="/ceinture-jaune" component={YellowBelt}/>
          <Route exact path="/ceinture-orange" component={OrangeBelt}/>
          <Route exact path="/ceinture-verte" component={GreenBelt}/>
          <Route exact name="/ceinture-blanche/niveau" component={Level}/>
          <Route exact name="/ceinture-jaune/niveau" component={Level}/>
          <Route exact name="/ceinture-orange/niveau" component={Level}/>
          <Route exact name="/ceinture-verte/niveau" component={Level}/>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
