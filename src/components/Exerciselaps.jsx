// ExerciseLaps.jsx

import React, { useState, useEffect, useRef } from 'react';

function ExerciseLaps() {
    const [laps, setLaps] = useState([]);
    const [lapTime, setLapTime] = useState(0); // Initialize at 0 for easier math
    const [timerRunning, setIsTimerRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (timerRunning) {
            intervalRef.current = setInterval(() => {
                // Using the functional update to ensure we always have the freshest state
                setLapTime(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [timerRunning]);

    const startTimer = () => setIsTimerRunning(true);

    const stopTimer = () => {
        setIsTimerRunning(false);
        setLapTime(0);
    };

    const recordLap = () => {
        // Spread the current laps and add the new one
        setLaps([...laps, lapTime]);
        setLapTime(0); // Reset for the next lap
    };

    return (
        <div className="exercise-laps" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Lap Times</h2>

            <div style={{ fontSize: '2rem', margin: '10px' }}>
                Current: {lapTime}s
            </div>

            <button onClick={startTimer} disabled={timerRunning}>Start</button>
            <button onClick={recordLap} disabled={!timerRunning}>Lap</button>
            <button onClick={stopTimer}>Reset</button>

            <div style={{ marginTop: '20px' }}>
                {laps.map((lap, index) => (
                    <div key={index}>Lap {index + 1}: {lap} seconds</div>
                ))}
            </div>
        </div>
    );
}

export default ExerciseLaps;
