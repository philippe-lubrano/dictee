import React from 'react'
import GlobalDictation from './globalDictation'

import mamanImg from '../resources/images/maman.png'
import mardiImg from '../resources/images/mardi.png'
import carteImg from '../resources/images/carte.png'
import caseImg from '../resources/images/case.png'
import alligatorImg from '../resources/images/alligator.png'
import grotteImg from '../resources/images/grotte.png'
import grandImg from '../resources/images/grand.png'

import tous from '../resources/audios/jaune 1 tous.aac'
import maman from '../resources/audios/jaune 1 maman.aac'
import mardi from '../resources/audios/jaune 1 mardi.aac'
import marcher from '../resources/audios/jaune 1 marcher.aac'
import dicteeJaune1 from '../resources/audios/jaune 1 dictée.aac'

import hier from '../resources/audios/jaune 2 hier.aac'
import carte from '../resources/audios/jaune 2 carte.aac'
import caseJaune from '../resources/audios/jaune 2 case.aac'
import cacher from '../resources/audios/jaune 2 cacher.aac'
import dicteeJaune2 from '../resources/audios/jaune 2 dictée.aac'

import alligator from '../resources/audios/jaune 3 alligator.aac'
import grotte from '../resources/audios/jaune 3 grotte.aac'
import garder from '../resources/audios/jaune 3 garder.aac'
import grand from '../resources/audios/jaune 3 grand.aac'
import dicteeJaune3 from '../resources/audios/jaune 3 dictée.aac'


const YellowBeltDictation = ({ level }) => {
  const getIllustrationPerLevel = () => {
    switch (level) {
      case 1.1:
        return (
          <>
            <div className="title">Ceinture Jaune Niveau 1.1 : maîtriser le son [m]</div>
            <GlobalDictation belt="jaune" textAndIllustrations={[{ text: 'Mot outil', audio: tous },
              { illustration: mamanImg, audio: maman },
              { illustration: mardiImg, audio: mardi },
              { text: 'Verbe', audio: marcher }]}
                             responses={['tous', 'maman', 'mardi', 'marcher']}
            />
          </>
        )
      case 1.2:
        return (
          <>
            <div className="title">Ceinture Jaune Niveau 1.2 : maîtriser le son [m]</div>
            <GlobalDictation belt="jaune" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeJaune1 }]} responses={['Ma maman marche tous les mardis.']} />
          </>
        )
      case 2.1:
        return (
          <>
            <div className="title">Ceinture Jaune Niveau 2.1 : maîtriser le son [k]</div>
            <GlobalDictation belt="jaune" textAndIllustrations={[{ text: 'Mot outil', audio: hier },
              { illustration: carteImg, audio: carte },
              { illustration: caseImg, audio: caseJaune },
              { text: 'Verbe', audio: cacher }]}
                             responses={['hier', 'carte', 'case', 'cacher']}
            />
          </>
        )
      case 2.2:
        return (
          <>
            <div className="title">Ceinture Jaune Niveau 2.2 : maîtriser le son [k]</div>
            <GlobalDictation belt="jaune" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeJaune2 }]} responses={['Hier, elle a caché les cartes dans la case.']} />
          </>
        )
      case 3.1:
        return (
          <>
            <div className="title">Ceinture Jaune Niveau 3.1 : maîtriser le son [g]</div>
            <GlobalDictation belt="jaune" textAndIllustrations={[{ illustration: alligatorImg, audio: alligator },
              { illustration: grotteImg, audio: grotte },
              { text: 'Verbe', audio: garder },
              { illustration: grandImg, audio: grand }]}
                             responses={['alligator', 'grotte', 'garder', 'grand']}
            />
          </>
        )
      case 3.2:
        return (
          <>
            <div className="title">Ceinture Jaune Niveau 3.2 : maîtriser le son [g]</div>
            <GlobalDictation belt="jaune" textAndIllustrations={[{ text: 'La phrase dictée', audio: dicteeJaune3 }]} responses={["L'alligator garde la grande grotte grise."]} />
          </>
        )
    }
  }

  return getIllustrationPerLevel()
}

export default YellowBeltDictation