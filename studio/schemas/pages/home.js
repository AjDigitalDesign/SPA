export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'HeroImage',
            type: 'HeroImage',
            description: 'Hero Image area'
        },
        {
            name: 'aboutus',
            title: 'About Us Section',
            type: 'aboutus'
        },
        {
            name: 'gallerysection',
            title: 'Image Gallery Section',
            type: 'array',
            of: [
                {
                    type: 'imagegallery'
                }
            ]
        },
        {
            name: 'staff',
            title: 'Team',
            type: 'array',
            of:[
                {
                    type: 'staff'
                }
            ]
        }
    ],
    preview: {
        select:{},
        prepare(){
            return{
                title: 'Home'
            };
        }
    }
};