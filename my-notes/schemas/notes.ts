export default {
    name: 'notes',
    type: 'document',
    title: 'Notes',
    fields: [
        {
            title: 'img',
            name: 'img',
            type: 'image',
            options: {
              hotspot: true 
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              }
             
            ]
          },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            
        },{
            title: 'about',
            name: 'about',
            type: 'text',
            
        },
        {
            title: 'fileurl',
            name: 'fileurl',
            type: 'url'
          }
    ]
  }