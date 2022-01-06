import React from 'react'

import GlobalDictation from './globalDictation'
import ConjugationDictation from './conjugationDictation'


const GreenBeltDictation = ({ level }) => {
 const getIllustrationPerLevel = () => {
  switch (level) {
   case 1.1:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 1.1 : maîtriser le son [oin]</div>
       <GlobalDictation belt="verte" textAndIllustrations={[{ text: 'Mot outil', audio: '/audios/verte 1 tous.aac' },
        { illustration: 'maman', audio: '/audios/verte 1 maman.aac' },
        { illustration: 'mardi', audio: '/audios/verte 1 mardi.aac' },
        { text: 'Verbe', audio: '/audios/verte 1 marcher.aac' }]}
                        responses={['tous', 'maman', 'mardi', 'marcher']}
       />
      </>
    )
   case 1.2:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 1.2 : maîtriser le son [oin]</div>
       <GlobalDictation belt="verte" textAndIllustrations={[{ text: 'La phrase dictée', audio: '/audios/verte 1 dictée.aac' }]} responses={['Ma maman marche tous les mardis.']} />
      </>
    )
   case 1.3:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 1.2 : maîtriser le son [oin]</div>
       <ConjugationDictation belt="verte" textAndIllustrations={[{ text: 'Conjuguer le verbe chanter', audio: '/audios/verte 1 conjugaison.aac' }]} responses={['chantais', 'chantais', 'chantait', 'chantions', 'chantiez', 'chantaient', 'chante', 'chantes', 'chante', 'chantons', 'chantez', 'chantent', 'chanterai', 'chanteras', 'chantera', 'chanterons', 'chanterez', 'chanteront']} />
      </>
    )
   case 2.1:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 2.1 : maîtriser le son [au]</div>
       <GlobalDictation belt="verte" textAndIllustrations={[{ text: 'Mot outil', audio: '/audios/verte 2 hier.aac' },
        { illustration: 'carte', audio: '/audios/verte 2 carte.aac' },
        { illustration: 'case', audio: '/audios/verte 2 case.aac' },
        { text: 'Verbe', audio: '/audios/verte 2 cacher.aac' }]}
                        responses={['hier', 'carte', 'case', 'cacher']}
       />
      </>
    )
   case 2.2:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 2.2 : maîtriser le son [au]</div>
       <GlobalDictation belt="verte" textAndIllustrations={[{ text: 'La phrase dictée', audio: '/audios/verte 2 dictée.aac' }]} responses={['Hier, elle a caché les cartes dans la case.']} />
      </>
    )
   case 2.3:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 2.2 : maîtriser le son [au]</div>
       <ConjugationDictation belt="verte" textAndIllustrations={[{ text: 'La phrase dictée', audio: '/audios/verte 2 dictée.aac' }]} responses={['Hier, elle a caché les cartes dans la case.']} />
      </>
    )
   case 3.1:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 3.1 : maîtriser le son [é]</div>
       <GlobalDictation belt="verte" textAndIllustrations={[{ illustration: 'alligator', audio: '/audios/verte 3 alligator.aac' },
        { illustration: 'grotte', audio: '/audios/verte 3 grotte.aac' },
        { text: 'Verbe', audio: '/audios/verte 3 garder.aac' },
        { illustration: 'grand', audio: '/audios/verte 3 grand.aac' }]}
                        responses={['alligator', 'grotte', 'garder', 'grand']}
       />
      </>
    )
   case 3.2:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 3.2 : maîtriser le son [é]</div>
       <GlobalDictation belt="verte" textAndIllustrations={[{ text: 'La phrase dictée', audio: '/audios/verte 3 dictée.aac' }]} responses={["L'alligator garde la grande grotte grise."]} />
      </>
    )
   case 3.3:
    return (
      <>
       <div className="title">Ceinture Verte Niveau 3.2 : maîtriser le son [é]</div>
       <ConjugationDictation belt="verte" textAndIllustrations={[{ text: 'La phrase dictée', audio: '/audios/verte 3 dictée.aac' }]} responses={["L'alligator garde la grande grotte grise."]} />
      </>
    )
  }
 }

 return getIllustrationPerLevel()
}

export default GreenBeltDictation