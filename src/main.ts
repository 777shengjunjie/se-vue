import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import routes from '~/router/routes';
import './index.css';

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
    i.install?.(ctx)
  );
});
