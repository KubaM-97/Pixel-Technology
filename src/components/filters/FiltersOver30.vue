<template>
  <label for='filterPatientAge30'> Filters Over 30 </label>
  <input id='filterPatientAge30' type='checkbox' v-model="toggleMinAge" :true-value="30" :false-value="null" />
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'FiltersOver30',
    setup() {
      const store = useStore();
      const toggleMinAge = ref(false)
      watch( toggleMinAge, val => store.commit('setMinPatientAge', val ))
      return {
        toggleMinAge
      }
    }
}
</script>

<style>

</style>