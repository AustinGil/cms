import Vue from 'vue';
import Router from 'vue-router';

// Dashboard
import Dashboard from '@/components/Dashboard.vue';

// Content
import ContentsList from '@/components/ContentsList.vue';
import AddContentForm from '@/components/AddContentForm.vue';
import SingleContent from '@/components/SingleContent.vue';

// Media
import Media from '@/components/media/Media.vue';
import MediaList from '@/components/media/MediaList.vue';
import AddMediaForm from '@/components/media/AddMediaForm.vue';
import EditMediaForm from '@/components/media/EditMediaForm.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/content',
      name: 'ContentsList',
      component: ContentsList,
      meta: { title: 'Contents' }
    },
    {
      path: '/content/add',
      name: 'AddContentForm',
      component: AddContentForm
    },
    {
      path: '/content/:id',
      name: 'SingleContent',
      component: SingleContent
    },
    {
      path: '/media',
      name: 'MediaLibrary',
      component: Media,
      children: [
        {
          path: '',
          component: MediaList
        },
        {
          path: 'form',
          name: 'mediaForm',
          component: AddMediaForm
        },
        {
          path: 'edit',
          name: 'editMedia',
          component: EditMediaForm
        }
      ]
    }
  ]
})
