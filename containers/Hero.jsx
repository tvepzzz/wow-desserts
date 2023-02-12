import Link from 'next/link'
import { Button } from '../components'

const Hero = () => {
	return (
		<section>
			<div className="hero__container container grid">
				<img src="/hero.png" alt="hero img" className="hero__img" />
				<div className="hero__data">
					<h1 className="hero__title">
						вАУ Десерт - десерти просто ВАУ!
					</h1>
					<p className="hero__description">
						Магазин домашніх солодощів
					</p>
					<Link href="/catalog">
						<Button text="В каталог" />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
