import React from 'react'
import MainLayout from './Main'

interface LayoutProps {
    name: string,
    children: React.ReactNode
}

const Layout = ({name, children} : LayoutProps) => {

	const Layout : any = name === "MainLayout" && MainLayout 

	return (
		<Layout>
			{children}
		</Layout>
	)
}

export default Layout
