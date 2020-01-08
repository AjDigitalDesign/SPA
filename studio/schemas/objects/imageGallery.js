export default {
    name: 'imagegallery',
    title: 'Image Gallery',
    type: 'object',
    options: {collapsable: true, collapsed: true},
    fields: [
        {
           name: 'title',
            title: 'Image Title',
           type: 'string'
        },
        {
            name: 'image',
            type: 'image',
        },
    ]
};