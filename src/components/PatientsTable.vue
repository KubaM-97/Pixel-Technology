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
          <tr v-for="(patient, index) in patients" :key="patient.id">
              <td>{{index + 1}}.</td>
              <td>{{patient.name}} {{patient.lastName}}</td>
              <td>Lek xxx:</td>
          </tr>
      </tbody>
  </table>
</template>

<script>

export default {
  name: 'PatientsTable',
  props: {
      patients: {
          type: Array,
          required: false,
          default: () => []
      }
  }
}
</script>

<style scoped>
table {
    margin-top: 50px;
    width: 60%;
    max-width: 1400px;
    color: rgba(192, 192, 192, 0.815);
    border-collapse: collapse;
}
thead {
    background: rgb(0, 60, 255);
    font-weight: 700;
}
thead td {
    font-size: 1.4rem;
}
tbody {
    color: rgb(228, 227, 227)
}
tbody tr:nth-child(odd){
    background: #418efa;
}
tbody tr:nth-child(even){
    background: #246cd1;
}
td {
    padding: 10px 20px;
}
td:first-child {
    width: 10%;
}
</style>