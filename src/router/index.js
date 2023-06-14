import HelloWorld from '@/pages/HelloWorld'
import About from '@/pages/About'

export const routes = [
  {
    path: '/Portfolio/',
    name: 'Top',
    component: HelloWorld
  },
  {
    path: '/Portfolio/about',
    name: 'About',
    component: About
  }
];
