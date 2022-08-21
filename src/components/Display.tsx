import React, { useState } from 'react'

const STOPPED = false
const RUNNING = true

export default function Display({
    current,
    initial,
}: {
    current: string
    initial: number
}) {
    const [timeLeft, setTimeLeft] = useState(initial * 60)
    const [status, setStatus] = useState(STOPPED)

    const getMinSec: (seconds: number) => string = seconds => {
        let min: string = `${seconds / 60}`
        let sec: string = `${seconds % 60}`

        if (sec.length === 1) sec = `0${sec}`

        return `${min}:${sec}`
    }

    return (
        <div className="display">
            <h3 id="timer-label">{current}</h3>

            <h2 id="time-left">{getMinSec(initial * 60)}</h2>
            <button id="start_stop" type="button">
                {status === STOPPED ? (
                    <span className="material-symbols-outlined">
                        play_arrow
                    </span>
                ) : (
                    <span className="material-symbols-outlined">pause</span>
                )}
            </button>
        </div>
    )
}
