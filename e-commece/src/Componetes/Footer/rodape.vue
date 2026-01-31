<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Coluna 1: Sobre -->
            <div class="footer-section">
                <h4>Sobre Nós</h4>
                <p>Sua loja online de confiança com os melhores produtos do mercado.</p>
                <div class="social-links">
                    <a href="#" class="social-icon"><img src="./icon/facebook.png" alt=""></a>
                    <a href="#" class="social-icon"><img src="./icon/instagram (1).png" alt=""></a>
                    <a href="#" class="social-icon"><img src="./icon/whatsapp.png" alt=""></a>
                </div>
            </div>

            <!-- Coluna 2: Links Úteis -->
            <div class="footer-section">
                <h4>Links Úteis</h4>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>

            
            <!-- Coluna 4: Contato -->
            <div class="footer-section">
                <h4>Contato</h4>
                <p>📧 contato@ecommerce.com</p>
                <p>📞 (11) 9999-9999</p>
                <p>📍 Salvador, BA</p>
            </div>
        </div>

        <!-- Barra inferior -->
        <div class="footer-bottom">
            <p>&copy; 2026 E-Commerce. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Rodape'
}
</script>

<style scoped>
.footer {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    color: #e2e8f0;
    padding: 50px 20px 0;
    margin-top: 60px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    padding-bottom: 40px;
}

.footer-section h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #fff;
}

.footer-section p {
    font-size: 14px;
    line-height: 1.6;
    color: #cbd5e0;
    margin-bottom: 10px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #cbd5e0;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
}

.footer-section a:hover {
    color: #667eea;
    padding-left: 5px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.social-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: all 0.3s ease;
    font-size: 0;
}

.social-icon:hover {
    background-color: #5568d3;
    transform: translateY(-3px);
}

.footer-bottom {
    background-color: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
    text-align: center;
    color: #a0aec0;
    font-size: 14px;
}

/* Responsividade */
@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    .footer {
        padding: 40px 15px 0;
    }
}

@media (max-width: 480px) {
    .footer-container {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .footer-section h4 {
        font-size: 16px;
    }

    .footer-bottom {
        font-size: 12px;
    }
}
</style>