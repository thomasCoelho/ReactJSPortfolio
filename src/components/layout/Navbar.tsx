import s from './Navbar.module.css'
import avatar from '../assets/images/avatar-xs.jpg'
import * as Icon from 'react-feather';
import { useContext, useEffect } from 'react';
import {NavbarContext} from '../../context/NavbarContext';
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const {sideBarVisible, setSideBarVisible} = useContext(NavbarContext)
    const desktop = useMediaQuery({ query: '(min-width: 992px)' })

    useEffect(() => {
      setSideBarVisible(desktop)
    }, [desktop])
    
    return(
        <nav 
            className={`
                ${s.sidebar}
                ${sideBarVisible ? s.open : s.close}
            `}
        >
            <ul>
                <li><figure></figure></li>
                <li><a href = "#">Accueil</a></li>
                <li><a href = "#">Projets</a></li>
                <li><a href = "#">Contact</a></li>
                {
                    !desktop && 
                    <>
                        <Icon.ChevronRight className={s.chevron} onClick={() => setSideBarVisible(!sideBarVisible) } />
                    </>
                }
            </ul>
        </nav>
    )
}

export default Navbar