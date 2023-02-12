import Head from 'next/head'
import { Footer } from '../containers'
import { Navbar } from './'

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>вАУ Десерт</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<header className="header">
				<Navbar />
			</header>
			<main className="main">{children}</main>
			<footer className="footer section">
				<Footer />
				<span className="footer__copy">©вАу Десерт</span>
			</footer>
		</div>
	)
}

export default Layout
