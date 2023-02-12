import { ProductCard } from '../components'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { BsArrowRight } from 'react-icons/bs'
import { urlFor } from '../lib/client'

const Popular = ({ products, banner }) => {
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
			<h2 className="section__title">Популярні десерти</h2>
			<h3 className="section__subtitle">
				{banner[0]?.seasonalTitle}
				<BsArrowRight size={25} />
			</h3>
			<img
				src={urlFor(banner[0]?.upperImg)}
				className="popularUpper__img"
			/>
			<div ref={sliderRef} className="keen-slider">
				{products?.map(product => {
					if (product.popular) {
						return (
							<div
								className="keen-slider__slide popular__container"
								key={product._id}
							>
								<ProductCard product={product} />
							</div>
						)
					}
				})}
			</div>
			<img
				src={urlFor(banner[0]?.lowerImg)}
				className="popularLower__img"
			/>
		</section>
	)
}

export default Popular
