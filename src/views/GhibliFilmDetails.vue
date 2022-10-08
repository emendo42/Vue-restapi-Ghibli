<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useGhibliFilms from '@/composables/useGhibliFilms'

const route = useRoute()
const { fetchGhibliFilm, currentGhibliFilm } = useGhibliFilms()

onMounted(async () => {
  await fetchGhibliFilm(route.params.id)
})

onUnmounted(() => {
  currentGhibliFilm.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-blue-900 to-green-700 py-8 text-white"
  >
    <div
      v-if="currentGhibliFilm"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img :src="currentGhibliFilm.image" :alt="currentGhibliFilm.name" />
      <h1 class="text-white-800 text-6xl font-bold">
        My film is called {{ currentGhibliFilm.title }}
      </h1>
      <pre>
        {{ currentGhibliFilm }}
      </pre>
    </div>
  </main>
</template>
