
<template>
 
<div class="Listagem">
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
height:auto;
margin: 20px;
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
margin: 20px;
}

.Item-Car > button
{
    width: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.Compra
{
    background: linear-gradient(135deg, #6c63ff 0%, #8c97ff 100%);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 10px 20px;
    font-weight: 700;
    letter-spacing: 0.02em;
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.Compra:hover,
.Compra:focus
{
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(108, 99, 255, 0.32);
    opacity: 0.95;
}

.Compra:active
{
    transform: translateY(0);
    box-shadow: 0 8px 16px rgba(108, 99, 255, 0.2);
}
</style>

