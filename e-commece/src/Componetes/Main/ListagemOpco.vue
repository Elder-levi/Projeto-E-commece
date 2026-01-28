<template>

 <ol>
  <li class="Link-Itens"><a href="#">Opção 01</a></li>
  <li class="Link-Itens"><a href="#">Opção 02</a></li>
  <li class="Link-Itens"><a href="#">Opção 03</a></li>
  <li class="Link-Itens"><a href="#">Opção 04</a></li>
  <li class="Link-Itens"><a href="#">Opção 05</a></li>
  <li class="Link-Itens"><a href="#">Opção 06</a></li>
  <li class="Link-Itens"><a href="#">Opção 07</a></li>
 </ol>
</template>
<script>
export default{
    name: 'ListagemOpco'
}
</script>
<style>

ol {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
}

li, a {
    list-style: none;
    text-decoration: none;
    text-align: center;
}

.Link-Itens {
    padding: 12px 20px;
    min-width: 120px;
    height: auto;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.Link-Itens:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    border-color: rgba(255, 255, 255, 0.3);
}

.Link-Itens a {
    display: block;
    width: 100%;
    height: 100%;
}

</style>