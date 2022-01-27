<template>
    Filtry: 
    <FiltersOver30 />
    <FiltersUnder63 />
</template>

<script>

import FiltersOver30 from '@/components/filters/FiltersOver30';
import FiltersUnder63 from '@/components/filters/FiltersUnder63';

export default {
    name: 'FiltersPanel',
    components: {
        FiltersOver30,
        FiltersUnder63,
    },
}
</script>

<style>

</style>