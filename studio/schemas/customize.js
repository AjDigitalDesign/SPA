export default {
    name: 'customize',
    title: 'customize',
    type: 'document',
    fields: [
        {
            name: 'logo',
            type: 'object',
            options: { collapsable: true, collapsed: true},
            fields: [
                {
                    name: 'image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ],
            description: 'Website default logo for header and footer'
        },
        {
            name: 'social',
            type: 'social',
            description: 'Social Media links'
        }
    ],
    preview: {
        select: {
            title: 'partners'
        },
        prepare(){
            return { title: 'customize'}
        }
    }
};