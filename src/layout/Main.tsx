import React, { useState } from 'react'
import NavBar from '../components/layout/Navbar'
import './Main.css'

const MainLayout = ({children} : any) => {

	return (
		<div id="dashboardLayout">

			<div className="column column1">
				<NavBar />
			</div>		 
			
			<div className="column2">
				{children}
			</div>
			
		</div>
	)
}

export default MainLayout