export default {
	name: 'product',
	title: 'Products',
	type: 'document',
	fields: [
		{
			name: 'img',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 90,
			},
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
			name: 'salePrice',
			title: 'Sale Price',
			type: 'number',
		},
		{
			name: 'details',
			title: 'Details',
			type: 'string',
		},
		{
			name: 'popular',
			title: 'Popular',
			type: 'boolean',
		},
	],
}
