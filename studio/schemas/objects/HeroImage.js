export default {
    name: 'HeroImage',
    title: 'Hero Image',
    type: 'object',
    options: {collapsable: true, collapsed: true},
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'subtitle',
            type: 'string',
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image'
        },
        {
            name: 'Reservation',
            type: 'object',
            fields: [
                {
                   title: 'Reservation',
                    name: 'pages',
                    type: 'reference',
                    to: [{type: 'home'}]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
};