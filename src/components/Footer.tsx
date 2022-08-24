import React from 'react'
import './style/Footer.css'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="copyrights">
                <a
                    target="_blank"
                    href="https://icons8.com/icon/8WP2o41VRo2f/pomodoro"
                    rel="noreferrer"
                >
                    pomodoro icon by Icons8
                </a>
                <div className="sound-rights">
                    Sound Effect by{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://pixabay.com/users/sergequadrado-24990007/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=21464"
                    >
                        SergeQuadrado
                    </a>{' '}
                    from{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://pixabay.com/sound-effects//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=21464"
                    >
                        Pixabay
                    </a>
                </div>
            </div>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/moharamfatema/pomodoro"
            >
                <FaGithub />
                View source code
            </a>
        </footer>
    )
}
