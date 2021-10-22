<template>
  <h1>{{ msg }}</h1>

  <div class="flex flex-col items-center mt-8 space-y-8">
    <button class="btn btn-primary" @click="count++">
      count is: {{ count }}
    </button>

    <div class="btn btn-info btn-circle outline-none" @click="icon = !icon">
      <carbon-moon v-if="icon" />
      <carbon-sun v-else />
    </div>

    <router-link class="btn btn-success" to="/error/401">
      Go TO 401
    </router-link>

    <router-link class="btn btn-success" to="/not-exist">
      Wrong Page
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const count = ref(0);
const icon = ref(true);
</script>
