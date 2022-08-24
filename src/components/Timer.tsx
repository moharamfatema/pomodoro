import React from 'react'
import './style/Timer.css'

const INC = 'increment'
const DEC = 'decrement'
export type handler = (value: number) => void

export default function Timer({
    name,
    value,
    onValueChange,
    displayName,
    disable,
}: {
    name: string
    value: number
    onValueChange: handler
    displayName: string
    disable: boolean
}) {
    const onIncerment: () => void = () => {
        if (value !== 60) onValueChange(value + 1)
    }

    const onDecrment: () => void = () => {
        if (value !== 1) onValueChange(value - 1)
    }

    return (
        <div className="timer">
            <h3 id={`${name}-label`}>{`${displayName} Length`}</h3>

            <div className="timer-val">
                <button
                    type="button"
                    id={`${name}-decrement`}
                    onClick={onDecrment}
                    disabled={disable}
                >
                    <span className="material-symbols-outlined">remove</span>
                </button>

                <h2 id={`${name}-length`}>{`${value}`}</h2>
                <button
                    type="button"
                    id={`${name}-increment`}
                    onClick={onIncerment}
                    disabled={disable}
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
        </div>
    )
}
