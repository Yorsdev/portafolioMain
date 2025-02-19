
  const lightEffect = document.createElement("div");

  function getLightEffect(params) {
    
    lightEffect.id = "light-effect";
    document.body.appendChild(lightEffect);
  
    document.addEventListener("mousemove", (e) => {
        lightEffect.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(206, 14, 193, 0.2) 3%, transparent 25%)`;
        lightEffect.style.opacity = "1";
    });
  
    document.addEventListener("mouseleave", () => {
        lightEffect.style.opacity = "0";
    });
  }


export default getLightEffect;
