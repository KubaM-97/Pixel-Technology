<template>
  <table>
    <thead>
      <tr>
        <td>L.P</td>
        <td>Imię i Nazwisko</td>
        <td>Leki</td>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isLoading" class='loader'>
        <td colspan="3"><Loader /></td>
      </tr>
      <router-link v-else v-for="(patient, index) in patients" :key="patient.id"
        custom
        v-slot="{ navigate }"
        :to="{
          name: 'SinglePatientView',
          params: {
            id: patient.id,
            patient: JSON.stringify(patient),
            medicines: JSON.stringify(getAllPatientMedicines(patient))
          },
        }">
        <tr @click="navigate" @keypress.enter="navigate" role="link">
          <td>{{index + 1}}.</td>
          <td>{{patient.name}} {{patient.lastName}}</td>
          <td>
              <ul>
                  <template v-for="medicine in getAllPatientMedicines(patient)" :key="medicine.id">
                      <li>{{ medicine.medicationName }}</li>
                  </template>
              </ul>
          </td>
        </tr>
      </router-link>
    </tbody>
  </table>
</template>

<script>

import Loader from '@/components/Loader'
import { computed } from 'vue'
import { useStore } from 'vuex';

export default {
  name: 'PatientsTable',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Loader,
  },
  setup() {
    
    const store = useStore();
    const patients = computed(()=>store.getters.filteredPatients());
    const medicines = computed(()=>store.state.medicines);

    function getAllPatientMedicines(patient) {
      return medicines.value.filter(medicine => medicine.patientIds.includes(patient.id))
    }

    return {
      patients,
      medicines,
      getAllPatientMedicines,
    }

  },
};
</script>

<style scoped>
table {
    margin-top: 50px;
    width: 100%;
    max-width: 1400px;
    color: rgba(216, 207, 207, 0.994);
    border-collapse: collapse;
    border: 2px solid black;
}
thead {
    background: linear-gradient(311deg, rgba(2,0,36,1) 0%, rgba(111,111,204,1) 17%, rgba(0,212,255,1) 100%);
    font-weight: 700;
}
thead td {
    font-size: 1.4rem;
    padding: 20px 0;
}
tbody {
    color: rgb(228, 227, 227)
}
tbody tr:nth-child(odd){
    background: rgb(46, 145, 236);
}
tbody tr:nth-child(even){
    background: rgb(68, 155, 236);
}
tbody tr {
    transition: all .2s linear;
}
tbody tr:hover:not(.loader) {
    background: rgba(11, 96, 207, 0.8);
    cursor: pointer;
}
td {
    padding: 10px 20px;
}
td:first-child {
    width: 10%;
}
td:nth-child(2) {
    width: 50%;
}
ul {
    list-style-type: none;
}
li {
    font-size: 1rem;
    text-align: left;
}
</style>