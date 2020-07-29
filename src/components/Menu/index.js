import React from 'react';
import nerdflix from '../../assets/nerdflix.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'

import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={nerdflix} alt="Logo da NerdFlix" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;