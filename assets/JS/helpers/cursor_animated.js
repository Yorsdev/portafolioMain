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
        if (clickCount >= 4) {
          showImage();
          clickCount = 0;
        }
      } else {
        clickCount = 1;
      }
      lastClickTime = now;
    });
  
    function showImage() {
      const img = document.createElement("img");
      img.src = "/assets/imgs/message_by_Overclicked.png";
      img.style.position = "fixed";
      img.style.left = "50%";
      img.style.top = "50%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.zIndex = "50";
      img.style.width = "450px";
      img.style.boxShadow = "rgba(228, 5, 120, 0.56) 0px 22px 190px 40px";
      img.style.borderRadius = "8px"
      document.body.appendChild(img);
  
      setTimeout(() => {
        img.remove();
      }, 3100);
    }
  }
  
  export default initCustomCursor;
