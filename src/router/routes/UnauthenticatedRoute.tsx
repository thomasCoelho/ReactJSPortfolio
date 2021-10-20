import {Route} from 'react-router-dom'
import Layout from '../../layout'

const UnauthenticatedRoute = ({C, layout, ...rest} :any) => {

	return (
        <Route 
			{...rest}
		>
			<Layout name={layout}>
				<C />
			</Layout>
		</Route>
	)
}

export default UnauthenticatedRoute