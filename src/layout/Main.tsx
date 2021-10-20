import React, { useState } from 'react'
import NavBar from '../components/layout/Navbar'

const MainLayout = ({children} : any) => {

	return (
		<div id="dashboardLayout">

			<div className="column column1">
				<NavBar />
			</div>		 
			
			{children}
			

		</div>
	)
}

export default MainLayout