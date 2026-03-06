import { useState } from 'react'
import RepetitionExercise from './components/RepetitionExercise'
import DurationExercise from './components/DurationExercise'
import ExerciseLaps from './components/Exerciselaps';


const exercises = [
  { name: 'Push Ups', type: 'repetition' },
  { name: 'Sit Ups', type: 'repetition' },
  { name: 'Plank', type: 'duration' },
  { name: 'Run', type: 'laps' },
]

function App() {
  const [current, setCurrent] = useState(null)

  function goBackToMainMenu() {
    if (current !== null) {
      setCurrent(null)
    }
  }
  // If no exercise selected, it'll stay in the main menu
  if (!current) {
    return (
      <div>
        <h1>Exercise Tracker</h1>
        {exercises.map((ex) => (
          <button key={ex.name} onClick={() => setCurrent(ex)}>
            {ex.name}
          </button>
        ))}
      </div>
    )
  }

  // Once selected, show the right component based on type of exercise
  return (
    <div>
      {current.type === 'repetition'
        ? <RepetitionExercise name={current.name} />
        : <DurationExercise name={current.name} />
      }
      {current !== null && <button onClick={goBackToMainMenu}>Back to Main Menu</button>}
      {current.type === 'laps' && <ExerciseLaps name={current.name} />}
    </div>
  )
}

export default App