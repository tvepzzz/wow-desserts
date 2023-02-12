import Link from 'next/link'
import { urlFor } from '../lib/client'

const ProductCard = ({ product }) => {
	return (
		<div className="product__card">
			<Link href={`/catalog/${product?.slug.current}`}>
				{product.img ? (
					<img
						src={urlFor(product?.img)}
						alt="product image"
						className="product__img"
					/>
				) : (
					<img
						src="/placeholder.png"
						alt="product image"
						className="product__img"
					/>
				)}
				<p className="product__name">{product?.name}</p>
				{product?.salePrice ? (
					<div className="price__container">
						<p className="product__price">
							{product?.salePrice} грн/кг
						</p>
						<p className="product__salePrice">
							{product?.price} грн/кг
						</p>
					</div>
				) : (
					<p className="product__price">{product?.price} грн/кг</p>
				)}
			</Link>
		</div>
	)
}

export default ProductCard
