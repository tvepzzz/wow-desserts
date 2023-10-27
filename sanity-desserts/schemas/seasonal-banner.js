export default {
	name: 'banner',
	title: 'Seasonal banner',
	type: 'document',
	fields: [
		{
			name: 'seasonalTitle',
			title: 'Seasonal title',
			type: 'string',
		},
		{
			name: 'upperImg',
			title: 'Upper image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'lowerImg',
			title: 'Lower image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
}
