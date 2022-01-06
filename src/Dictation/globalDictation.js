import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import play from '../resources/play.png'


export const UseFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

  return [ htmlElRef,  setFocus ]
}

const GlobalDictation = ({ textAndIllustrations, belt, responses }) => {
  const [iteration, setIteration] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [ correcting, setCorrecting ] = useState(false)
  const [ response, setResponse ] = useState(false)
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
      const studentResponse = document.querySelector('.response').value
      setResponse(studentResponse)
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
        {textAndIllustrations[iteration].illustration && <img className="illustration" src={textAndIllustrations[iteration].illustration} />}
        {textAndIllustrations[iteration].text && <div className={`text ${belt}`}>{textAndIllustrations[iteration].text}</div>}
        {!playing && <img className="play_button" src={play} />}
      </div>
      {!correcting &&
        <textarea ref={inputRef}
                  type="text"
                  className="response"
        />
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

export default GlobalDictation
