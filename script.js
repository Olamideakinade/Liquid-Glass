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

function countUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

function startCounting() {
    const boxes = document.querySelectorAll('.box h5');
    const targets = [114, 300, 604];
    
    boxes.forEach((box, index) => {
        countUp(box, targets[index]);
    });
}

// Ball drop animation starts on page load
window.addEventListener('load', () => {
    setTimeout(startCounting, 1200);
});

// Mouse tracking interaction
const imgElement = document.querySelector('.img');

document.addEventListener('mousemove', (e) => {
    const img = document.querySelector('.img');
    if (!img) return;
    
    const rect = img.getBoundingClientRect();
    const imgCenterX = rect.left + rect.width / 2;
    const imgCenterY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const distX = mouseX - imgCenterX;
    const distY = mouseY - imgCenterY;
    
    const distance = Math.sqrt(distX * distX + distY * distY);
    const maxDistance = 150;
    
    if (distance < maxDistance) {
        const pushStrength = (maxDistance - distance) / maxDistance * 15;
        const angle = Math.atan2(distY, distX);
        
        const pushX = Math.cos(angle) * pushStrength;
        const pushY = Math.sin(angle) * pushStrength;
        
        img.style.transform = `translate(${pushX}px, ${pushY}px)`;
    } else {
        img.style.transform = 'translate(0, 0)';
    }
});

// Checkbox slider interaction
const checkbox = document.getElementById('check');

checkbox.addEventListener('change', () => {
    const img = document.querySelector('.img');
    if (checkbox.checked) {
        img.style.animation = 'ballDrop 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards, ballBounce 2s ease-in-out 1.2s infinite, ballGlowDark 3s ease-in-out 1.2s infinite';
    } else {
        img.style.animation = 'ballDrop 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards, ballBounce 2s ease-in-out 1.2s infinite, ballGlow 3s ease-in-out 1.2s infinite';
    }
});

// Intersection Observer for counting
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
        }
    });
});

const boxContainer = document.querySelector('.boxin');
if (boxContainer) {
    observer.observe(boxContainer);
}


