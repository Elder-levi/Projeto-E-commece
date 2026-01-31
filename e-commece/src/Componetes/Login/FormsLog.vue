<template>
<form action="">
<img src="./IMG/perfil.png" alt="">
<h1>Login</h1>
<label for="username">Username:</label>    
<input type="text" name="username" id="username">
<label for="password">Password:</label>
<input type="password" name="password" id="password">
<button type="submit">Login</button>
</form>
</template>
<script>
export default{
name:'FormsLog'

}

</script>
<style scoped> 

img{
width: 100px;
height: 100px;
margin: 0 auto ;
margin-bottom: 20px;
}

h1{
    text-align: center;
    margin-bottom: 20px;
    color: #667eea;

}
form{
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
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