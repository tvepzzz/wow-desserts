import Link from 'next/link'
import { ProductCard } from '../../components'
import { client } from '../../lib/client'

const Catalog = ({ products }) => {
	return (
		<section className='section container'>
			<h1 className='section__title'>
				Перед замовленням ознайомтесь з{' '}
				<Link href='/rules' className='rules__link'>
					Правилами замовлення
				</Link>
			</h1>

			<div className='catalog__container grid'>
				{products?.map(product => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
		</section>
	)
}

export const getServerSideProps = async () => {
	const productsQuery = '*[_type == "product"]'
	const products = await client.fetch(productsQuery)

	return {
		props: { products },
	}
}

export default Catalog
