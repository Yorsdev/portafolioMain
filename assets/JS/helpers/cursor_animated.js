function initCustomCursor() {

    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);
  
    let clickCount = 0;
    let lastClickTime = 0;
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  
    document.addEventListener("click", () => {
      clickCount++;
    
      const now = Date.now();
      if (now - lastClickTime < 500) {
        if (clickCount >= 5) {
          mostrarImagen();
          clickCount = 0;
        }
      } else {
        clickCount = 1;
      }
      lastClickTime = now;
    });
  
    function mostrarImagen() {
      const img = document.createElement("img");
      img.src = "alerta.png";
      img.style.position = "fixed";
      img.style.left = "50%";
      img.style.top = "50%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.zIndex = "10000";
      document.body.appendChild(img);
  
      setTimeout(() => {
        img.remove();
      }, 2000);
    }
  }
  
  export default initCustomCursor;