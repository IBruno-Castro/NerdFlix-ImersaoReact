import React from 'react';
import nerdflix from '../../assets/nerdflix.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={nerdflix} alt="Logo da NerdFlix" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;