import React from 'react'
import './style/Controls.css'
import { SESSION, STOPPED } from './Display'

export default function Controls({
    handleClick,
    reset,
    status,
    current,
    onZero,
}: {
    handleClick: VoidFunction
    reset: VoidFunction
    status: boolean
    current: boolean
    onZero: VoidFunction
}) {
    return (
        <div className="controls">
            <button type="button" onClick={onZero} id="skip">
                <span className="material-symbols-outlined">double_arrow</span>
                Skip {current === SESSION ? 'Session' : 'Break'}
            </button>
            <div className="cotrollers">
                <button id="start_stop" type="button" onClick={handleClick}>
                    {status === STOPPED ? (
                        <span className="material-symbols-outlined">
                            play_arrow
                        </span>
                    ) : (
                        <span className="material-symbols-outlined">pause</span>
                    )}
                </button>
                <button id="reset" type="button" onClick={reset}>
                    <span className="material-symbols-outlined">
                        restart_alt
                    </span>
                </button>
            </div>
        </div>
    )
}
