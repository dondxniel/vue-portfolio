import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/startPage.vue') }],
  },
  {
    path: '/vscode-themed',
    component: () => import('layouts/vsCode.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  // {
  //   path: '/github',
  //   component: () => import('layouts/GithubLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/github/IndexPage.vue') },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
