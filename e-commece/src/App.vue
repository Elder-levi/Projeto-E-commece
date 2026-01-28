<script setup>
import Topo from './Componetes/NavBar/Topo.vue'
import CarroselDestaq from './Componetes/Header/CarroselDestaq.vue';
import ListagemOpco from './Componetes/Main/ListagemOpco.vue';
import ListagemProdut from './Componetes/Main/ListagemProdut.vue';

</script>
<template>
  <Topo />
   <CarroselDestaq/>
    <ListagemOpco/>
    <ListagemProdut/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

html, body, #app {
  margin: 0;
  padding: 0;
}
</style>
