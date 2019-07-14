const path = require('path')
module.exports = {
    base:'/sakura-ui/',
    title: 'Sakura UI',
    description: 'Inspiration from heian sakura',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      nav: [
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/views/' },
            { text: 'Japanese', link: '/bar/' }
          ]
        },
        { text: 'Github', link: 'https://github.com/Firenzia/sakura-ui/' },
      ],
      sidebar:{
        '/views/':    [
          {
              title: '开发指南',
              collapsable: true,
              children: [
                'guide/install.md',
                'guide/get-started.md'
              ]
            },
            {
              title: '设计',
              collapsable: true,
              children: [
                'design/color/',
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'components/basic/',
                'components/form/',
                'components/navigation/',
                'components/notice/',
                'components/other/'
              ]
            },
        ],
  
        '/bar/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
      }
      },
   
    scss:{ //配置 scss 根目录
      includePaths: [path.join(__dirname, '../../style')]
    }
  }