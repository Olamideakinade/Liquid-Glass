let label = document.querySelector("label");
let ball = document.querySelector(".ball");
let con = document.querySelector(".container")

ball.addEventListener("click", ()=>{
   ball.style.transitionDuration = "0.8s";
   const currentTransform = window.getComputedStyle(ball).transform;
   if (currentTransform === "none" || currentTransform === "matrix(1, 0, 0, 1, -8, 0)") {
      ball.style.transform = "translateX(20px)";
      con.style.transitionDuration = "0.5s";
      con.style.backdropFilter = "blur(5px)";
   } else {
      ball.style.transform = "translateX(-8px)";
      con.style.backdropFilter = "blur(100px)";

   }
})


