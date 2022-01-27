<template>
  <label for='filterPatientAge63'> Filters Under 63 </label>
  <input id='filterPatientAge63' type='checkbox' v-model="toggleMaxAge" :true-value="63" :false-value="null" />
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'FiltersUnder63',
    setup() {
      const store = useStore();
      const toggleMaxAge = ref(false)
      watch( toggleMaxAge, val => {
        store.commit('setMaxPatientAge', val )
        store.commit('setMinMedicineStrength', toggleMaxAge.value ? 8 : null )
      })
      return {
        toggleMaxAge
      }
    }
}
</script>

<style>

</style>