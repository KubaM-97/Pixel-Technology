<template>
  Hello Single Patient View - {{route.params.id}}
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'SinglePatientView',
    setup(){
      const route = useRoute()
      return {
        route
      }
    }
}
</script>

<style>

</style>