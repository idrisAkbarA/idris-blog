export const state = () => ({
  title: null,
  isLoading: false,
})

export const mutations = {
  setTitle(state, newTitle) {
    state.title = newTitle
  },
  setLoading(state, data) {
    state.isLoading = data
  }
}

export const getters = {
  getBlogPostList: (state) => (routes, targetRoute) => {
    let blogPostsList = [];
    routes.forEach((routeOption) => {
      console.log('option:', routeOption);
      if (routeOption.path.startsWith(targetRoute)) {
        routeOption.children.forEach((routeChild) => {
          console.log('child:', routeChild);
          if (routeChild.name != 'blog') {
            let pathSegments = routeChild.path.split('/')
            let splitTags = pathSegments[1].split('-tags-')
            let tags = splitTags[1].split('-')
            let title = this.makeTitle(splitTags[0])
            let year = pathSegments[0]
            blogPostsList.push({
              name: routeChild.name,
              tags,
              title,
              year,
              path: routeChild.path,
            })
          }
        })
      }
    })
    return blogPostsList;
  }
}