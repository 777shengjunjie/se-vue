<template>
  <div
    class="
      w-screen
      h-screen
      bg-blue-500
      flex flex-col
      justify-center
      items-center
    "
  >
    <div class="text-[24vh] text-white">
      {{ code }}
    </div>

    <div class="text-xl text-white text-opacity-60 mb-4">
      {{ t(`error-message.E${code}`) }}
    </div>

    <router-link to="/" class="btn btn-accent">Go Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
  code: {
    type: String,
    default: '404',
  },
});

const { t } = useI18n();
</script>

<route lang="yaml">
name: error
</route>
