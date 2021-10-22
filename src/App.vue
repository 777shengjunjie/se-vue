<template>
  <div class="min-h-screen min-w-screen">
    <router-view v-if="finished" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const finished = ref(true);
</script>
