// BOTÃO EXPLORAR

document
.getElementById("exploreBtn")
.addEventListener("click", () => {

document
.querySelector("#sobre")
.scrollIntoView({
behavior:"smooth"
});

});

// CONTADORES

function animateCounter(id,target){

const element =
document.getElementById(id);

let count = 0;

const interval =
setInterval(()=>{

count++;

element.textContent =
count + "%";

if(count >= target){

clearInterval(interval);

}

},30);

}

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter("counter1",75);
animateCounter("counter2",90);
animateCounter("counter3",100);

}

});

});

observer.observe(
document.querySelector(".future-section")
);

// EFEITO DOS CARDS

const cards =
document.querySelectorAll(
".info-box,.impact-card,.timeline-content,.project-card"
);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =

`radial-gradient(
circle at ${x}px ${y}px,
rgba(255,255,255,0.14),
rgba(255,255,255,0.05)
)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background =
"rgba(255,255,255,0.05)";

});

});

// PLANETA 3D

document.addEventListener("mousemove",(e)=>{

const planet =
document.querySelector(".planet");

if(!planet) return;

const x =
(window.innerWidth/2 - e.pageX)/40;

const y =
(window.innerHeight/2 - e.pageY)/40;

planet.style.transform =

`translate(-50%,-50%)
rotateY(${x}deg)
rotateX(${y}deg)`;

});

// GRÁFICOS

const graphObserver =
new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

document.querySelector(".water").style.width="75%";

document.querySelector(".fertilizer").style.width="65%";

document.querySelector(".productivity").style.width="90%";

}

});

const graph =
document.querySelector(".graphs-section");

if(graph){

graphObserver.observe(graph);

}

const questions = [

{
question:"Qual tecnologia é usada para monitorar plantações?",

answers:[
"Patins",
"Drone",
"Bicicleta"
],

correct:1,

explanation:
"Os drones conseguem monitorar grandes áreas agrícolas rapidamente, identificando pragas e necessidades de irrigação."
},

{
question:"Qual recurso é economizado pela irrigação inteligente?",

answers:[
"Pedras",
"Água",
"Areia"
],

correct:1,

explanation:
"Sensores analisam a umidade do solo e liberam apenas a quantidade necessária de água."
},

{
question:"O que a agricultura de precisão utiliza?",

answers:[
"Máquinas de escrever",
"Drones e sensores",
"Televisões"
],

correct:1,

explanation:
"A agricultura de precisão utiliza drones, sensores e GPS para coletar dados da plantação."
},

{
question:"Qual é um impacto negativo da tecnologia?",

answers:[
"Aumento das árvores",
"Lixo eletrônico",
"Produção de oxigênio"
],

correct:1,

explanation:
"O descarte incorreto de equipamentos eletrônicos pode contaminar o meio ambiente."
},

{
question:"Qual é o principal objetivo da sustentabilidade?",

answers:[
"Aumentar a poluição",
"Preservar recursos para o futuro",
"Gastar mais energia"
],

correct:1,

explanation:
"A sustentabilidade busca atender às necessidades atuais sem comprometer as futuras gerações."
}

];

let currentQuestion = 0;
let score = 0;

const questionElement =
document.getElementById("question");

const answersElement =
document.getElementById("answers");

const feedbackElement =
document.getElementById("feedback");

function shuffleAnswers(question){

const options =
question.answers.map((answer,index)=>({

text: answer,
correct: index === question.correct

}));

options.sort(() => Math.random() - 0.5);

question.answers =
options.map(option => option.text);

question.correct =
options.findIndex(option => option.correct);

}
questions.forEach(question => {
shuffleAnswers(question);
});

function loadQuestion(){

const q =
questions[currentQuestion];

questionElement.textContent =
q.question;

answersElement.innerHTML = "";

feedbackElement.textContent = "";

q.answers.forEach((answer,index)=>{

const btn =
document.createElement("button");

btn.textContent = answer;

btn.onclick = () =>
checkAnswer(index);

answersElement.appendChild(btn);

});

}

function checkAnswer(index){

const q =
questions[currentQuestion];

if(index === q.correct){

score++;

feedbackElement.innerHTML =
"✅ Correto!<br><br>" +
q.explanation;

}else{

feedbackElement.innerHTML =
"❌ Incorreto!<br><br>" +
q.explanation;

}

setTimeout(()=>{

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResult();

}

},4000);

}

function showResult(){

document.getElementById("quizBox").style.display =
"none";

document.getElementById("finalResult").innerHTML =

`
<h3>
Você acertou ${score} de ${questions.length} perguntas!
</h3>
`;

document.getElementById("certificateBtn")
.style.display = "inline-block";

}

loadQuestion();

document
.getElementById("certificateBtn")
.addEventListener("click",()=>{

const nome =
"Murilo Cage Rosa";

alert(
`🏆 CERTIFICADO

