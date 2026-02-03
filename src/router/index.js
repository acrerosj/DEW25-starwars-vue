import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '@/views/CharactersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/characters', 
      name: 'characters', 
      component: CharactersView,
      children: [
        { path: ':id', 
          name: 'character-detail', 
          component: () => import('@/views/CharacterDetailView.vue'), 
          props: true 
        },
        { path: 'create',
          name: 'character-create', 
          component: () => import('@/views/CharacterFormView.vue')
        },
        {
          path: ':id/edit',
          name: 'character-edit',
          component: () => import('@/views/CharacterFormView.vue'),
          props: true
        }
      ]
    },  
    { path: '/planets', name: 'planets', component: () => import('@/views/PlanetsView.vue') },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    // {
    //   path: '/mi-vista',
    //   name: 'mi-vista',
    //   component: () => import('../views/MiView.vue'),
    // },

  ],
})

export default router
