<template>
  <PatientsTable :patients="patients" :medicines="medicines" :isLoading="isLoading" />
</template>

<script>

import PatientsTable from '@/components/PatientsTable';

import { ref, onMounted } from 'vue';

import axios from 'axios'

export default {
  name: 'PatientsView',
  components: {
    PatientsTable,
  },
  setup() {
    const patients = ref([]);
    const medicines = ref([]);

    const isLoading = ref(false);

    onMounted(async () => {
      await fetchData();
    });

    async function fetchData() {
      await fetchPatients();
      await fetchMedicines();
    }

    async function fetchPatients() {
      try {
        isLoading.value = true;
        await axios
          .get("https://cerber.pixel.com.pl/api/patients")
          .then((res) => (patients.value = res.data));
      } catch (err) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }

    async function fetchMedicines() {
      try {
        isLoading.value = true;
        await axios
          .get("https://cerber.pixel.com.pl/api/medicine")
          .then((res) => (medicines.value = res.data));
      } catch (err) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }

    return {
      patients,
      medicines,
      isLoading,
    };
  },
};
</script>
