export default (context, inject) => {
    const getBlogPostList = () => {
        const makeTitle = (slug) => {
            var words = slug.split('-')
            for (var i = 0; i < words.length; i++) {
                var word = words[i]
                words[i] = word.charAt(0).toUpperCase() + word.slice(1)
            }
            return words.join(' ')
        }
        let blogPostList = []
        context.router.options.routes.forEach((routeOption) => {
            if (routeOption.path.startsWith(this.$route.path)) {
                routeOption.children.forEach((routeChild) => {
                    if (routeChild.name != 'blog') {
                        let pathSegments = routeChild.path.split('/')
                        let splitTags = pathSegments[1].split('-tags-')
                        let tags = splitTags[1].split('-')
                        let title = makeTitle(splitTags[0])
                        let year = pathSegments[0]
                        blogPostList.push({
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
        return blogPostList
    }
    inject('getBlogPostList', getBlogPostList)
}