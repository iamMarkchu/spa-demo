import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Article from './views/Article'
import Articles from './views/articles/Index'
import ArticleAdd from './views/articles/Add'
import ArticleEdit from './views/articles/Edit'
import ConfigIndex from './views/configs/Index'
import Register from './views/login/Register'
import Login from './views/login/Login'
import TagComponent from './views/Tag'

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        console.log(to.matched)
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { scrollToTop: true, requireAuth: false}
        },
        {
            path: '/articles/:url',
            name: 'article',
            component: Article,
            meta: { scrollToTop: true, requireAuth: false}
        },
        {
            path: '/article-add',
            name: 'article-add',
            component: ArticleAdd,
            meta: { scrollToTop: true, requireAuth: true }
        },
        {
            path: '/article-edit/:id',
            name: 'article-edit',
            component: ArticleEdit,
            meta: { scrollToTop: true, requireAuth: true }
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
            meta: { scrollToTop: true, requireAuth: true }
        },
        {
            path: '/tags/:url',
            name: 'tag',
            component: TagComponent,
            meta: { scrollToTop: true, requireAuth: false }
        },
        {
            path: '/configs',
            name: 'configs',
            component: ConfigIndex,
            meta: { scrollToTop: true, requireAuth: true }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { scrollToTop: true, requireAuth: false}
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { scrollToTop: true, requireAuth: false}
        }
    ],
    scrollBehavior,
    beforeEach: (to) => {
        console.log(to)
    }
})
