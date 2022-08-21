import React from 'react'

const INC = 'increment'
const DEC = 'decrement'
export type handler = (value: number) => void

export default function Timer({
    name,
    value,
    onValueChange,
    displayName,
}: {
    name: string
    value: number
    onValueChange: handler
    displayName: string
}) {
    const onIncerment: () => void = () => {
        onValueChange(value + 1)
    }

    const onDecrment: () => void = () => {
        if (value !== 0) onValueChange(value - 1)
    }

    return (
        <div>
            <h3 id={`${name}-label`}>{`${displayName} Length`}</h3>
            <button
                type="button"
                id={`${name}-increment`}
                onClick={onIncerment}
            >
                Increment
            </button>
            <h2 id={`${name}-length`}>{`${value}`}</h2>
            <button type="button" id={`${name}-decrement`} onClick={onDecrment}>
                Decrement
            </button>
        </div>
    )
}
