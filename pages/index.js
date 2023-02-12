import { Hero, WhyWe, Popular, CTA } from '../containers'
import { client } from '../lib/client'

export default function Home({ products, advantage, seasonalBanner }) {
	return (
		<div>
			<Hero />
			<WhyWe advantage={advantage} />
			<Popular products={products} banner={seasonalBanner} />
			<CTA />
		</div>
	)
}

export const getServerSideProps = async () => {
	const productsQuery = '*[_type == "product"]'
	const products = await client.fetch(productsQuery)

	const advantageQuery = '*[_type == "advantage"]'
	const advantage = await client.fetch(advantageQuery)

	const seasonalBannerQuery = '*[_type == "banner"]'
	const seasonalBanner = await client.fetch(seasonalBannerQuery)

	return {
		props: { products, advantage, seasonalBanner },
	}
}
