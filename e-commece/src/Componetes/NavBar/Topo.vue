<template>
  <nav class="navbar">


<!-- NAVBAR -->
<header class="navbar">
  <nav class="nav-container">

    <!-- Logo -->
    <div class="nav-logo">
      PURPLE<span>SHOP</span>
    </div>

    <!-- Links Desktop -->
    <ul class="nav-links">
      <li><router-link to="/"  class="nav-link active">Home</router-link></li>
      <li><router-link to="/produtos" class="nav-link">Produtos</router-link></li>
    </ul>

    <!-- Barra de Busca -->
    <div class="nav-search">
      <input type="text" placeholder="O que você está procurando?" />
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg"
           width="18" height="18" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </div>

    <!-- Ícones -->
    <div class="nav-icons">
      <!-- Usuário -->
      <router-link to="/login" class="nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </router-link>
      <button class="icon-btn" aria-label="Minha conta">
        
      </button>

      <!-- Carrinho -->
      <button class="icon-btn cart-btn" aria-label="Carrinho">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span class="cart-badge">3</span>
      </button>

      <!-- Hamburguer Mobile -->
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Menu Mobile -->
  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-search">
      <input type="text" placeholder="Buscar..." />
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </div>
    <ul>
      <li><router-link to="/"  class="nav-link active">Home</router-link></li>
      <li><router-link to="/produtos" class="nav-link">Produtos</router-link></li>
    </ul>
  </div>
</header>
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


/* ── Variáveis ─────────────────────────────────── */
:root {
  --primary:    #5b3fd4;
  --primary-light: #f0ecff;
  --accent:     #ff6b35;
  --text:       #1a1333;
  --text-muted: #6b5e8a;
  --border:     #e2e8f0;
  --bg:         #fafaf8;
  --white:      #ffffff;
  --font:       'Plus Jakarta Sans', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


/* ── Top Bar ───────────────────────────────────── */
.top-bar {
  background-color: #5b3fd4;
  color: var(--white);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  padding: 6px 16px;
  letter-spacing: 0.01em;
}

/* ── Header / Navbar ───────────────────────────── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background:  #5b3fd4;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 32px;
}

/* ── Logo ──────────────────────────────────────── */
.nav-logo {
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.03em;
  white-space: nowrap;
  flex-shrink: 0;
}

.nav-logo span {
  color: var(--text);
}

/* ── Links Desktop ─────────────────────────────── */
.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  flex-shrink: 0;
}

.nav-link {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-muted);
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

/* ── Barra de Busca ────────────────────────────── */
.nav-search {
  flex: 1;
  position: relative;
  max-width: 420px;
}

.nav-search input {
  width: 100%;
  background: #f5f3ff;
  border: 1.5px solid var(--border);
  border-radius: 999px;
  padding: 9px 40px 9px 18px;
  font-size: 14px;
  font-family: var(--font);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.nav-search input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(91, 63, 212, 0.12);
}

.nav-search input::placeholder {
  color: var(--text-muted);
}

.search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

/* ── Ícones ────────────────────────────────────── */
.nav-icons {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  flex-shrink: 0;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, background 0.2s;
}

.icon-btn:hover {
  color: var(--primary);
  background: var(--primary-light);
}

/* Badge do Carrinho */
.cart-btn {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: var(--accent);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  font-family: var(--font);
  min-width: 17px;
  height: 17px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  line-height: 1;
}

/* ── Hamburguer (mobile) ───────────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;
}

.hamburger:hover {
  background: var(--primary-light);
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

/* Hamburguer → X */
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Menu Mobile ───────────────────────────────── */
.mobile-menu {
  display: none;
  background: var(--white);
  border-top: 1px solid var(--border);
  padding: 16px 24px 24px;
}

.mobile-menu.open {
  display: block;
  animation: slideDown 0.25s ease;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.mobile-search {
  position: relative;
  margin-bottom: 16px;
}

.mobile-search input {
  width: 100%;
  border: 1.5px solid var(--border);
  border-radius: 999px;
  padding: 9px 40px 9px 18px;
  font-size: 14px;
  font-family: var(--font);
  outline: none;
  background: #f5f3ff;
}

.mobile-search svg {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-menu ul a {
  display: block;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-muted);
  transition: color 0.2s, background 0.2s;
}

.mobile-menu ul a:hover,
.mobile-menu ul a.active {
  color: var(--primary);
  background: var(--primary-light);
}

/* ── Responsivo ────────────────────────────────── */
@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .nav-search {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>