<template>
  <footer class="footer">
    <p class="footer-content">Poli Júnior Engenharia - {{ ano }}</p>
  </footer>
</template>

<script>
import moment from 'moment';

export default {
  data: () => ({
    ano: moment().year(),
  }),
};
</script>

<style>
  .footer {
    height: 50px;
    background-color: #272727;
  }

.footer-content {
  color: #fff;
  text-align: center;
  padding: 10px 0 0;
  font-family: 'Roboto', sans-serif;
}
</style>