<template>
  <nav class="navbar">
    <div class="logo-section">
      <div class="logo">
        <img src="../IMG/cidao.jpg" alt="Logo" class="logo-img">
      </div>
    </div>

    <ul class="nav-links">
      <li><a href="#home" class="nav-link">Home</a></li>
      <li><a href="#produtos" class="nav-link">Produtos</a></li>
    </ul>

    <div class="nav-actions">
      <button class="search-btn" title="Buscar">
        <span>🔍</span>
      </button>
      <button class="cart-btn" title="Carrinho">
        <span>🛒</span>
        <span class="badge">0</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Topo'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo Section */
.logo-section {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffd700;
  transition: width 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link:hover::after {
  width: 100%;
}

/* Nav Actions */
.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 0 0 auto;
}

.search-btn,
.cart-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.search-btn:hover,
.cart-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cart-btn {
  position: relative;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .nav-links {
    order: 3;
    width: 100%;
    gap: 1rem;
    justify-content: space-around;
    margin-top: 0.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  .nav-actions {
    gap: 0.5rem;
  }

  .search-btn,
  .cart-btn {
    padding: 0.5rem 0.6rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.8rem 0.5rem;
  }

  .logo-text {
    display: none;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .nav-links {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>