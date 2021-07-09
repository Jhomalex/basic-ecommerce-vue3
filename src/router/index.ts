import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProductListView from '@/views/ProductListView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductListView
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    component: ProductDetailView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
