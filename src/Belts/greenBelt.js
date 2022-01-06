import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header'


const FushiaBelt = props => {
  return (
    <>
      <Header />
      <div className="title">Ceinture Verte : marquer l’accord entre le sujet et le verbe en -ER</div>
      <div className="buttons">
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 1.1, belt: 'green' } }}>Niveau 1.1</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 1.2, belt: 'green' } }}>Niveau 1.2</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 1.3, belt: 'green' } }}>Niveau 1.3</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 2.1, belt: 'green' } }}>Niveau 2.1</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 2.2, belt: 'green' } }}>Niveau 2.2</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 2.3, belt: 'green' } }}>Niveau 2.3</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 3.1, belt: 'green' } }}>Niveau 3.1</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 3.2, belt: 'green' } }}>Niveau 3.2</Link>
        <Link to={{ pathname: "/ceinture-verte/niveau", state:{ level: 3.3, belt: 'green' } }}>Niveau 3.3</Link>
      </div>
    </>
  )
}

export default FushiaBelt