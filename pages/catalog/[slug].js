import { useKeenSlider } from 'keen-slider/react'
import { ProductCard } from '../../components'
import { client, urlFor } from '../../lib/client'
import 'keen-slider/keen-slider.min.css'

const ProductPage = ({ product, products }) => {
	const { img, name, price, details } = product

	const [sliderRef] = useKeenSlider({
		rtl: true,
		loop: true,
		breakpoints: {
			'(min-width: 670px)': {
				slides: { perView: 2, spacing: 10 },
			},
			'(min-width: 780px)': {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1, origin: 'center' },
	})

	return (
		<section className="container">
			<div className="product-page__container">
				{img ? (
					<img src={urlFor(img)} alt="product image" />
				) : (
					<img src="/placeholder.png" alt="product image" />
				)}

				<div className="product-page__info">
					<p className="product-page__name">{name}</p>

					<p className="product-page__price">{price} грн/кг</p>

					<div className="product-page__details">
						<h3>Опис:</h3>
						<p>{details}</p>
					</div>
				</div>
			</div>

			<div className="product__like__container">
				<h2>Вам може сподобатись:</h2>

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
			</div>
		</section>
	)
}

export const getStaticPaths = async () => {
	const productsQuery = `*[_type == "product"] {
		slug {
			current
		}
	}`

	const products = await client.fetch(productsQuery)

	const paths = products.map(product => ({
		params: {
			slug: product.slug.current,
		},
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params: { slug } }) => {
	const productQueryId = `*[_type == "product" && slug.current == '${slug}'][0]`
	const product = await client.fetch(productQueryId)

	const productsQuery = '*[_type == "product"]'
	const products = await client.fetch(productsQuery)

	return {
		props: { product, products },
	}
}

export default ProductPage
