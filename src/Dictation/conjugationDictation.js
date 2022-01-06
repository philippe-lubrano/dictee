import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import play from '../resources/play.png'


export const UseFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

  return [ htmlElRef,  setFocus ]
}

const ConjugationDictation = ({ textAndIllustrations, belt, responses }) => {
  const [iteration, setIteration] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [ correcting, setCorrecting ] = useState(false)
  const [ response, setResponse ] = useState(undefined)
  const [ inputRef, setInputRef ] = UseFocus()

  useEffect(() => {
    const source = document.getElementById('audioSource')
    source.src = textAndIllustrations[iteration].audio
    const audio = document.getElementById('audio')
    audio.load()
  }, [])

  useEffect(() => {
    const source = document.getElementById('audioSource')
    source.src = textAndIllustrations[iteration].audio
    const audio = document.getElementById('audio')
    audio.load()
    setPlaying(false)
    setInputRef()
  }, [iteration])

  const handleSubmit = () => {
    if (correcting) {
      setCorrecting(false)
      const nextIteration = iteration + 1
      setIteration(nextIteration)
    } else {
      setCorrecting(true)
      const responses = []
      const studentResponse = document.querySelectorAll('.reponse')
      studentResponse.forEach(r => responses.push(r.value))
      setResponse(responses)
    }
  }

  const playAudio = () => {
    const audio = document.getElementById('audio')
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  const correction = (answer, correctAnswer) => {
    const splittedAnswer = answer.replace( /\s+/g, ' ' ).trim().split(' ')
    const splittedCorrectAnswer = correctAnswer.replace( /\s+/g, ' ' ).trim().split(' ')
    let answerCorrection = '<div>'

    splittedAnswer.forEach((a, index) => {
      if (!splittedCorrectAnswer[index] || a.length !== splittedCorrectAnswer[index].length) {
        answerCorrection += `<span class="incomplete">${a}</span>`
      } else {
        [...a].forEach((lettre, i) => {
          if (lettre === splittedCorrectAnswer[index][i]) {
            answerCorrection += `${lettre}`
          } else {
            answerCorrection += `<span class="incorrect">${lettre}</span>`
          }
        })
      }
      answerCorrection += ' '
    })
    answerCorrection += '</div>'
    return answerCorrection
  }

  return (
    <>
      <audio id="audio" controls>
        <source id="audioSource" src="" type="audio/aac" />
      </audio>
      <div className={`global_dictation${playing ? ' playing' : ''}`} onClick={() => playAudio()}>
        {textAndIllustrations[iteration].text && <div className={`text ${belt}`}>{textAndIllustrations[iteration].text}</div>}
        {!playing && <img className="play_button" src={play} />}
      </div>
      {!correcting &&
        <div className="columns">
          <div className="lines imparfait">
            <div className="title">Imparfait</div>
            <div className="conjugation">Je <input className="reponse" ref={inputRef} type="text" /></div>
            <div className="conjugation">Tu <input className="reponse" type="text" /></div>
            <div className="conjugation">Elle / Il <input className="reponse" type="text" /></div>
            <div className="conjugation">Nous <input className="reponse" type="text" /></div>
            <div className="conjugation">Vous <input className="reponse" type="text" /></div>
            <div className="conjugation">Ils / Elles <input className="reponse" type="text" /></div>
          </div>
          <div className="lines present">
            <div className="title">Présent</div>
             <div className="conjugation">Je <input className="reponse" type="text" /></div>
             <div className="conjugation">Tu <input className="reponse" type="text" /></div>
             <div className="conjugation">Elle / Il <input className="reponse" type="text" /></div>
             <div className="conjugation">Nous <input className="reponse" type="text" /></div>
             <div className="conjugation">Vous <input className="reponse" type="text" /></div>
             <div className="conjugation">Ils / Elles <input className="reponse" type="text" /></div>
          </div>
          <div className="lines futur">
            <div className="title">Futur de l'indicatif</div>
             <div className="conjugation">Je <input className="reponse" type="text" /></div>
             <div className="conjugation">Tu <input className="reponse" type="text" /></div>
             <div className="conjugation">Elle / Il <input className="reponse" type="text" /></div>
             <div className="conjugation">Nous <input className="reponse" type="text" /></div>
             <div className="conjugation">Vous <input className="reponse" type="text" /></div>
             <div className="conjugation">Ils / Elles <input className="reponse" type="text" /></div>
          </div>
        </div>
      }
      {correcting &&
      <>
        <div className="title answer" dangerouslySetInnerHTML={{ __html: correction(response, responses[iteration]) }} />
        <div className="title green answer">{responses[iteration]}</div>
      </>
      }
      {(!correcting || (correcting && iteration < textAndIllustrations.length - 1)) && <a className="submit" onClick={() => handleSubmit()}>{correcting ? 'Dictée suivante' : 'Correction'}</a>}
      {correcting && iteration === textAndIllustrations.length - 1 && <Link className="submit" to={`/ceinture-${belt}`}>Retour aux Niveaux</Link>}
    </>
  )
}

export default ConjugationDictation
