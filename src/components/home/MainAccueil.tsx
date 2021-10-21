import React from 'react';
import s from './MainAccueil.module.css';


const Home = () => {

    return(
        <section className={s.mainAccueilSection}>
            <div className="home-main-text">
                <h1>I am a Developer</h1>
                <p className="s16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque animi illo.</p>
                <a className="btn btn-outline btn-anim-left" href="#">Voir le portfolio</a>
            </div>

        </section>
    )
}

export default React.memo(Home)