Certificamos que ${nome}
concluiu o Quiz Agrinho 2026

Pontuação: ${score}/${questions.length}

Tema:
Robótica e Automação no Impacto Ambiental`
);

});

// LEITOR DE VOZ

const voiceBtn =
document.getElementById("voiceBtn");

if(voiceBtn){

voiceBtn.addEventListener("click",()=>{

const texto =
document.body.innerText;

const fala =
new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";

speechSynthesis.cancel();
speechSynthesis.speak(fala);

});

}

// AUMENTAR FONTE

const fontBtn =
document.getElementById("fontBtn");

if(fontBtn){

fontBtn.addEventListener("click",()=>{

document.body.classList.toggle(
"big-font"
);

});

}

// ALTO CONTRASTE

const contrastBtn =
document.getElementById("contrastBtn");

if(contrastBtn){

contrastBtn.addEventListener("click",()=>{

document.body.classList.toggle(
"high-contrast"
);

});

}

// MODO DALTÔNICO

const colorBtn =
document.getElementById("colorBlindBtn");

if(colorBtn){

colorBtn.addEventListener("click",()=>{

document.body.classList.toggle(
"colorblind-mode"
);

});

}

// FUNDO ESPACIAL

const canvas =
document.getElementById("space");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles = [];

const mouse = {
x:null,
y:null
};

window.addEventListener("mousemove",(e)=>{

mouse.x = e.x;
mouse.y = e.y;

});

window.addEventListener("resize",()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

});

class Particle{

constructor(){

this.x =
Math.random()*canvas.width;

this.y =
Math.random()*canvas.height;

this.size =
Math.random()*2 + 1;

this.speedX =
(Math.random()-0.5)*0.4;

this.speedY =
(Math.random()-0.5)*0.4;

}

update(){

this.x += this.speedX;
this.y += this.speedY;

if(this.x < 0 || this.x > canvas.width){

this.speedX *= -1;

}

if(this.y < 0 || this.y > canvas.height){

this.speedY *= -1;

}

const dx =
mouse.x - this.x;

const dy =
mouse.y - this.y;

const distance =
Math.sqrt(dx*dx + dy*dy);

if(distance < 120){

this.x -= dx/35;
this.y -= dy/35;

}

}

draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);

ctx.fillStyle =
"rgba(0,255,213,0.8)";

ctx.fill();

}

}

function initParticles(){

particles = [];

for(let i=0;i<150;i++){

particles.push(
new Particle()
);

}

}

function connectParticles(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){

const dx =
particles[a].x -
particles[b].x;

const dy =
particles[a].y -
particles[b].y;

const distance =
dx*dx + dy*dy;

if(distance < 12000){

ctx.beginPath();

ctx.strokeStyle =
"rgba(0,255,213,0.08)";

ctx.moveTo(
particles[a].x,
particles[a].y
);

ctx.lineTo(
particles[b].x,
particles[b].y
);

ctx.stroke();

}

}

}

}

// ESTRELAS CADENTES

function shootingStar(){

let x =
Math.random()*canvas.width;

let y =
Math.random()*300;

let length = 0;

function animateStar(){

ctx.beginPath();

ctx.moveTo(
x + length,
y
);

ctx.lineTo(
x + length - 150,
y + 50
);

ctx.strokeStyle =
"rgba(255,255,255,0.9)";

ctx.lineWidth = 2;

ctx.stroke();

length += 20;

if(length < 500){

requestAnimationFrame(
animateStar
);

}

}

animateStar();

}

setInterval(()=>{

shootingStar();

},5000);

// ANIMAÇÃO PRINCIPAL

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.update();
p.draw();

});

connectParticles();

requestAnimationFrame(
animate
);

}

initParticles();
animate();

const progress =
document.getElementById("progress");

const loadingText =
document.getElementById("loadingText");

let value = 0;

const loading =
setInterval(()=>{

    value++;

    progress.style.width =
    value + "%";

    if(value == 30)
    loadingText.innerText =
    "Carregando robótica...";

    if(value == 60)
    loadingText.innerText =
    "Conectando sustentabilidade...";

    if(value >= 100){

        clearInterval(loading);

        document
        .getElementById("loader")
        .style.opacity = "0";

        setTimeout(()=>{

            document
            .getElementById("loader")
            .remove();

        },1000);

    }

},30);

document.addEventListener("mousemove",(e)=>{

const x =
(e.clientX/window.innerWidth-0.5)*40;

const y =
(e.clientY/window.innerHeight-0.5)*40;

document.body.style.backgroundPosition =
`${x}px ${y}px`;

document.querySelector(".noise")
.style.transform =
`translate(${x/4}px,${y/4}px)`;

});
