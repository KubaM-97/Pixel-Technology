<template>
  <PatientsView />
</template>

<script>

import PatientsView from '@/components/PatientsView';

export default {
  name: 'App',
  components: {
    PatientsView,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1.2rem;
  text-align: center;
  text-shadow: .5px 0px 2px rgb(6, 91, 117), -.5px 0px 2px rgb(6, 91, 117), 0px .5px 2px rgb(6, 91, 117), 0px -.5px 2px rgb(6, 91, 117);
  filter: blur(.2px);
  font-family: 'Mukta', sans-serif;
}
body{
  background: url('./assets/images/background.png');
  height: 100vh;
}
#app {
  display: flex;
  justify-content: center;
}
</style>
