<template>
  <h1 class="text-3xl font-bold underline">
    Home page
  </h1>
  <p v-t="'message'"></p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from '~/store/index'

export default defineComponent({
  setup() {
    const store = useStore()

    onMounted(() => {
      console.log('user', store.state.user.user)
    })

  }
})
</script>
