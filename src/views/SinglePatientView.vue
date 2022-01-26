<template>
<div> 
  Hello Single Patient View - {{route.params.id}}
</div>
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