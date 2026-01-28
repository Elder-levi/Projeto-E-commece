<template>
<nav>
<i>
    <img src="../IMG/cidao-removebg-preview.png" alt="">   
</i>

<ol>
<li><a href="#">Home</a></li>
<li><a href="#">Produtos</a></li>
<li><a href="#">Carinho</a></li>
</ol>
</nav>


</template>

<script>
</script>

<style  scoped>

img{
    width: 30px;
    height: 30px;
}


nav{
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: beige;
}

ol , i{
    display: flex;
    text-decoration: none;
    list-style: none;
    margin: 10px;
    gap : 20px;
}

li > a{
    text-decoration: none;
}


</style>