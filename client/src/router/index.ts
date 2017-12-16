import Vue from 'vue'
import Router from 'vue-router'
import ArticlesList from '@/components/ArticlesList.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticlesList',
      component: ArticlesList
    }
  ]
})
