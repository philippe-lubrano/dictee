import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../Header'
import WhiteBeltDictation from '../Dictation/whiteBeltDictation'
import YellowBeltDictation from '../Dictation/yellowBeltDictation'
import OrangeBeltDictation from '../Dictation/orangeBeltDictation'
import GreenBeltDictation from '../Dictation/greenBeltDictation'


const Level = props => {
  const location = useLocation()
  const { level, belt } = location.state

  return (
    <>
      <Header />
      {belt === 'white' && <WhiteBeltDictation {...{ level }} />}
      {belt === 'yellow' && <YellowBeltDictation {...{ level }} />}
      {belt === 'orange' && <OrangeBeltDictation {...{ level }} />}
      {belt === 'green' && <GreenBeltDictation {...{ level }} />}
    </>
  )
}

export default Level