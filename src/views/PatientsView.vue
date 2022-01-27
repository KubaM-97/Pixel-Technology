<template>
  <FiltersPanel />
  <PatientsTable :isLoading="isLoading" />
</template>

<script>

import FiltersPanel from '@/components/filters/FiltersPanel';
import PatientsTable from '@/components/PatientsTable';

import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'PatientsView',
  components: {
    FiltersPanel,
    PatientsTable,
  },
  setup() {

    const store = useStore()
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
        await store.dispatch('fetchPatients')
      } catch (err) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }

    async function fetchMedicines() {
      try {
        isLoading.value = true;
        await store.dispatch('fetchMedicines')
      } catch (err) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }

    return {
      isLoading,
    };
  },
};
</script>
