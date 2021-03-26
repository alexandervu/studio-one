import { createWebHistory, createRouter } from 'vue-router'
import ComponentsView from '../components/ComponentsView.vue'
import HomeView from '../components/HomeView.vue'
import CompnentOverView from '../components/ComponentOverView.vue'
import ButtonView from '../components/ButtonView.vue'
import BarView from '../components/BarView.vue'
import ListView from '../components/ListView.vue'
import GroupView from '../components/GroupView.vue'
import NavView from '../components/NavView.vue'

const routes = [
  {
    path: '/components',
    name: 'components',
    components: {
      default: ComponentsView
    },
    children: [
      { path: '', name: 'components-list', component: CompnentOverView },
      { path: 'button', name: 'components-button', component: ButtonView },
      { path: 'bar', name: 'components-bar', component: BarView },
      { path: 'list', name: 'components-list', component: ListView },
      { path: 'group', name: 'components-group', component: GroupView },
      { path: 'nav', name: 'components-nav', component: NavView }
    ]
  }, {
    path: '/',
    name: 'home',
    components: {
      default: HomeView
    }
  }
]

const router = createRouter({
  history: createWebHistory('/studio-one/'),
  routes
})

export default router
