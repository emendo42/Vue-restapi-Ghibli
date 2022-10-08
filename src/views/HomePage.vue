<script setup>
import { onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import useGhibliFilms from '@/composables/useGhibliFilms'

const { ghibliFilms, fetchGhibliFilms, firstLoad } = useGhibliFilms()

onMounted(async () => {
  if (firstLoad.value) {
    await fetchGhibliFilms()
    firstLoad.value = false
  }
})
</script>

<template>
  <button
    title="Load Characters"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchGhibliFilms"
  >
    🚀
  </button>
  <main class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700">
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <BaseCard
        v-for="ghibli in ghibliFilms"
        :key="ghibli.id"
        :ghibli="ghibli"
      />
    </div>
  </main>
</template>