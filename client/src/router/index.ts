import Vue from 'vue'
import Router from 'vue-router'
import ArticlesList from '@/components/ArticlesList.vue';
import AddArticleForm from '@/components/AddArticleForm.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticlesList',
      component: ArticlesList
    },
    {
      path: '/articles/add',
      name: 'AddArticleForm',
      component: AddArticleForm
    }
  ]
})
