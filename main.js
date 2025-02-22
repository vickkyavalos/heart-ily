document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById('boton');
    let texto = document.getElementById('texto');
    let recargar = document.getElementById('recargar');

    //el texto y el botón estan ocultos al cargar la página
    texto.style.display = 'none';
    recargar.style.display = 'none';

    boton.addEventListener('click', function() {
        texto.style.display = 'block';
        recargar.style.display = 'flex'; 
        startFloatingHearts();
    });

    recargar.addEventListener('click', function() {
        location.reload();
    });

    function startFloatingHearts() {
        setInterval(createHeart, 300);
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Entre 3 y 5s
        document.querySelector('.bg_heart').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
