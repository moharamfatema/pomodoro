import React, { useState } from 'react'

import './App.css'
import Display, { STOPPED, SESSION } from './components/Display'
import Timer from './components/Timer'
import Footer from './components/Footer'
import Header from './components/Header'
import Controls from './components/Controls'

function App() {
    const [breakTimer, setBreakTimer] = useState(5)
    const [session, setSession] = useState(25)
    const [status, setStatus] = useState(STOPPED)
    const [current, setCurrent] = useState(SESSION)
    const [reload, setReload] = useState(true)

    const sound = new Audio('./clock-alarm.mp3')

    const reset = () => {
        setStatus(STOPPED)
        setCurrent(SESSION)
        setBreakTimer(5)
        setSession(25)
        setReload(prev => !prev)
        console.debug(session)
        console.debug(breakTimer)
    }

    const handleClick = () => {
        // toggle status
        setStatus(prev => !prev)
    }

    const onZero = () => {
        //setStatus(prev => !prev)
        setCurrent(prev => !prev)
        sound.play()
    }

    return (
        <div className="App">
            <Header />

            <div className="wrapper">
                <div className="timers">
                    <Timer
                        name="break"
                        displayName="Break"
                        value={breakTimer}
                        onValueChange={v => {
                            setBreakTimer(v)
                        }}
                        disable={status}
                    />
                    <Timer
                        name="session"
                        displayName="Session"
                        value={session}
                        onValueChange={v => {
                            setSession(v)
                        }}
                        disable={status}
                    />
                </div>

                <Display
                    current={current}
                    status={status}
                    initial={current === SESSION ? session : breakTimer}
                    onZero={onZero}
                    reload={reload}
                />
                <Controls
                    handleClick={handleClick}
                    status={status}
                    reset={reset}
                    current={current}
                    onZero={onZero}
                />
            </div>
            <Footer />
        </div>
    )
}

export default App
