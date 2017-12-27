import Vue from 'vue'
import Router from 'vue-router'
import ArticlesList from '@/components/ArticlesList.vue';
import AddArticleForm from '@/components/AddArticleForm.vue';
import SingleArticle from '@/components/SingleArticle.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/articles'
    },
    {
      path: '/articles',
      name: 'ArticlesList',
      component: ArticlesList,
      meta: { title: 'Articles' }
    },
    {
      path: '/articles/add',
      name: 'AddArticleForm',
      component: AddArticleForm
    },
    {
      path: '/articles/:id',
      name: 'SingleArticle',
      component: SingleArticle
    }
  ]
})
