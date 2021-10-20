import { useState } from 'react'
import MainAccueil from '../components/home/MainAccueil'
import Card from '../components/layout/Card'
import s from './Home.module.css'


const Home = () => {

	const [cardImg, setCardImg] = useState<string[]>(["src/assets/images/card/vieux-cafe-s.png", "src/assets/images/card/webagency-s.png", "src/assets/images/card/clubdesavocats-s.png"])
	const [cardUrl, setCardUrl] = useState<string[]>(["https://p4thomascoelho.fr/P5/", "https://thomascoelho.github.io/WebAgency_P1/", "https://p4thomascoelho.fr/clubdesavocats/"])
	const [cardDescription, setCardDescription] = useState<string[]>(["Site 1", "site 2", "site 3"])
	return (
		<div className={s.divHome}>
			<div className={s.divMain}>
				<MainAccueil/>
			</div>
	
			<div className={s.fewProjects}>
				<h2>Quelques Projets</h2>
				<Card img={cardImg[0]} href={cardUrl[0]} description={cardDescription[0]} />
				<Card img={cardImg[1]} href={cardUrl[1]} description={cardDescription[1]} />
				<Card img={cardImg[2]} href={cardUrl[2]} description={cardDescription[2]} />
			</div>
			
		</div>
	)
}

export default Home