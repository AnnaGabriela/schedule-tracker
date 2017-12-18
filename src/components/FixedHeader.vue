<template>
	<main>
    <b-jumbotron class="header">
      <template slot="header">Schedule Tracker</template>
    </b-jumbotron>    
	</main>
</template>

<script>
  export default {
    props: {
      schedule: {
        required: true,
        type: Array,
      },
    },
  };
</script>

<style>
	.header { 
	  background-color: #e89f00;
	  color: #fff;
	  text-align: center;
	 }

	.lead { font-size: 2em; }
</style>