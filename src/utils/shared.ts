import { isClient } from '@vueuse/core';

export const defaultWindow = isClient ? window : undefined;
