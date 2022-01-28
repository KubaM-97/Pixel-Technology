<template>
  <div class='filterOption'>
    <label for='filterPatientAge63'> Pacjenci poniżej 63 r.ż zażywający silne leki </label>
    <input id='filterPatientAge63' type='checkbox' v-model="toggleMaxAge" :true-value="63" :false-value="null" />
  </div>
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

<style scoped>
.filterOption{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 15px auto;
}
@media (max-width: 768px){
  .filterOption{
    width: 80%;
  }
}
</style>