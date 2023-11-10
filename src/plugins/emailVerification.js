import firebase from 'firebase/app';
import 'firebase/auth';

const emailVerificationPlugin = {
  install(Vue) {
    Vue.prototype.$checkEmailVerification = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        await user.reload();
        if (!user.emailVerified) {
          return false;
        }
      }
      return true;
    };
  },
};

export default emailVerificationPlugin;