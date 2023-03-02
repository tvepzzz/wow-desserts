import Link from 'next/link'
import { useState } from 'react'
import { BsList, BsX } from 'react-icons/bs'

const Navbar = () => {
	const [isShowed, setIsShowed] = useState(false)

	const handleShowed = () => setIsShowed(prev => !prev)

	return (
		<nav className="nav container">
			<Link href="/">
				<img src="/logo.png" alt="logo" className="nav__logo" />
			</Link>

			<div className={`nav__menu ${isShowed && 'show-menu'}`}>
				<ul className="nav__list">
					<Link href="/" className="nav__link" onClick={handleShowed}>
						<li>Головна</li>
					</Link>
					<Link
						href="/catalog"
						className="nav__link"
						onClick={handleShowed}
					>
						<li>Каталог</li>
					</Link>
					<Link
						href="/orderRules"
						className="nav__link"
						onClick={handleShowed}
					>
						<li>Правила замовлення</li>
					</Link>
				</ul>

				<BsX
					size={40}
					alt="close"
					className="nav__close"
					onClick={handleShowed}
				/>
			</div>

			<BsList
				size={46}
				alt="menu"
				className="nav__toggle"
				onClick={handleShowed}
			/>
		</nav>
	)
}

export default Navbar
