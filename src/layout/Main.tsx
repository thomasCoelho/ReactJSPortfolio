import React, { useState } from 'react'
import NavBar from '../components/layout/Navbar'
import './Main.module.css'
import s from './Main.module.css'


const MainLayout = ({children} : any) => {

	return (
		<div id="dashboardLayout">

			<div className="column column1">
				<NavBar />
			</div>		 
			
			<div className={s.column2}>
				{children}
			</div>
			
		</div>
	)
}

export default MainLayout