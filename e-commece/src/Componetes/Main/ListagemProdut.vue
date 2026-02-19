<template>
<div class="Produto-Listagem">
    <div class="Produto-Item"
    v-for=" produto in produtos"
    :key="produto.id"
    >

        <img 
         v-if="produto.CaminhoIMG"
        :src="`http://localhost:9090${produto.CaminhoIMG}`" 
        alt="Produto Imagem">
        
    
        <h3> {{ produto.nome }} </h3>
        <p>{{ produto.Descricao }}</p>
        <span>{{ produto.preco }}</span>



        <button>Adicionar ao Carrinho</button>
        <button>Peça-ja</button>
    </div>

   


</div>

</template>
<script setup>
import { onMounted , ref } from 'vue';
import url from '../ServiceApi/Service';


const produtos = ref([])

onMounted( async() =>{
try {
    const response = await url.get("/Prod/Produtos")
    produtos.value = response.data;
    console.log(produtos.value);

} catch (error) {
    alert("Erro ao carregar produtos, tente novamente mais tarde.");

    console.log("Erro ao carregar produtos:" + error);
}


})
</script>

<style scoped>
.Produto-Listagem {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 40px 20px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(196, 195, 226, 0.05) 100%);
    min-height: 400px;
}

.Produto-Item {
    background: #fff;
    border-radius: 12px;
    width: 240px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    position: relative;
}

.Produto-Item:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.25);
}

.Produto-Item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.Produto-Item:hover img {
    transform: scale(1.05);
}

.Produto-Item h3 {
    font-size: 18px;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
    line-height: 1.3;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Produto-Item p {
    font-size: 14px;
    color: #718096;
    margin: 0;
    line-height: 1.5;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
}

.Produto-Item span {
    display: block;
    font-size: 22px;
    font-weight: 800;
    color: #667eea;
    margin: 10px;
    letter-spacing: -0.5px;
}

.Produto-Item button {
    flex: 1;
    padding: 12px 15px;
    border: none;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;
    border-top: 1px solid #e2e8f0;
}

.Produto-Item button:first-of-type {
    background-color: #667eea;
    color: white;
}

.Produto-Item button:first-of-type:hover {
    background-color: #5568d3;
}

.Produto-Item button:first-of-type:active {
    transform: scale(0.98);
}

.Produto-Item button:last-of-type {
    background-color: #48bb78;
    color: white;
}

.Produto-Item button:last-of-type:hover {
    background-color: #38a169;
}

.Produto-Item button:last-of-type:active {
    transform: scale(0.98);
}

.Produto-Item button:focus {
    outline: 2px solid currentColor;
    outline-offset: -2px;
}

/* Responsividade */
@media (max-width: 768px) {
    .Produto-Item {
        width: 200px;
    }

    .Produto-Item img {
        height: 160px;
    }

    .Produto-Item h3 {
        font-size: 16px;
    }

    .Produto-Listagem {
        gap: 20px;
        padding: 30px 15px;
    }
}

@media (max-width: 480px) {
    .Produto-Item {
        width: 160px;
    }

    .Produto-Item img {
        height: 120px;
    }

    .Produto-Item h3 {
        font-size: 14px;
        margin: 10px 10px 5px;
    }

    .Produto-Item p {
        font-size: 12px;
        margin: 0 10px;
    }

    .Produto-Item span {
        font-size: 18px;
        margin: 10px;
    }

    .Produto-Listagem {
        gap: 15px;
        padding: 20px 10px;
    }
}
</style>