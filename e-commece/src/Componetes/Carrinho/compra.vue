
<template>
 
<div class="Listagem">
    <div class="Card-Car">
      <div class="Img-Car">
          <img src="" alt="">
     </div>
            <div class="Item-Car">
            <h3>Nome-Item</h3>
            <p>Preço</p>
            <button>Buy</button>   
            </div>
      <div class="Icons_car">
           <Button>Excluir</Button>
       </div>
    </div>

<div class="Card-Car">
      <div class="Img-Car">
          <img src="" alt="">
     </div>
            <div class="Item-Car">
            <h3>Nome-Item</h3>
            <p>Preço</p>
            <button class="Compra">Buy</button>   
            </div>
      <div class="Icons_car">
           <Button class = "Icon" ><img style="width: 30px; margin: 10px;" src="../IMG/Icons/lixeira-de-reciclagem-removebg-preview.png" alt=""></Button>
       </div>
    </div>

 </div> 



</template>

<script>
export default {
  name: 'Compra'
}
</script>



<style scoped>

*{
margin: 0;
padding: 0;
box-sizing: none;
}

.Icon
{
background-color: transparent;
cursor: pointer;
border: none;
}

.Listagem
{
display: flex;    
flex-direction: column;
align-items: center;
}

.Card-Car
{
width: 300px;
height: 100px;
margin-bottom: 25px;
display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 20px;
box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.Card-Car:hover
{
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.Item-Car
{
margin: auto;
}

.Item-Car > button
{
    background-color: azure;
}
</style>

