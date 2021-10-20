import UnauthenticatedRoute from './routes/UnauthenticatedRoute'
import React, { Suspense } from 'react'
const Home = React.lazy(() => import('../pages/Home'));
import {Switch} from 'react-router-dom'


const Router = () => {

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<UnauthenticatedRoute C={Home} layout="MainLayout" exact path="/" />
			</Switch>
		</Suspense>
	)
}

export default Router