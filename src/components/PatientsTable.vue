<template>
  <p>Hello Patients Table</p>
  {{patients}}
</template>

<script>

export default {
  name: 'PatientsTable',
  props: {
      patients: {
          type: Object,
          required: false,
          default: () => {}
      }
  }
}
</script>
