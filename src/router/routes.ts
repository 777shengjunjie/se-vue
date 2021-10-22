import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { RouteRecordRaw } from 'vue-router';

const routes = setupLayouts(generatedRoutes) as RouteRecordRaw[];

const fallback = {
  path: '/:catchAll(.*)*',
  redirect: '/error/404',
};
routes.push(fallback);

export default routes;
