import { BsArrowRight } from 'react-icons/bs'
import { Button } from '../components'

const CTA = () => {
	return (
		<section className="section container" id="contact">
			<h2 className="section__title">Оберіть свій власний дизайн</h2>
			<h3 className="section__subtitle">
				Багато ідей в нашому інстаграмі <BsArrowRight size={25} />
			</h3>
			<div className="cta__container">
				<img
					src="/CTA.png"
					alt="Instagram mockup"
					className="cta__img"
				/>
				<div className="cta__data">
					<p className="cta__description">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cum, porro incidunt ad numquam, autem fuga atque
						dolores aut sunt ex adipisci consectetur praesentium
						temporibus minima hic velit voluptatem dolore? Modi!
					</p>
					<a
						href="https://www.instagram.com/anastasiyaushenok2427/?hl=ua"
						target="_blank"
					>
						<Button text="Перейти в наш інстаграм" />
					</a>
				</div>
			</div>
		</section>
	)
}

export default CTA
