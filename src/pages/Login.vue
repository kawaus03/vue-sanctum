<template>
<h1>Login page</h1>
<form @submit.prevent="onSubmit">
  <div>
    <input v-model="email" type="email" placeholder="Email">
  </div>
  <div>
    <input v-model="password" type="password" placeholder="Password">
  </div>
  <button type="submit">Login</button>
</form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { axios } from '../plugins/axios'
import { useRouter } from 'vue-router'
import { HOME_PATH } from '../router/routes'

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
