document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".tarjeta");
  
    tarjetas.forEach((tarjeta, index) => {
      setTimeout(() => {
        tarjeta.classList.add("aparecer");
      }, index * 300); 
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".titulo-nosotros");

  const observarElementos = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 } 
  );

  elementos.forEach((elemento) => observarElementos.observe(elemento));
});
