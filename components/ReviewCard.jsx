import { urlFor } from '../lib/client'

const ReviewCard = ({ review }) => {
	return (
		<div className="review__card">
			<img
				src={urlFor(review.customerImg)}
				width={90}
				height={90}
				alt="Customer image"
				className="review__img"
			/>

			<p className="review__name">{review.customer}</p>

			<p className="review__text">{review.review}</p>
		</div>
	)
}

export default ReviewCard
