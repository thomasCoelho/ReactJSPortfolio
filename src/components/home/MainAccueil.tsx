import s from './MainAccueil.module.css'


const Home = () => {

    return(
        <section className={s.mainAccueilSection}>
            <div>
            <h2>I am a Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque animi illo.</p>
            <a href="#">Voir le portfolio</a>
            </div>

        </section>
    )
}

export default Home