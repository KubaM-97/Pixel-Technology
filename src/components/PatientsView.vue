<template>
  <PatientsTable :patients="patients" />
</template>

<script>

import PatientsTable from '@/components/PatientsTable';

import { ref } from 'vue';

import axios from 'axios'

export default {
  name: 'PatientsView',
  components: {
    PatientsTable,
  },
  setup(){
      
      const patients = ref([]);
      
      axios.get('https://cerber.pixel.com.pl/api/patients').then(res => patients.value = res)
      return {
          patients
      }
  }
}
</script>
