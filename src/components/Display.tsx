import React, { useState } from 'react'

export default function Display({
    current,
    initial,
}: {
    current: string
    initial: number
}) {
    const [timeLeft, setTimeLeft] = useState(initial * 60)

    const getMinSec: (seconds: number) => string = seconds => {
        let min: string = `${seconds / 60}`
        let sec: string = `${seconds % 60}`

        if (sec.length === 1) sec = `0${sec}`

        return `${min}:${sec}`
    }

    return (
        <div>
            <h3 id="timer-label">{current}</h3>
            <h2 id="time-left">{getMinSec(timeLeft)}</h2>
            <button id="start_stop" type="button">
                Start Stop
            </button>
        </div>
    )
}
