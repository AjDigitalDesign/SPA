export default {
    name: 'staff',
    title: 'Staff',
    type: 'object',
    options: {collapsable: true, collapsed: true},
    fields: [

        {
            name: 'image',
            type: 'image'
        },
        {
            name: 'name',
            title: 'staff Name',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Staff Position',
            type: 'string'
        },
        {
            name: 'social',
            title: 'Staff Social Medias',
            type: 'array',
            of: [
                {
                    type: 'social'
                }
            ]

        }
    ]
}