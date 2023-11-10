<template>
    <div>
      <h1>Сторінка "Register"</h1>
      <form @submit="register">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
        <button type="submit">Register</button>
      </form>
      <button @click="sendEmailVerification">Відправити лист для верифікації</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapMutations, mapState } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      ...mapState('auth', ['user', 'isAuthenticated']),
    },
    methods: {
      ...mapMutations('auth', ['setUser', 'setAuthentication']),
      ...mapActions('auth', ['registerUser', 'sendEmailVerification']),
      async register() {
        try {
          const user = { email: this.email, name: 'John Doe' };
          await this.registerUser(user);
          this.$router.push('/login');
        } catch (error) {
          console.error(error);
        }
      },
      async sendEmailVerification() {
        try {
          await this.sendEmailVerification();
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>