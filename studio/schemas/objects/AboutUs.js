export default {
    name: 'aboutus',
    title: 'About Us',
    type: 'object',
    options: {collapsable: true, collapsed: true},
    fields: [
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Section Title',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content Area',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'link',
            title: 'link',
            type: 'reference',
            to:[
                {
                    type: 'home'
                }
            ]
        }
    ]
};