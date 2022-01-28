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
    background: linear-gradient(311deg, rgba(2,0,36,1) 0%, rgba(111,111,204,1) 17%, rgba(0,212,255,1) 100%);
    color: rgb(233, 230, 230);
    padding: 10px 0px;
    width: 100%;
    border-radius: 20px;
    border: 2px solid green;
}
.filtersLabel {
    font-size: 1.7rem;
    letter-spacing: .4rem;
    font-weight: 700;
    margin-right: 40px;
}
@media (max-width: 768px){
  .filtersLabel {
      display: block;
      width: 100%;
  }  
}
</style>