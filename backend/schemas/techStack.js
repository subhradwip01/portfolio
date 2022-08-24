export default {
    name:'techStack',
    title:'Tech Stack',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'img',
            title:'Image',
            type:'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'description',
            title:'Description',
            type:'string',
        },
        
    ]
}