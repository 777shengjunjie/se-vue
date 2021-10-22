import { usePreferredLanguages } from '@vueuse/core';
import { createI18n } from 'vue-i18n';
import { UserModule } from '~/types';
import { defaultWindow } from '~/utils';

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(
    ([key, value]) => {
      const yaml = key.endsWith('.yaml');
      return [key.slice(14, yaml ? -5 : -4), value.default];
    }
  )
);

const preferredLangs = usePreferredLanguages({ window: defaultWindow }).value;
const defaultLang = preferredLangs.filter((l) => l in messages)?.[0] ?? 'zh-CN';

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: defaultLang,
    messages,
  });

  app.use(i18n);
};
