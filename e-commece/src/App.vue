<script setup>
import Topo 
from './Componetes/NavBar/Topo.vue'

import CarroselDestaq 
from './Componetes/Header/CarroselDestaq.vue'

import ListagemOpco 
from './Componetes/Main/ListagemOpco.vue'

import ListagemProdut 
from './Componetes/Main/ListagemProdut.vue'

import CadItem 
from './Componetes/Cadastros/CadItem.vue'

import Rodape 
from './Componetes/Footer/rodape.vue'

import FormsLog
from './Componetes/Login/FormsLog.vue'


</script>

<template>
    <div id="app" >
       <Topo/>
        <CadItem/>
        
      <!--
        <FormsLog/>
        <CarroselDestaq/>
        <ListagemOpco/>
        <ListagemProdut />
      -->
        <Rodape />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#app {
    margin: 0;
    padding: 0;
    height: 100%;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    color: #333;
}
</style>
