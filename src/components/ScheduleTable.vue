<template>
	<b-container>
		<b-table striped hover :items="scheduleHistory" :fields="fields" :per-page="perPage" :sortDesc="sortDesc" :current-page="currentPage"></b-table>
		<b-pagination class="pagination" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" />
	</b-container>
</template>

<script>
  export default {
    data: () => ({
      fields: {
        date: { label: 'Data', sortable: true },
        entry: { label: 'Chegada', sortable: false },
        exit: { label: 'Saída', sortable: false },
      },
      perPage: 5,
      totalRows: 50,
      sortDesc: true,
      currentPage: 1,
    }),
    props: {
      scheduleHistory: {
        required: true,
        type: Array,
      },
    },
  };
</script>

<style>
.pagination { justify-content: center; }

.page-item.active .page-link { 
	background-color: #272727;
	border-color: #272727;
 }

 .page-link,
 .page-link:focus, 
 .page-link:hover { color: #272727; }
</style>