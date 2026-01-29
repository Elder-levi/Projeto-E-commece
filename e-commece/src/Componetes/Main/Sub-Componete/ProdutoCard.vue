<template>
    <div class="Produto-Item">
        <img :src="product.image" :alt="product.nome" loading="lazy">
        <h3>{{ product.nome }}</h3>
        <p>{{ product.descricao }}</p>
        <span class="preco">R$ {{ product.preco.toFixed(2) }}</span>
        <div class="botoes">
            <button class="btn-carrinho" @click="$emit('Adiciona-Carrinho', product)">Adicionar ao Carrinho</button>
            <button class="btn-comprar" @click="$emit('Comprar-Agora', product)">Comprar</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProdutoCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.Produto-Item {
    background: #fff;
    border-radius: 8px;
    width: 200px;  
    padding: 15px;
    box-shadow: 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease;
}

.Produto-Item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.Produto-Item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
}

.preco {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #667eea;
    margin: 10px 0;
}

.botoes {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
    font-weight: 600;
    font-size: 14px;
}

.btn-carrinho {
    background-color: #667eea;
}

.btn-carrinho:hover {
    background-color: #5568d3;
}

.btn-comprar {
    background-color: #48bb78;
}

.btn-comprar:hover {
    background-color: #38a169;
}

button:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}

button:active {
    transform: scale(0.98);
}
</style>