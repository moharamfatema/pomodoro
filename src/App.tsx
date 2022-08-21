import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Timer from './components/Timer'

function App() {
    const [breakTimer, setBreakTimer] = useState(5)
    const [session, setSession] = useState(25)

    const reset = () => {
        setBreakTimer(5)
        setSession(25)
    }

    return (
        <div className="App">
            <header className="header">
                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/7d4cdb/external-pomodoro-date-and-time-tanah-basah-glyph-tanah-basah.png" />
                <h1>Pomodoro</h1>
            </header>

            <div className="wrapper">
                <div className="timers">
                    <Timer
                        name="break"
                        displayName="Break"
                        value={breakTimer}
                        onValueChange={v => {
                            setBreakTimer(v)
                        }}
                    />
                    <Timer
                        name="session"
                        displayName="Session"
                        value={session}
                        onValueChange={v => {
                            setSession(v)
                        }}
                    />
                </div>

                <Display current="session" initial={session} />
                <button id="reset" type="button" onClick={reset}>
                    <span className="material-symbols-outlined">
                        restart_alt
                    </span>
                </button>
            </div>

            <footer className="footer">
                <a
                    target="_blank"
                    href="https://icons8.com/icon/8WP2o41VRo2f/pomodoro"
                    rel="noreferrer"
                >
                    pomodoro icon by Icons8
                </a>
            </footer>
        </div>
    )
}

export default App
