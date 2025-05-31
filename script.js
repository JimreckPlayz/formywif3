
// Typing effect
const letterText = "I don’t know how the universe conspired to bring you into my life, but every day I’m grateful that it did. You have this rare, quiet magic, the kind that doesn't ask for attention but fills every part of my world with warmth. With you, even silence feels like music, and the ordinary feels extraordinary. Your smile is my favorite sight, your voice my favorite sound, and your love, it’s become the home I never knew I needed. You make me want to be better, not because you ask it of me, but because being loved by you feels like the most beautiful gift I could ever earn. No matter where life takes us, know this, my heart is yours, freely, fully, forever. With all of me, Jim";
let i = 0;
function typeWriter() {
    if (i < letterText.length) {
        document.getElementById("letter").innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// Moving No Button
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
});

// Secret page unlock
document.addEventListener("keydown", function(e) {
    window.nameInput = (window.nameInput || "") + e.key;
    if (window.nameInput.toLowerCase().includes("valerie")) {
        document.getElementById("secretPage").style.display = "block";
    }
});

// Shooting stars effect
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];

function Star(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speed = Math.random() * 3 + 1;
}
Star.prototype.update = function() {
    this.x += this.speed;
    this.y += this.speed;
};
Star.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "#add8e6";
    ctx.fill();
};

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star, index) => {
        star.update();
        star.draw();
        if (star.x > canvas.width || star.y > canvas.height) {
            stars.splice(index, 1);
        }
    });
    requestAnimationFrame(animateStars);
}
animateStars();

canvas.addEventListener("click", function(e) {
    stars.push(new Star(e.clientX, e.clientY));
});

function openModal(imgElement) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("lightboxModal").style.display = "none";
}

document.getElementById("yesBtn").addEventListener("click", () => {
    const loveMessage = document.createElement("div");
    loveMessage.innerHTML = "💙 I knew it! I love you so much, Valerie! 💙";
    loveMessage.style.position = "fixed";
    loveMessage.style.top = "50%";
    loveMessage.style.left = "50%";
    loveMessage.style.transform = "translate(-50%, -50%)";
    loveMessage.style.padding = "20px";
    loveMessage.style.background = "#001f3f";
    loveMessage.style.color = "#add8e6";
    loveMessage.style.border = "2px solid #00aaff";
    loveMessage.style.borderRadius = "20px";
    loveMessage.style.boxShadow = "0 0 20px #00aaff";
    loveMessage.style.fontSize = "24px";
    loveMessage.style.zIndex = "9999";
    loveMessage.style.animation = "fadeInScale 0.5s ease-out";

    document.body.appendChild(loveMessage);
    
    setTimeout(() => {
        loveMessage.remove();
    }, 5000);
});

