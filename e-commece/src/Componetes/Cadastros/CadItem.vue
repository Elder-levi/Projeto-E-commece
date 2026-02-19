<template>

<form @submit.prevent="CadProduto">
    <label for=""> Insira Imagen :</label>
    <input type="file" 
     accept="Imagem/*"
    @change="CarregaImg" 
     placeholder="Imagem">
  
    <label for=""> Nome do Produto:</label>
    <input type="text"
    v-model="nome" 
    placeholder="Nome Produto">

    <label for=""> Descrição do Produto:</label>
    <input type="text" 
    v-model="descricao"
    placeholder="Descrição do Produto">
    
    <label for=""> Preço do Produto:</label>
    <input type="text"
    v-model="preco" 
    placeholder="Preço do Produto">

   <button type="submit"> Cadastrar Produto </button>
</form>
</template>
<script setup> 

import { ref } from 'vue';
import url from '../ServiceApi/Service.js';

const imagem = ref(null);
const nome = ref("");
const descricao = ref("");
const preco = ref("");

const CarregaImg = (event) =>{
    imagem.value = event.target.files[0];
}

const CadProduto = async () =>
{
    try {
        const formData = new FormData();
        
    formData.append("Imagem", imagem.value)

      const produto = {
      nome: nome.value,
      descricao: descricao.value,
      preco: Number(preco.value)
     };

    formData.append(
      "produto",
      new Blob([JSON.stringify(produto)], { type: "application/json" })
    );
    
        await url.post("/Prod/Cad/Produto", formData);

                alert("Produto cadastrado com sucesso!");
    } 
    catch (error) {
    
        console.log("Erro ao cadastrar produto:" + error);    
    }   
}
</script>
<style scoped>

form{
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 700px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #667eea;
}

input {
    margin-bottom: 15px;
    padding: 15px ;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
}

button {
    padding: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

</style>