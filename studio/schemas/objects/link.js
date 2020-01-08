export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'link',
            type: 'reference',
            to:[{ type: 'home'}]
        }
    ]
};