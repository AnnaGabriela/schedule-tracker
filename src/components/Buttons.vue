<template>
  <main class="button-container">
    <b-button class="button" @click="setEntryTime" :disabled="disabled">CHEGANDO</b-button>
    <b-button class="button"@click="setExitTime">SAINDO</b-button>
  </main>
</template>

<script>
import moment from 'moment';
import axios from '../services/axios';

export default {
  data: () => ({
    disabled: false,
  }),
  props: {
    userName: {
      required: true,
      type: String,
    },
  },
  methods: {
    sendToDatabase(exit) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser[0].name === this.userName) {
        const associateName = currentUser[0].name;
        const date = currentUser[1].date;
        const entry = currentUser[2].entry;
        axios.setSchedule(associateName, date, entry, exit).then(() => {
          location.reload();
          this.disabled = false;
        });
      }
    },
    createCurrentUserArray() {
      const currentUser = [];
      currentUser.push({ name: this.userName });
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    },
    pushToArray(data) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      currentUser.push(data);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    },
    setDate() {
      this.createCurrentUserArray();
      const date = moment().format('DD/MM/YY').toString();
      this.pushToArray({ date });
    },
    setEntryTime() {
      this.setDate();
      const entry = moment().format('HH:mm').toString();
      this.pushToArray({ entry });
      this.disabled = true;
    },
    setExitTime() {
      const exit = moment().format('HH:mm');
      this.sendToDatabase(exit);
    },
  },
};
</script>

<style>
.button-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.button {
  width: 200px;
  padding: 10px;
  margin: 0 10px;
  background-color: #fff;
  border: 2px solid #e89f00;
  color: #e89f00;
  font-family: "Segoi UI", sans-serif;
}

.button:hover:enabled {
  color: #fff;
  border: 2px solid #e89f00;
  background-color: #e89f00;
  transition: 0.4s background-color;
  -webkit-transition: 0.4s background-color;
}

.button:disabled { color: #fff; }
</style>