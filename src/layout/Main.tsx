import React, { useState } from 'react'
import Home from '../components/home/MainAccueil'
import Card from '../components/layout/Card'
import NavBar from '../components/layout/Navbar'

const MainLayout = () => {

	const [cardImg, setCardImg] = useState<string[]>(["src/assets/images/card/vieux-cafe-s.png", "src/assets/images/card/webagency-s.png"])
	const [cardUrl, setCardUrl] = useState<string[]>(["https://p4thomascoelho.fr/P5/", "https://thomascoelho.github.io/WebAgency_P1/"])
	const [cardDescription, setCardDescription] = useState<string[]>(["Site 1", "site 2"])

	return (
		<div id="dashboardLayout">

			<div className="column column1">
				<NavBar />
				<Home />
			</div>		 
			
			<div className="few-projects">
				<h2>Quelques Projets</h2>
				<Card img={cardImg[0]} href={cardUrl[0]} description={cardDescription[0]} />
				<Card img={cardImg[1]} href={cardUrl[1]} description={cardDescription[1]} />
			</div>

		</div>
	)
}

export default MainLayout