<template>
<div class="Carrosel">
    <div class="CarroselInner">
        <div class="Carrosel-Item active"> <img src="../IMG/paisagem-natural-og.webp" alt="Paisagem destaque 1"></div>
        <div class="Carrosel-Item"> <img src="../IMG/paisagem-natural-og.webp" alt="Paisagem destaque 2"> </div>
        <div class="Carrosel-Item"> <img src="../IMG/paisagem-natural-og.webp" alt="Paisagem destaque 3"> </div>
    </div>
     <div class="Box-Catalogo">
          <div class="Top-Catalogo">
               <h1>Explorando Catalogo</h1>
               <div class="Box-Buttons">
                <button class="CarroselPrev"><img src="../Assets/Icons/seta-esquerda.png" alt=""></button>
                <button class="CarroselNext"><img src="../Assets/Icons/seta-direita.png" alt=""></button>
              </div> 
            </div>
          <div>
       </div>
     </div>
    
</div>
</template>
<script>
export default {
  name: 'CarroselDestaq',

  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
    const prevButton = document.querySelector(".CarroselPrev");
    const nextButton = document.querySelector(".CarroselNext");

    const handlePrev = () => {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = document.querySelectorAll(".Carrosel-Item").length - 1;
      }
      this.passarSlide();
    };

    const handleNext = () => {
      this.currentIndex++;
      if (this.currentIndex > document.querySelectorAll(".Carrosel-Item").length - 1) {
        this.currentIndex = 0;
      }
      this.passarSlide();
    };

    prevButton.addEventListener('click', handlePrev);
    
    nextButton.addEventListener('click', handleNext);
  },
  methods: {
    passarSlide() {
      const items = document.querySelectorAll(".Carrosel-Item");
      items.forEach(item => item.classList.remove('active'));
      items[this.currentIndex].classList.add('active');
    }
  }
};
</script>
<style scoped>

.Carrosel{
    position: relative;
    height: 800px;
    margin: 40px auto;
}

.CarroselInner {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.Carrosel-Item {
    position: absolute;
    top: 0%;
    left: 0%;
    display: none;
    width: 100%;
    height: 100%;
}

.Carrosel-Item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.Carrosel-Item.active {
    display: block;
}
.Top-Catalogo {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 20px;
}


.CarroselPrev, .CarroselNext {
background: none;
border: none;
cursor: pointer;
} 

/*
.CarroselPrev {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 100;
    padding: 12px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.CarroselPrev:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.CarroselNext {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 100;
    padding: 12px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.CarroselNext:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
*/



</style>


