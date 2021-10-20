import React from 'react'
import Home from '../components/Home'
import NavBar from '../components/Navbar'

const MainLayout = () => {
	return (
		<div id="dashboardLayout">

			<div className="column column1">
				<NavBar />
				<Home />
			</div>		 
			
		</div>
	)
}

export default MainLayout