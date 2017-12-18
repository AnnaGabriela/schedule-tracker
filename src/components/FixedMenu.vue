<template>
    <b-navbar class="navbar">
    <b-navbar-brand href="/" class="">
    <img class="logo" src="../../static/img/logoclara.png" alt="logo">
    </b-navbar-brand>
    <div class="user-session">
      <img class="profile-img" :src="profileImg">
      <span class="user-name">{{ userName }}</span>
    </div>
    <a @click="signOut()"><img class="exit" src="../../static/img/exit.png" alt=""></a>
</b-navbar>
</template>

<script>
export default {
  props: {
    userName: {
      required: true,
      type: String,
    },
    profileImg: {
      required: true,
      type: String,
    },
  },
  methods: {
    signOut() {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        this.$router.push({ name: 'login' });
      });
    },
  },
};
</script>

<style>
  .navbar { background-color: #272727; }

  .logo,
  .exit { margin: 0 20px; }

  .logo { width: 190px; }

  .user-session {
    position: absolute;
    right: 70px;
  }

  .user-name {
    font-family: 'Roboto', sans-serif;
    color: white;
    margin: 10px;
  }
  
  .profile-img {
    border-radius: 50%;
    width: 50px;
  }

</style>
