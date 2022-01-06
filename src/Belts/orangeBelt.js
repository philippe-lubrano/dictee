import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header'


const OrangeBelt = props => {
  return (
    <>
      <Header />
      <div className="title">Ceinture Orange : maîtriser la règle du m devant m, b, p</div>
      <div className="buttons">
        <Link to={{ pathname: "/ceinture-orange/niveau", state:{ level: 1.1, belt: 'orange' } }}>Niveau 1.1</Link>
        <Link to={{ pathname: "/ceinture-orange/niveau", state:{ level: 1.2, belt: 'orange' } }}>Niveau 1.2</Link>
        <Link to={{ pathname: "/ceinture-orange/niveau", state:{ level: 2.1, belt: 'orange' } }}>Niveau 2.1</Link>
        <Link to={{ pathname: "/ceinture-orange/niveau", state:{ level: 2.2, belt: 'orange' } }}>Niveau 2.2</Link>
        <Link to={{ pathname: "/ceinture-orange/niveau", state:{ level: 3.1, belt: 'orange' } }}>Niveau 3.1</Link>
        <Link to={{ pathname: "/ceinture-orange/niveau", state:{ level: 3.2, belt: 'orange' } }}>Niveau 3.2</Link>
      </div>
    </>
  )
}

export default OrangeBelt