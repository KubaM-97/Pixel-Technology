<template>
  <PatientsTable :patients="patients" :medicines="medicines" />
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
      const medicines = ref([]);
      
      axios.get('https://cerber.pixel.com.pl/api/patients').then(res => patients.value = res.data)
      axios.get('https://cerber.pixel.com.pl/api/medicine').then(res => medicines.value = res.data)

      return {
          patients,
          medicines
      }
  }
}
</script>
