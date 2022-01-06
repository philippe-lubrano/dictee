import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = props => {
    return (
      <>
        <Header />
        <div className="buttons">
          <Link to="/ceinture-blanche" className="white-belt"><div className="tata" />Ceinture blanche</Link>
          <Link to="/ceinture-jaune" className="yellow-belt">Ceinture jaune</Link>
          <Link to="/ceinture-orange" className="orange-belt">Ceinture orange</Link>
          {/*<Link to="/ceinture-verte" className="green-belt">Ceinture verte</Link>*/}
        </div>
      </>
    )
}

export default Home