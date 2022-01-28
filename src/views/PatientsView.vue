<template>
  <div class='patientView'>
    <FiltersPanel />
    <PatientsTable :isLoading="isLoading" />
  </div>
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

<style scoped>
.patientView {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1400px;
}
@media (max-width: 768px){
  .patientView {
    padding-top: 60px;
    width: 100%
  }
}
</style>
