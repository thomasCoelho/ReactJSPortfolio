import { useState } from 'react'
import MainAccueil from '../components/home/MainAccueil'
import Card from '../components/home/Card'
import s from './Home.module.css'
import Cards from '../components/home/Cards'


const Home = () => {

	return (
		<div className={s.divHome}>
			<MainAccueil />
			<Cards />


		</div>
	)
}

export default Home