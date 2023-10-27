export default {
	name: 'advantage',
	title: 'Advantage',
	type: 'document',
	fields: [
		{
			name: 'clients',
			title: 'Clients',
			type: 'number',
		},
		{
			name: 'orders',
			title: 'Orders',
			type: 'number',
		},
		{
			name: 'reviews',
			title: 'Reviews',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'customerImg',
							title: 'Customer Avatar',
							type: 'image',
						},
						{
							name: 'customer',
							title: 'Customer Name',
							type: 'string',
						},
						{
							name: 'review',
							title: 'Review',
							type: 'string',
						},
					],
				},
			],
		},
	],
}
