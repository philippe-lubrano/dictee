import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import home from "./resources/home.png"
import back from "./resources/back.png"

const Header = props => {
  const history = useHistory()

  return (
    <>
      <div className="header">
        <span className="back" onClick={() => history.goBack()}><img src={back} /></span>
        <Link className="home" to="/"><img src={home} /></Link>
      </div>
      <div className="title">Progression dictée CP/CE1</div>
    </>
  )
}

export default Header