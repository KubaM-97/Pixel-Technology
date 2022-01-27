<template>
  <div class='filterOption'>
    <label for='filterPatientAge30'> Pacjenci powyżej 30 r.ż </label>
    <input id='filterPatientAge30' type='checkbox' v-model="toggleMinAge" :true-value="30" :false-value="null" />
  </div>
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

<style scoped>
.filterOption{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 5px auto;
}
@media (max-width: 768px){
  .filterOption{
    width: 80%;
  }
}
</style>