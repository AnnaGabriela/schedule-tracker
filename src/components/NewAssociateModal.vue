<template>
  <b-modal ref="newAccountModal" centered title="Oops!">
      <p class="modal-title">Essa é sua primeira vez aqui! Vamos criar sua conta?</p><br>
      <p class="modal-text">Qual é o seu horário na empresa?</p>
      <b-row>
        <b-col cols="6" md="4">
          <b-form-select v-model="dayOfWeek" :options="dayOptions"></b-form-select>
        </b-col>
        <b-col cols="6" md="4">
          <b-form-select v-model="entryTime" :options="timeOptions"></b-form-select>
        </b-col>
        <b-col cols="6" md="4">
          <b-form-select v-model="exitTime" :options="timeOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="4">
          <b-form-select v-model="dayOfWeek2" :options="dayOptions"></b-form-select>
        </b-col>
        <b-col cols="6" md="4">
          <b-form-select v-model="entryTime2" :options="timeOptions"></b-form-select>
        </b-col>
        <b-col cols="6" md="4">
          <b-form-select v-model="exitTime2" :options="timeOptions"></b-form-select>
        </b-col>
      </b-row>
    </b-modal>
</template>

<script>
export default {
  props: {
    userName: {
      required: true,
      type: String,
    },
  },
  data: () => ({
    dayOfWeek: null,
    entryTime: null,
    exitTime: null,
    dayOfWeek2: null,
    entryTime2: null,
    exitTime2: null,
    dayOptions: [
      { value: null, text: 'Dia da semana' },
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
    ],
    timeOptions: [
      { value: null, text: 'Horário' },
      '08:00', '08:50', '10:30', '12:10', '13:50', '15:30', '17:10', '18:50', '20:00',
    ],
  }),
  methods: {

  },
  mounted() {
    this.$refs.newAccountModal.show();
  },
};
</script>

