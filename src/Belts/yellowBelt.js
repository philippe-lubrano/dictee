import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header'


const YellowBelt = props => {
  return (
    <>
      <Header />
      <div className="title">Ceinture Blanche : maîtriser les accords dans le groupe nominal</div>
      <div className="buttons">
        <Link to={{ pathname: "/ceinture-jaune/niveau", state:{ level: 1.1, belt: 'yellow' } }}>Niveau 1.1</Link>
        <Link to={{ pathname: "/ceinture-jaune/niveau", state:{ level: 1.2, belt: 'yellow' } }}>Niveau 1.2</Link>
        <Link to={{ pathname: "/ceinture-jaune/niveau", state:{ level: 2.1, belt: 'yellow' } }}>Niveau 2.1</Link>
        <Link to={{ pathname: "/ceinture-jaune/niveau", state:{ level: 2.2, belt: 'yellow' } }}>Niveau 2.2</Link>
        <Link to={{ pathname: "/ceinture-jaune/niveau", state:{ level: 3.1, belt: 'yellow' } }}>Niveau 3.1</Link>
        <Link to={{ pathname: "/ceinture-jaune/niveau", state:{ level: 3.2, belt: 'yellow' } }}>Niveau 3.2</Link>
      </div>
    </>
  )
}

export default YellowBelt