<script>
import { mapMutations, mapActions, mapState } from 'vuex';

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
    ...mapActions('auth', ['loginUser']),
    async login() {
      try {
        const response = await yourAuthApi.login(this.email, this.password);

        if (response.success) {
          const user = response.user;
          await this.loginUser(user);
          this.$router.push('/todo');
        } else {
          console.error(response.error);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>