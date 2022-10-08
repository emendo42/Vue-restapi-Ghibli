import { ref } from 'vue'
import useApi from '@/composables/useApi'

const ghibliFilms = ref([])
const currentGhibliFilm = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const useGhibliFilms = () => {
  const fetchGhibliFilms = async () => {
    const { data } = await api.instance.get('/films', {
      params: {
        page: page.value,
      },
    })
    ghibliFilms.value.push(...data.data)
    page.value++
  }

  const fetchGhibliFilm = async (id) => {
    const { data } = await api.instance.get(`/films/${id}`)
    currentGhibliFilm.value = data
  }

  return {
    ghibliFilms,
    fetchGhibliFilms,
    fetchGhibliFilm,
    currentGhibliFilm,
    firstLoad,
  }
}

export default useGhibliFilms
