const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});

let fireworks = [];
let particles = [];

function rand(max) { return Math.random() * max; }

function Firework() {
    this.x = w / 2;
    this.y = h;
    this.tx = rand(w);
    this.ty = rand(h / 2);
    this.history = [];
    this.done = false;
}
Firework.prototype.update = function () {
    let dx = this.tx - this.x;
    let dy = this.ty - this.y;
    let dist = Math.sqrt(dx*dx + dy*dy);

    this.x += dx * 0.03;
    this.y += dy * 0.03;
    this.history.push({ x: this.x, y: this.y });

    if (this.history.length > 20) this.history.shift();
    if (dist < 10) {
        this.explode();
        this.done = true;
    }
};
Firework.prototype.explode = function () {
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: this.x, y: this.y,
            vx: Math.cos(i) * Math.random()*3,
            vy: Math.sin(i) * Math.random()*3,
            alpha: 1
        });
    }
};

function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,w,h);

    if (Math.random() < 0.05) fireworks.push(new Firework());

    fireworks.forEach((fw,i) => {
        fw.update();
        ctx.beginPath();
        ctx.strokeStyle = "#b89bff";
        fw.history.forEach(p => ctx.lineTo(p.x,p.y));
        ctx.stroke();
        if (fw.done) fireworks.splice(i,1);
    });

    particles.forEach((p,i)=>{
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        ctx.fillStyle = `rgba(204,155,255,${p.alpha})`;
        ctx.fillRect(p.x,p.y,3,3);
        if (p.alpha <= 0) particles.splice(i,1);
    });

    requestAnimationFrame(loop);
}
loop();

const title = document.querySelector(".rainbow-text");
const original = title.innerText;
title.innerHTML = "";

original.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.innerHTML = char === " " ? "&nbsp;&nbsp;" : char;
    span.style.animationDelay = `${i * 0.08}s`;
    title.appendChild(span);
});