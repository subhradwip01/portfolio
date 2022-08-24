export default{
    name:'works',
    title:'Works',
    type:'document',
    fields:[
        {
           name:'company',
           title:'Company',
           type:"string",
        },
        {
            name:'logo',
            title:"Logo",
            type:"image",
            options:{
                hotspot:true
            }
        },
        {
            name:'link',
            title:'Link',
            type:'string',
        },
        {
            name:'works',
            title:'Works',
            type:"array",
            of:[{
                name:'workExperience',
                title:'Work Experience',
                type:'document',
                fields:[
                       {
                        name:'role',
                           title:'Role',
                           type:'string'
                        },
                        {
                            name:'desc',
                            title:'Desc',
                            type:'string'
                        },
                        {
                            name:'startDate',
                            title:'startDate',
                            type:'date',
                            options: {
                                dateFormat: 'MM-DD',
                                calendarTodayLabel: 'Today'
                            }
                        },
                        {
                            name:'endDate',
                            title:'endtDate',
                            type:'date',
                            options: {
                                dateFormat: 'MM-DD',
                                calendarTodayLabel: 'Today'
                            }
                        }
                ]
            }]
        }
    ]

}