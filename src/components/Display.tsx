import React, { useEffect, useState } from 'react'
import './style/Display.css'

export const STOPPED = false
export const RUNNING = true

export const SESSION = true
export const BREAK = false

export default function Display({
    current,
    initial,
    status,
    onZero,
    reload,
}: {
    current: boolean
    initial: number
    status: boolean
    onZero: VoidFunction
    reload: boolean
}) {
    const [timeLeft, setTimeLeft] = useState(initial * 60)

    const getMinSec: (seconds: number) => string = seconds => {
        let min = `${Math.floor(seconds / 60)}`
        let sec = `${seconds % 60}`

        if (sec.length === 1) sec = `0${sec}`

        return `${min}:${sec}`
    }

    const tick = () => {
        if (status === RUNNING) {
            if (timeLeft === 0) {
                onZero()
            } else {
                setTimeLeft(time => time - 1)
            }
        }
    }

    useEffect(() => {
        if (status === RUNNING) {
            const interval = setTimeout(tick, 1000)
            return () => clearTimeout(interval)
        }
    }, [status, timeLeft])

    useEffect(() => {
        setTimeLeft(initial * 60)
        status = STOPPED
    }, [initial, reload])
    return (
        <div className="display">
            <h3 id="timer-label">
                {current === SESSION ? 'Session' : 'Break'}
            </h3>
            <h2 id="time-left">{getMinSec(timeLeft)}</h2>
        </div>
    )
}
