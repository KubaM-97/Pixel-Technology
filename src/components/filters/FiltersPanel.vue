<template>
    <div class='filtersPanel'> 
        <span class='filtersLabel'>Filtry: </span> 
        <FiltersOver30 />
        <FiltersUnder63 />
    </div>
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
.filtersPanel {

}
.filtersLabel {

}
</style>