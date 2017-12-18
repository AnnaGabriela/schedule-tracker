<template>
  <main>
    <fixed-menu :userName="userName" :profileImg="profileImg" />
    <fixed-header :schedule="schedule" />
    <new-associate-modal v-if="newAssociate" :userName="userName"/>
    <schedule-table :scheduleHistory="scheduleHistory"/>
    <buttons :userName="userName" />
    <fixed-footer/>
  </main>
</template>

<script>
  import FixedMenu from './FixedMenu';
  import FixedHeader from './FixedHeader';
  import NewAssociateModal from './NewAssociateModal';
  import ScheduleTable from './ScheduleTable';
  import Buttons from './Buttons';
  import FixedFooter from './FixedFooter';
  import axios from '../services/axios';

  export default {
    data: () => ({
      schedule: [],
      scheduleHistory: [],
      userName: '',
      profileImg: '',
      email: '',
      newAssociate: false,
    }),
    components: {
      FixedMenu,
      FixedHeader,
      ScheduleTable,
      Buttons,
      FixedFooter,
      NewAssociateModal,
    },
    methods: {
      getUserLogged() {
        if (window.gapi.auth2) {
          const auth2 = window.gapi.auth2.getAuthInstance().currentUser.get();
          const profile = auth2.getBasicProfile();
          this.userName = profile.getName();
          this.profileImg = profile.getImageUrl();
          this.email = profile.getEmail();
        }
      },
      getUserData() {
        axios.getAssociateData(this.userName).then((res) => {
          this.schedule = res.getAssociateData.schedule;
          this.scheduleHistory = res.getAssociateData.scheduleHistory.reverse();
        }).catch(() => { this.newAssociate = true; });
      },
    },
    mounted() {
      this.getUserLogged();
      console.log(this.userName);
      this.getUserData();
    },
  };
</script>