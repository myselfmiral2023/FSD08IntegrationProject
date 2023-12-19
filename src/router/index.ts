import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue';
import SearchView from '../views/SearchView.vue';
import LibraryView from '../views/LibraryView.vue';
import PlaylistsView from '../views/PlaylistsView.vue';
import AccSettingsView from '../views/AccSettingsView.vue';
import AccProfileView from '../views/AccProfileView.vue';
import CreatorUploadView from '../views/CreatorUploadView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/main',
      name: 'main',
      component: MainView
    },

    {
      path: '/search',
      name: 'search',
      component: SearchView
    },

    {
      path: '/library',
      name: 'libraryh',
      component: LibraryView
    },

    {
      path: '/playlists',
      name: 'Playlists',
      component: PlaylistsView
    },

    {
      path: '/accsettings',
      name: 'AccSettings',
      component: AccSettingsView
    },

    {
      path: '/accprofile',
      name: 'AccProfile',
      component: AccProfileView
    },

    {
      path: '/creatorupload',
      name: 'CreatorUpload',
      component: CreatorUploadView
    }


  ]
})

export default router
