import React from 'react';
import nerdflix from '../../assets/nerdflix.png'
import './Menu.css'


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={nerdflix} alt="Logo da NerdFlix" />
            </a>
            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    )
}

export default Menu;