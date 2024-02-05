import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {

  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState(`Let's see who wins`)
  const [gameOver, setGameOver] = useState(false)

  const choices = ['rock', 'paper', 'scissors'];

  const handleOnClick = (choice) => {
    setUserChoice(choice)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User got the point')


        if (updatedUserPoints === 5) {
          setGameOver(true)
          setResult('User wins..🎉')
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer got the point')

        if (updatedComputerPoints === 5) {
          setGameOver(true)
          setResult('Computer wins..☹️')
        }
      }

      if (comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one got a point')
      }
    }
  }, [userChoice, computerChoice])

  return (
    <div className='Home mt-5'>
      <h3 className='heading'>Rock-Paper-Scissors</h3>
      <div className="score">
        <h4 style={{ color: "green" }}>User Points: {userPoints}</h4>
        <h4 className='text-danger'>Computer Points: {computerPoints}</h4>
      </div>
      <div className="choice">
        <div className="choice-user">
          <img className='user-hand' src={`../images/${userChoice}.png`} alt="user image" />
        </div>

        <div className="choice-computer">
          <img className='computer-hand' src={`../images/${computerChoice}.png`} alt="comp image" />
        </div>

      </div>

      <div className="button-div">
        {choices.map((choice, index) =>
          <button className='button btn btn-primary' key={index} onClick={() => handleOnClick(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className="result">
        <h4 >Turn Result: {turnResult}</h4>
        <h4 className='text-success'>Final Result: {result}  </h4>
      </div>

      <div className="button-div">
        {gameOver &&
          <button className='button btn btn-danger' onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default Home