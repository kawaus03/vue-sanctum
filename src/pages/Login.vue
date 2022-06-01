<template>
  <h1 class="text-3xl font-bold underline mb-4">
    Login page
  </h1>

  <form @submit.prevent="onSubmit">
    <div>
      <input
        v-model="email" type="email" placeholder="Email"
        class="border rounded mb-2 px-2"
      >
    </div>
    <div>
      <input
        v-model="password" type="password" placeholder="Password"
        class="border rounded mb-2 px-2"
      >
    </div>
    <button
      type="submit"
      class="border rounded border-blue-500 px-2"
    >Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { axios } from '~/plugins/axios'
import { useRouter } from 'vue-router'
import { HOME_PATH } from '~/router/routes'

export default defineComponent({
  setup() {
    const router = useRouter()
    const email = ref()
    const password = ref()

    const onSubmit = (event: Event) => {
      console.log('onSubmit', event)
      axios
        .post('/login', {
          email: email.value,
          password: password.value
        })
        .then(() => {
          router.push(HOME_PATH)
        })
        .catch((error) => {
          console.error('/login', error)
        })
    }

    return {
      email,
      password,
      onSubmit
    }
  },
})
</script>
