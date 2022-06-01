<template>
  Home page
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from '../store/index'

export default defineComponent({
  setup() {
    const store = useStore()

    onMounted(() => {
      console.log('user', store.state.user.user)
    })

  }
})
</script>
