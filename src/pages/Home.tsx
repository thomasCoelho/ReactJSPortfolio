import MainAccueil from '../components/home/MainAccueil';
import s from './Home.module.css';
import Cards from '../components/home/Cards';
import { Helmet } from 'react-helmet';
import OGImage from '../assets/images/layout/avatar-s.jpg';


const Home = () => {

	return (
		<>
			<Helmet>
				<meta property="og:title" content="Portfolio Thomas Coelho" />
				<meta property="og:type" content="article" />
				<meta property="og:description" content="Développeur web PHP/React, découvrir mon portfolio" /> 
				<meta property="og:image" content={OGImage} />
			</Helmet>

			<div className={s.divHome}>
				<MainAccueil />
				<Cards />
			</div>
		</>
	)
}

export default Home