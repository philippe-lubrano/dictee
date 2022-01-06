import React from 'react'
import GlobalDictation from './globalDictation'

import une from '../resources/audios/blanche1une.aac'
import papa from '../resources/audios/blanche 1 papa.aac'
import tarte from '../resources/audios/blanche 1 tarte.aac'
import preparer from '../resources/audios/blanche 1 préparer.aac'
import dicteeBlanche1 from '../resources/audios/blanche 1 dictée.aac'

import ilYA from '../resources/audios/blanche 2 il y a.aac'
import boue from '../resources/audios/blanche 2 boue.aac'
import joue from '../resources/audios/blanche 2 joue.aac'
import poupee from '../resources/audios/blanche 2 poupée.aac'
import dicteeBlanche2 from '../resources/audios/blanche 2 dictée.aac'

import dans from '../resources/audios/blanche 3 dans.aac'
import chat from '../resources/audios/blanche 3 chat.aac'
import chahuter from '../resources/audios/blanche 3 chahuter.aac'
import chenil from '../resources/audios/blanche 3 chenil.aac'
import dicteeBlanche3 from '../resources/audios/blanche 3 dictée.aac'

import papaImg from '../resources/images/papa.png'
import tarteImg from '../resources/images/tarte.png'
import boueImg from '../resources/images/boue.png'
import joueImg from '../resources/images/joue.png'
import poupeeImg from '../resources/images/poupée.png'
import chatImg from '../resources/images/chat.png'
import chenilImg from '../resources/images/chenil.png'


const WhiteBeltDictation = ({ level }) => {
  const getIllustrationPerLevel = () => {
    switch (level) {
      case 1.1:
        return (
          <>
            <div className="title">Ceinture Blanche Niveau 1.1 : maîtriser le son [a]</div>
            <GlobalDictation belt="blanche" textAndIllustrations={[{ text: 'Mot outil', audio: une },
              { illustration: papaImg, audio: papa },
              { illustration: tarteImg, audio: tarte },
              { text: 'Verbe', audio: preparer }]}
              responses={['une', 'papa', 'tarte', 'préparer']}
            />
          </>
        )
      case 1.2:
        return (
          <>
            <div className="title">Ceinture Blanche Niveau 1.2 : maîtriser le son [a]</div>
            <GlobalDictation belt="blanche" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeBlanche1 }]} responses={['Papa prépare une tarte.']} />
          </>
        )
      case 2.1:
        return (
          <>
            <div className="title">Ceinture Blanche Niveau 2.1 : maîtriser le son [ou]</div>
            <GlobalDictation belt="blanche" textAndIllustrations={[{ text: 'Mot outil', audio: ilYA },
              { illustration: boueImg, audio: boue },
              { illustration: joueImg, audio: joue },
              { illustration: poupeeImg, audio: poupee }]}
              responses={['il y a', 'boue', 'joue', 'poupée']}
            />
          </>
        )
      case 2.2:
        return (
          <>
            <div className="title">Ceinture Blanche Niveau 2.2 : maîtriser le son [ou]</div>
            <GlobalDictation belt="blanche" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeBlanche2 }]} responses={['Il y a de la boue sur la joue de ma poupée.']} />
          </>
        )
      case 3.1:
        return (
          <>
            <div className="title">Ceinture Blanche Niveau 3.1 : maîtriser le son [ch]</div>
            <GlobalDictation belt="blanche" textAndIllustrations={[{ text: 'Mot outil', audio: dans },
              { illustration: chatImg, audio: chat },
              { text: 'Verbe', audio: chahuter },
              { illustration: chenilImg, audio: chenil }]}
              responses={['dans', 'chat', 'chahuter', 'chenil']}
            />
          </>
        )
      case 3.2:
        return (
          <>
            <div className="title">Ceinture Blanche Niveau 3.2 : maîtriser le son [ch]</div>
            <GlobalDictation belt="blanche" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeBlanche3}]} responses={['Le chat chahute dans le chenil.']} />
          </>
        )
    }
  }

  return getIllustrationPerLevel()
}

export default WhiteBeltDictation