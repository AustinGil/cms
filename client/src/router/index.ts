import Vue from 'vue'
import Router from 'vue-router'
import ContentsList from '@/components/ContentsList.vue';
import AddContentForm from '@/components/AddContentForm.vue';
import SingleContent from '@/components/SingleContent.vue';
// Media
import Media from '@/components/media/Media.vue';
import MediaList from '@/components/media/MediaList.vue';
import AddMediaForm from '@/components/media/AddMediaForm.vue';

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
    },
    {
      path: '/media',
      component: Media,
      children: [
        {
          path: '',
          component: MediaList
        },
        {
          path: 'add',
          component: AddMediaForm
        }
      ]
    }
  ]
})
