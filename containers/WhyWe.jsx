import { ReviewCard } from '../components'
import { BsArrowRight } from 'react-icons/bs'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const WhyWe = ({ advantage }) => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			'(min-width: 670px)': {
				slides: { perView: 2, spacing: 10 },
			},
			'(min-width: 780px)': {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	})

	return (
		<section className="section container">
			<h2 className="section__title">Чому ми?</h2>
			<h3 className="section__subtitle">
				Дивіться відгуки наших клієнтів <BsArrowRight size={25} />
			</h3>

			<div>
				<div className="reviews__advantage">
					<h3>{advantage[0]?.clients}+ Клієнтів</h3>
					<h3>{advantage[0]?.orders}+ Замовленнь</h3>
				</div>
				<div ref={sliderRef} className="keen-slider">
					{advantage[0]?.reviews.map(review => (
						<div className="keen-slider__slide" key={review._key}>
							<ReviewCard review={review} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhyWe
