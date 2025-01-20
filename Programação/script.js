function showMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(() => {
        message.style.opacity = 1;
        message.style.transform = "translateY(0)";
    }, 100);

    const heart = document.querySelector(".heart");
    heart.style.transform = "scale(0.9) rotate(-45deg)";
    setTimeout(() => {
        heart.style.transform = "scale(1) rotate(-45deg)";
    }, 300);
}

// Função para gerar corações flutuantes
function generateFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = '❤️';  // Coração emoji
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 4 + 3}s`; // Animação de 3 a 7 segundos
        heart.style.fontSize = `${Math.random() * 2 + 2}rem`;  // Tamanho aleatório para o coração
        container.appendChild(heart);

        // Remover o coração depois que a animação terminar
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 500); // Gerar um coração a cada 500ms
}

// Iniciar a geração de corações flutuantes
generateFloatingHearts();
