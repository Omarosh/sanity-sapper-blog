export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615d966de9b15818d070e129',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ya2y7maw',
                  apiId: 'faae5cbe-2711-42e7-a449-b42b98fe7576'
                },
                {
                  buildHookId: '615d966da3db841bb5f70edf',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-wj3gdw5q',
                  apiId: 'a87422a9-2a13-4cc5-a1eb-2e72716506df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Omarosh/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-wj3gdw5q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
