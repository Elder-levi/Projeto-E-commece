<template>
<nav>
<i>
    puff
    
    <img src="" alt="">
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
nav{
display: flex;
flex-direction: row;
justify-content: space-between;
}

ol , i{
    display: flex;
    text-decoration: none;
    list-style: none;
    margin: 20px;
    gap : 20px;
}

li > a{
    text-decoration: none;
}


</style>