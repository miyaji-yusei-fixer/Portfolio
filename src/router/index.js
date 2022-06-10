import HelloWorld from '@/pages/HelloWorld'
import About from '@/pages/About'

export const routes = [
  {
    path: '/',
    name: 'Top',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];
