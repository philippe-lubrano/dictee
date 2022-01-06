import React from 'react'
import GlobalDictation from './globalDictation'

import dimancheImg from '../resources/images/dimanche.png'
import champImg from '../resources/images/champ.png'
import camionImg from '../resources/images/camion.png'
import pompierImg from '../resources/images/pompier.png'
import ballonImg from '../resources/images/ballon.png'
import impossibleImg from '../resources/images/impossible.png'
import timbreImg from '../resources/images/timbre.png'
import introuvableImg from '../resources/images/introuvable.png'

import avec from '../resources/audios/orange 1 avec.aac'
import dimanche from '../resources/audios/orange 1 dimanche.aac'
import champ from '../resources/audios/orange 1 champ.aac'
import manger from '../resources/audios/orange 1 manger.aac'
import dicteeOrange1 from '../resources/audios/orange 1 dictée.aac'
import fond from '../resources/audios/orange 2 fond.aac'
import camion from '../resources/audios/orange 2 camion.aac'
import pompier from '../resources/audios/orange 2 pompier.aac'
import ballon from '../resources/audios/orange 2 ballon.aac'
import dicteeOrange2 from '../resources/audios/orange 2 dictée.aac'
import cest from '../resources/audios/orange 3 cest.aac'
import impossible from '../resources/audios/orange 3 impossible.aac'
import timbre from '../resources/audios/orange 3 timbre.aac'
import introuvable from '../resources/audios/orange 3 introuvable.aac'
import dicteeOrange3 from '../resources/audios/orange 3 dictée.aac'


const OrangeBeltDictation = ({ level }) => {
  const getIllustrationPerLevel = () => {
    switch (level) {
      case 1.1:
        return (
          <>
            <div className="title">Ceinture Orange Niveau 1.1 : maîtriser le son [an]</div>
            <GlobalDictation belt="orange" textAndIllustrations={[{ text: 'Mot outil', audio: avec },
              { illustration: dimancheImg, audio: dimanche },
              { illustration: champImg, audio: champ },
              { text: 'Verbe', audio: manger }]}
              responses={['avec', 'dimanche', 'champ', 'manger']}
            />
          </>
        )
      case 1.2:
        return (
          <>
            <div className="title">Ceinture Orange Niveau 1.2 : maîtriser le son [an]</div>
            <GlobalDictation belt="orange" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeOrange1 }]} responses={['Dimanche, je mangerai dans le champ avec maman.']} />
          </>
        )
      case 2.1:
        return (
          <>
            <div className="title">Ceinture Orange Niveau 2.1 : maîtriser le son [on]</div>
            <GlobalDictation belt="orange" textAndIllustrations={[{ text: 'Mot outil', audio: fond },
              { illustration: camionImg, audio: camion },
              { illustration: pompierImg, audio: pompier },
              { illustration: ballonImg, audio: ballon }]}
              responses={['fond', 'camion', 'pompier', 'ballon']}
            />
          </>
        )
      case 2.2:
        return (
          <>
            <div className="title">Ceinture Orange Niveau 2.2 : maîtriser le son [on]</div>
            <GlobalDictation belt="orange" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeOrange2 }]} responses={['Le camion de pompier roule à fond les ballons.']} />
          </>
        )
      case 3.1:
        return (
          <>
            <div className="title">Ceinture Orange Niveau 3.1 : maîtriser le son [in]</div>
            <GlobalDictation belt="orange" textAndIllustrations={[{ text: 'Mot outil', audio: cest },
              { illustration: impossibleImg, audio: impossible },
              { illustration: timbreImg, audio: timbre },
              { illustration: introuvableImg, audio: introuvable }]}
              responses={['c’est', 'impossible', 'timbre', 'introuvable']}
            />
          </>
        )
      case 3.2:
        return (
          <>
            <div className="title">Ceinture Orange Niveau 3.2 : maîtriser le son [in]</div>
            <GlobalDictation belt="orange" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeOrange3 }]} responses={['C’est impossible ! Ce timbre est introuvable !']} />
          </>
        )
    }
  }

  return getIllustrationPerLevel()
}

export default OrangeBeltDictation