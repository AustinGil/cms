import Vue from 'vue'
import Router from 'vue-router'
import ContentsList from '@/components/ContentsList.vue';
import AddContentForm from '@/components/AddContentForm.vue';
import SingleContent from '@/components/SingleContent.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/contents'
    },
    {
      path: '/contents',
      name: 'ContentsList',
      component: ContentsList,
      meta: { title: 'Contents' }
    },
    {
      path: '/contents/add',
      name: 'AddContentForm',
      component: AddContentForm
    },
    {
      path: '/contents/:id',
      name: 'SingleContent',
      component: SingleContent
    }
  ]
})
