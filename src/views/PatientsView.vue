<template>
  <FiltersPanel />
  <PatientsTable :isLoading="isLoading" />
</template>

<script>

import FiltersPanel from '@/components/filters/FiltersPanel';
import PatientsTable from '@/components/PatientsTable';
import fetchingDataMixin from "@/components/mixins/fetchingDataMixin.js"

import { onMounted, ref } from 'vue';

export default {
  name: 'PatientsView',
  components: {
    FiltersPanel,
    PatientsTable,
  },
  setup() {

    const isLoading = ref(false);
      
    onMounted(async () => {
      isLoading.value = true
      await fetchingDataMixin().fetchData();
      isLoading.value = false
    });

    return {
      isLoading,
    };
  },
};
</script>
