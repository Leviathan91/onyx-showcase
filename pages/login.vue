<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">email:</label>
        <input type="text" v-model="email" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFetch } from '#app';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    console.log(
      `posting with email: ${email.value} and password: ${password.value}`
    );
    const { data, error } = await useFetch('/api/login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    });

    console.log('data value?', data.value);

    if (data.value.success) {
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred');
  }
};
</script>
