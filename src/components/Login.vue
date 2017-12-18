<template>
  <b-container fluid class="b-container">
      <b-modal ref="errorModal" centered title="Oops!" :header-bg-variant="danger" :header-text-variant="light" :ok-variant="danger">
        <p class="modal-text">{{ error }}</p>
      </b-modal>

    <div class="board">
      <img class="logo-img" src="../../static/img/logo.png" alt="logo">
      <div class="login-button" id="login-button"></div>
    </div> 
  </b-container>
</template>

<script>
  export default {
    data: () => ({
      error: '',
      danger: 'danger',
      light: 'light',
    }),
    methods: {
      onSuccess() {
        this.$router.push({ name: 'dashboard' });
      },
      onFailure(error) {
        if (error.type === 'tokenFailed') {
          this.error = 'Você tem certeza que tem permissão para isso? =)';
          this.$refs.errorModal.show();
        }
      },
      renderButton() {
        window.gapi.signin2.render('login-button', {
          scope: 'profile email',
          width: 220,
          height: 40,
          longtitle: true,
          onsuccess: this.onSuccess,
          onfailure: this.onFailure,
        });
      },
    },
    mounted() {
      this.renderButton();
    },
  };
</script>

<style scoped>
.b-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #272727;
}

.board {
  width: 450px;
  height: 300px;
  margin: 0 auto;
  align-self: center;
  background-color: #fff;
  border-radius: 5px;
}

.logo-img {
  width: 100px;
  margin: 60px auto 10px;
  display: block;
}

.login-button {
  margin: 30px auto 0;
  width: 50%;
}

.modal-text { 
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  padding: 10px;
  margin: 0;
  }
</style>
