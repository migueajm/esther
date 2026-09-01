
/* ======================================================
   INTRO
====================================================== */

window.addEventListener("load",()=>{

  setTimeout(()=>{

    document.getElementById("intro").classList.add("hidden");

  },1500);

});

/* ======================================================
   STARS CANVAS
====================================================== */

const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize",resizeCanvas);

const stars = [];

for(let i=0;i<250;i++){

  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    radius:Math.random()*1.5,
    speed:Math.random()*0.3,
    opacity:Math.random()
  });

}

function animateStars(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  stars.forEach(star=>{

    star.y += star.speed;

    if(star.y > canvas.height){
      star.y = 0;
    }

    ctx.beginPath();
    ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
    ctx.fill();

  });

  requestAnimationFrame(animateStars);

}

animateStars();

/* ======================================================
   SHOOTING STARS
====================================================== */

function createShootingStar(){

  const star = document.createElement("div");

  star.className = "shooting-star";

  star.style.top = Math.random()*40 + "vh";
  star.style.left = Math.random()*100 + "vw";

  document.body.appendChild(star);

  setTimeout(()=>{

    star.remove();

  },2000);

}

setInterval(createShootingStar,7000);

/* ======================================================
   MUSIC
====================================================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;
let currentTrack = "";
const regularTracks = [1,2,3,4,5,6,7,8].map(number=>`./mp3/${number}.mp3`);

function availableTracks(){
  return new Date().getMonth() === 11
    ? [...regularTracks,"./mp3/12.mp3"]
    : regularTracks;
}

function selectRandomTrack(){
  const tracks=availableTracks();
  const candidates=tracks.filter(track=>track!==currentTrack);
  const pool=candidates.length ? candidates : tracks;
  currentTrack=pool[Math.floor(Math.random()*pool.length)];
  bgMusic.src=currentTrack;
  bgMusic.load();
}

selectRandomTrack();

musicBtn.addEventListener("click",()=>{

  if(!playing){

    selectRandomTrack();
    bgMusic.play().catch(()=>{});

  }else{

    bgMusic.pause();

  }

});

bgMusic.addEventListener("play",()=>{
  playing=true;
  musicBtn.innerHTML="❚❚";
  musicBtn.setAttribute("aria-label","Pausar música");
  musicBtn.title="Pausar música";
});

bgMusic.addEventListener("pause",()=>{
  playing=false;
  musicBtn.innerHTML="♫";
  musicBtn.setAttribute("aria-label","Reproducir música aleatoria");
  musicBtn.title="Reproducir música aleatoria";
});

bgMusic.addEventListener("ended",()=>{
  selectRandomTrack();
  bgMusic.play().catch(()=>{});
});

/* ======================================================
   TRANSLATIONS
====================================================== */

const translations = {

  es:{

    badge:"Un pequeño universo para Miriam",

    title_1:"Entre galaxias",
    title_2:"y sueños",

    subtitle:"Este lugar existe para recordarte que incluso en los días silenciosos, sigues brillando como una estrella lejana en medio del universo.",

    greetings:[
      "Hoy este rincón existe para recordarte que tu luz también cuenta en los días silenciosos.",
      "El universo cambia cada noche, y esta página cambia para dejarte hoy una razón nueva para sonreír.",
      "Si el día se siente demasiado rápido, quédate un momento: hay algo bonito escrito especialmente para ti.",
      "No todas las estrellas se ven a simple vista. Tu forma de iluminar la vida de otros es una de ellas.",
      "Hay días comunes que se vuelven extraordinarios con un solo pensamiento: qué suerte que existes, Miriam.",
      "Este pequeño universo vuelve a despertar hoy solamente para decirte algo que quizá necesitas escuchar.",
      "Entre todo el ruido del mundo, este lugar siempre guardará un instante de calma para ti."
    ],

    scroll:"Desliza lentamente ✨",

    section_title:"Pequeños recordatorios del universo",

    section_description:"A veces el corazón necesita pausas suaves, como estrellas descansando entre nebulosas.",

    daily_kicker:"Una estrella para hoy",
    signature:"Con todo mi cariño, Migue",

    card1_title:"Eres suficiente",
    card1_text:"Incluso en los días donde todo parece pesado, tu existencia sigue teniendo luz.",

    card2_title:"Todo florece a su tiempo",
    card2_text:"Las galaxias tardan millones de años en formarse. Las cosas hermosas no nacen con prisa.",

    card3_title:"La sensibilidad es poder",
    card3_text:"Seguir siendo gentil en un mundo duro es una forma silenciosa de valentía.",

    cardSets:[
      [["Tu esencia deja huella","No necesitas hacer ruido para ser inolvidable; tu manera de ser permanece."],["También puedes descansar","Tu valor no depende de cuánto logres hoy. Respirar y cuidarte también es avanzar."],["Lo bonito te encuentra","Todo el cariño que entregas encuentra, tarde o temprano, el camino de regreso a ti."]],
      [["Eres más fuerte de lo que crees","Cada dificultad que superaste vive ahora dentro de ti convertida en fortaleza."],["Tu sonrisa importa","Hay días que mejoran por completo gracias a una sonrisa tuya, aunque quizá no lo notes."],["Confía en tu ritmo","No vas tarde. Estás construyendo tu historia al tiempo exacto que necesita tu corazón."]],
      [["Tu sensibilidad es un regalo","Sentir profundamente no te hace frágil; te permite encontrar belleza donde otros no miran."],["Mereces cosas bonitas","No por lo que haces por otros, sino sencillamente por ser tú."],["Hoy también cuenta","Incluso un paso pequeño puede acercarte a un lugar que un día parecía imposible."]],
      [["Tu luz es muy tuya","No se parece a ninguna otra, y por eso el mundo sería distinto sin ti."],["Puedes empezar de nuevo","Cada amanecer trae permiso para soltar, respirar y volver a intentarlo."],["Alguien cree en ti","Incluso cuando tú dudas, hay quien mira tu historia y siente una admiración inmensa."]]
    ],

    quote_author:"— Para Miriam",

    letter_1:"Querida Miriam,",

    letter_2:"Espero que este pequeño rincón del universo siempre pueda darte tranquilidad.",

    letter_3:"Hay personas que miran al cielo buscando respuestas, pero quizá la verdadera belleza está en simplemente existir bajo las mismas estrellas.",

    letter_4:"Incluso cuando la vida parece caótica, el universo sigue creando galaxias silenciosamente.",

    letter_5:"Y quizá tú también eres una de ellas.",

    wish_title:"Pide un deseo",

    wish_description:"El universo siempre escucha las cosas que nacen desde el corazón.",

    wish_button:"Ver una estrella fugaz ✨",

    footer:"Hecho con polvo estelar ✦",

    wishes:[
      "Incluso las estrellas más lejanas siguen brillando para alguien.",
      "Quizá el universo también sonríe cuando tú lo haces.",
      "Las noches oscuras también crean constelaciones hermosas.",
      "Tu luz existe incluso cuando no puedes verla.",
      "A veces el universo tarda… pero nunca olvida."
    ],

    daily:[
      "Hoy el universo tiene una misión sencilla: recordarte lo profundamente especial que eres.",
      "No tienes que hacer nada extraordinario para brillar. Siendo tú, ya haces más bonito mi mundo.",
      "Si hoy el día pesa, aquí tienes un lugar pequeño donde descansar y recordar cuánto vales.",
      "Entre millones de casualidades, coincidir contigo sigue siendo mi favorita.",
      "Tu sonrisa es una de esas cosas que quisiera guardar para volver a ella en cualquier día gris.",
      "Admiro tu fuerza, pero también quiero que sepas que no siempre tienes que ser fuerte.",
      "Ojalá hoy puedas mirarte con una parte del cariño y la admiración con que yo te miro.",
      "De todas las estrellas de este universo, siempre sabría reconocer tu luz."
    ],

    quotes:[
      "Quizá todos somos polvo estelar intentando aprender a brillar.",
      "Incluso las galaxias necesitan oscuridad para existir.",
      "El universo también tiene momentos silenciosos.",
      "Hay belleza incluso en las estrellas que parecen lejanas.",
      "Tal vez el cielo se vea bonito porque tú también existes."
    ],

    birthday:"Feliz cumpleaños Miriam ✨🌙",
    birthday_eyebrow:"31 de agosto · El universo está de fiesta",
    birthday_title:"Feliz vida, Miriam",
    birthday_copy:"Hoy no celebramos solamente un año más. Celebramos tu forma de existir, la calma que regalas, la fuerza con la que avanzas y todas las vidas que haces más bonitas sin darte cuenta. Que este nuevo viaje alrededor del sol te devuelva, multiplicado, todo el amor y la luz que dejas en el mundo.",
    birthday_enter:"Haz que el cielo celebre ✨"
  },

  en:{

    badge:"A little universe made for Miriam",

    title_1:"Between galaxies",
    title_2:"and dreams",

    subtitle:"This place exists to remind you that even on quiet days, you still shine like a distant star somewhere in the universe.",

    greetings:[
      "Today this little corner exists to remind you that your light matters, even on silent days.",
      "The universe changes every night, and this page changes to leave you a new reason to smile today.",
      "If today feels too fast, stay for a moment: something beautiful was written especially for you.",
      "Not every star is visible. The way you light up other people's lives is one of them.",
      "Ordinary days become extraordinary with one thought: how lucky the world is that you exist, Miriam.",
      "This tiny universe wakes again today just to tell you something you may need to hear.",
      "Among all the noise in the world, this place will always keep a quiet moment for you."
    ],

    scroll:"Scroll slowly ✨",

    section_title:"Little reminders from the universe",

    section_description:"Sometimes the heart needs soft pauses, like stars resting between nebulas.",

    daily_kicker:"A star for today",
    signature:"With all my affection, Migue",

    card1_title:"You are enough",
    card1_text:"Even on the days when everything feels heavy, your existence still carries light.",

    card2_title:"Everything blooms in time",
    card2_text:"Galaxies take millions of years to form. Beautiful things are never rushed.",

    card3_title:"Softness is power",
    card3_text:"Remaining gentle in a hard world is a silent form of bravery.",

    cardSets:[
      [["Your essence leaves a mark","You do not need to be loud to be unforgettable; the way you are stays with people."],["You may rest too","Your worth is not measured by what you achieve today. Caring for yourself is progress too."],["Beauty finds you","All the love you give will eventually find its way back to you."]],
      [["You are stronger than you think","Every challenge you overcame now lives inside you as strength."],["Your smile matters","Some days become entirely better because of your smile, even if you never notice."],["Trust your timing","You are not late. Your story is unfolding at the pace your heart needs."]],
      [["Your sensitivity is a gift","Feeling deeply is not weakness; it lets you find beauty where others do not look."],["You deserve beautiful things","Not because of what you do for others, but simply because you are you."],["Today counts too","Even one small step can bring you closer to somewhere that once felt impossible."]],
      [["Your light is yours alone","There is no other like it, and the world would be different without you."],["You can begin again","Every sunrise gives you permission to let go, breathe and try once more."],["Someone believes in you","Even when you doubt, someone looks at your story with immense admiration."]]
    ],

    quote_author:"— For Miriam",

    letter_1:"Dear Miriam,",

    letter_2:"I hope this little corner of the universe always gives you peace.",

    letter_3:"Some people look at the sky searching for answers, but maybe the real beauty is simply existing beneath the same stars.",

    letter_4:"Even when life feels chaotic, the universe keeps creating galaxies silently.",

    letter_5:"And maybe you are one of them too.",

    wish_title:"Make a wish",

    wish_description:"The universe always listens to things born from the heart.",

    wish_button:"See a shooting star ✨",

    footer:"Made with stardust ✦",

    wishes:[
      "Even the most distant stars still shine for someone.",
      "Maybe the universe smiles when you do too.",
      "Dark nights also create beautiful constellations.",
      "Your light exists even when you cannot see it.",
      "Sometimes the universe takes time… but never forgets."
    ],

    daily:[
      "Today the universe has one simple mission: to remind you how deeply special you are.",
      "You do not have to do anything extraordinary to shine. Being you already makes my world better.",
      "If today feels heavy, here is a little place to rest and remember how much you are worth.",
      "Among millions of coincidences, finding you is still my favorite one.",
      "Your smile is one of those things I wish I could save for every gray day.",
      "I admire your strength, but I also want you to know you do not always have to be strong.",
      "I hope today you can see yourself with some of the affection and admiration I see in you.",
      "Of all the stars in this universe, I would always recognize your light."
    ],

    quotes:[
      "Maybe we are all stardust learning how to shine.",
      "Even galaxies need darkness to exist.",
      "The universe also has silent moments.",
      "There is beauty even in distant stars.",
      "Maybe the sky looks beautiful because you exist too."
    ],

    birthday:"Happy Birthday Miriam ✨🌙",
    birthday_eyebrow:"August 31 · The universe is celebrating",
    birthday_title:"Happy life, Miriam",
    birthday_copy:"Today we celebrate more than another year. We celebrate the way you exist, the peace you give, the strength with which you move forward, and every life you make brighter without realizing it. May this new journey around the sun return all the love and light you give to the world, multiplied.",
    birthday_enter:"Make the sky celebrate ✨"
  }

};

let currentLang = localStorage.getItem("language") || "es";
let dynamicSeed = Math.floor(Math.random()*100000);
let lastDynamicRefresh = Date.now();
let lastReminderIndexes = [];

function animateRefresh(elements){
  elements.forEach(element=>{
    element.classList.remove("content-refresh");
    void element.offsetWidth;
    element.classList.add("content-refresh");
  });
}

function refreshDynamicContent(animate=true){
  const lang = currentLang;
  const now = new Date();
  const source = lang === "es" && typeof appPhrases !== "undefined" && appPhrases.length
    ? appPhrases
    : translations[lang].daily;
  const greetingIndex = dynamicSeed % translations[lang].greetings.length;
  const messageIndex = (dynamicSeed * 17 + 7) % source.length;

  document.querySelector(".subtitle").textContent = translations[lang].greetings[greetingIndex];
  document.getElementById("dailyMessage").textContent = source[messageIndex];
  document.getElementById("dailyDate").textContent = new Intl.DateTimeFormat(
    lang === "es" ? "es-MX" : "en-US",
    {weekday:"long",day:"numeric",month:"long"}
  ).format(now);
  if(animate){
    animateRefresh([
      document.querySelector(".subtitle"),
      document.getElementById("dailyMessage")
    ]);
  }
  lastDynamicRefresh = Date.now();
}

function refreshReminderCards(animate=true){
  const existingCards = translations[currentLang].cardSets.flat();
  const cardBank = currentLang === "es" && typeof motivationalCardMessages !== "undefined"
    ? [...existingCards, ...motivationalCardMessages]
    : existingCards;
  const availableIndexes = cardBank
    .map((_, index)=>index)
    .filter(index=>!lastReminderIndexes.includes(index));
  const selectedIndexes = [];

  while(selectedIndexes.length < 3){
    const pool = availableIndexes.filter(index=>!selectedIndexes.includes(index));
    selectedIndexes.push(pool[Math.floor(Math.random()*pool.length)]);
  }

  document.querySelectorAll(".cards .card").forEach((card,index)=>{
    const [title, text] = cardBank[selectedIndexes[index]];
    card.querySelector("h3").textContent = title;
    card.querySelector("p").textContent = text;
  });
  lastReminderIndexes = selectedIndexes;

  if(animate) animateRefresh([...document.querySelectorAll(".cards .card")]);
}

function rotateDynamicContent(){
  const previousSeed = dynamicSeed;
  const lang = currentLang;
  const sourceLength = lang === "es" && typeof appPhrases !== "undefined" && appPhrases.length
    ? appPhrases.length
    : translations[lang].daily.length;
  const greetingLength = translations[lang].greetings.length;
  do{
    dynamicSeed=Math.floor(Math.random()*100000);
  }while(
    dynamicSeed % greetingLength === previousSeed % greetingLength ||
    (dynamicSeed * 17 + 7) % sourceLength === (previousSeed * 17 + 7) % sourceLength
  );
  refreshDynamicContent(true);
}

/* ======================================================
   LANGUAGE
====================================================== */

function changeLanguage(lang){

  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{

    const key = el.getAttribute("data-i18n");

    el.innerHTML = translations[lang][key];

  });

  const randomQuote = translations[lang].quotes[
    Math.floor(Math.random()*translations[lang].quotes.length)
  ];

  document.getElementById("dynamicQuote").innerHTML = `"${randomQuote}"`;

  refreshDynamicContent(false);
  refreshReminderCards(false);

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.remove("active");
  });

  document.querySelector(`[data-lang="${lang}"]`)
    .classList.add("active");

  localStorage.setItem("language",lang);

}

document.querySelectorAll(".lang-btn").forEach(btn=>{

  btn.addEventListener("click",()=>{

    changeLanguage(btn.dataset.lang);

  });

});

changeLanguage(currentLang);

setInterval(()=>{
  if(!document.hidden && document.hasFocus()) rotateDynamicContent();
},60000);

setInterval(()=>{
  if(!document.hidden) refreshReminderCards(true);
},60000);

window.addEventListener("focus",()=>{
  if(Date.now()-lastDynamicRefresh>=60000) rotateDynamicContent();
});

/* ======================================================
   WISH MODE
====================================================== */

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

wishButton.addEventListener("click",()=>{

  createShootingStar();

  const wishes = translations[currentLang].wishes;

  const randomWish = wishes[
    Math.floor(Math.random()*wishes.length)
  ];

  wishMessage.innerHTML = `"${randomWish}"`;

  wishMessage.classList.add("show");

});

/* ======================================================
   BIRTHDAY MODE
====================================================== */

const birthdayMonth = 12;
const birthdayDay = 13;

const today = new Date();

const birthdayExperience = document.getElementById("birthdayExperience");
const birthdayCanvas = document.getElementById("birthdayCanvas");
const birthdayCtx = birthdayCanvas.getContext("2d");
const birthdayWishStream = document.getElementById("birthdayWishStream");
let birthdayActive = false;
let birthdayAnimation;
let birthdayStars = [];
let fireworks = [];
let sparks = [];
let wishTimer;
let memoryTimer;
let currentMemory = 0;

/* Agrega cada foto en `image` (por ejemplo: "./img/recuerdos/viaje.jpg")
   y reemplaza su mensaje. Con `image: ""` se muestra el placeholder. */
const birthdayMemories = [
  {image:"",message:"Aquí vivirá un momento bonito que siempre valdrá la pena recordar."},
  {image:"",message:"Un espacio para guardar una sonrisa, una aventura y todo lo que hizo especial ese día."},
  {image:"",message:"Porque los mejores recuerdos no se quedan en una foto: también se quedan en el corazón."}
];

function renderMemory(index){
  currentMemory=(index+birthdayMemories.length)%birthdayMemories.length;
  const memory=birthdayMemories[currentMemory];
  const visual=document.getElementById("memoryVisual");
  visual.textContent="";

  if(memory.image){
    const photo=document.createElement("img");
    photo.src=memory.image;
    photo.alt=memory.alt || `Recuerdo ${currentMemory+1}`;
    visual.appendChild(photo);
  }else{
    const placeholder=document.createElement("div");
    placeholder.className="memory-placeholder";
    placeholder.innerHTML='<span class="memory-placeholder-icon">✦</span><span>Una fotografía especial llegará aquí</span>';
    visual.appendChild(placeholder);
  }

  document.getElementById("memoryNumber").textContent=`Recuerdo ${currentMemory+1} de ${birthdayMemories.length}`;
  document.getElementById("memoryMessage").textContent=memory.message;
  document.querySelectorAll(".memory-dot").forEach((dot,dotIndex)=>{
    dot.classList.toggle("active",dotIndex===currentMemory);
    dot.setAttribute("aria-current",dotIndex===currentMemory ? "true" : "false");
  });
}

function setupMemoryCarousel(){
  const copy=currentLang === "es"
    ? {title:"Nuestros recuerdos",subtitle:"Pequeños instantes que merecen quedarse para siempre.",previous:"Recuerdo anterior",next:"Siguiente recuerdo"}
    : {title:"Our memories",subtitle:"Little moments worth keeping forever.",previous:"Previous memory",next:"Next memory"};
  document.getElementById("memoriesTitle").textContent=copy.title;
  document.getElementById("memoriesSubtitle").textContent=copy.subtitle;
  document.getElementById("memoryPrevious").setAttribute("aria-label",copy.previous);
  document.getElementById("memoryNext").setAttribute("aria-label",copy.next);
  const dots=document.getElementById("memoryDots");
  dots.textContent="";
  birthdayMemories.forEach((_,index)=>{
    const dot=document.createElement("button");
    dot.className="memory-dot";
    dot.setAttribute("aria-label",`${copy.title} ${index+1}`);
    dot.addEventListener("click",()=>renderMemory(index));
    dots.appendChild(dot);
  });
  renderMemory(currentMemory);
}

function sizeBirthdaySky(){
  const ratio = Math.min(window.devicePixelRatio || 1,2);
  birthdayCanvas.width = innerWidth * ratio;
  birthdayCanvas.height = innerHeight * ratio;
  birthdayCanvas.style.width = innerWidth + "px";
  birthdayCanvas.style.height = innerHeight + "px";
  birthdayCtx.setTransform(ratio,0,0,ratio,0,0);
  birthdayStars = Array.from({length:Math.min(260,Math.floor(innerWidth/4))},()=>({
    x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5+.25,
    a:Math.random()*.7+.2,p:Math.random()*.025+.008
  }));
}

function launchFirework(x=Math.random()*innerWidth,y=innerHeight*(.12+Math.random()*.5)){
  fireworks.push({x:x,y:innerHeight,tx:x,ty:y,trail:[],hue:Math.random()*360});
}

function explodeFirework(firework){
  const count = innerWidth < 600 ? 55 : 85;
  for(let i=0;i<count;i++){
    const angle=Math.PI*2*i/count, speed=1.5+Math.random()*5;
    sparks.push({x:firework.x,y:firework.y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
      life:1,decay:.009+Math.random()*.013,hue:firework.hue+Math.random()*35});
  }
}

function drawBirthdaySky(){
  if(!birthdayActive) return;
  birthdayCtx.fillStyle="rgba(2,3,12,.2)";
  birthdayCtx.fillRect(0,0,innerWidth,innerHeight);
  birthdayStars.forEach(star=>{
    star.a += star.p;
    if(star.a>1 || star.a<.18) star.p*=-1;
    birthdayCtx.beginPath();birthdayCtx.arc(star.x,star.y,star.r,0,Math.PI*2);
    birthdayCtx.fillStyle=`rgba(255,255,255,${star.a})`;birthdayCtx.fill();
  });
  if(Math.random()<.025) launchFirework();
  fireworks.forEach((f,index)=>{
    f.trail.push([f.x,f.y]);if(f.trail.length>9)f.trail.shift();
    f.x+=(f.tx-f.x)*.055;f.y+=(f.ty-f.y)*.055;
    birthdayCtx.beginPath();f.trail.forEach((point,i)=>i?birthdayCtx.lineTo(...point):birthdayCtx.moveTo(...point));
    birthdayCtx.strokeStyle=`hsla(${f.hue},100%,75%,.85)`;birthdayCtx.lineWidth=2;birthdayCtx.stroke();
    if(Math.hypot(f.tx-f.x,f.ty-f.y)<8){explodeFirework(f);fireworks.splice(index,1)}
  });
  sparks.forEach((spark,index)=>{
    spark.x+=spark.vx;spark.y+=spark.vy;spark.vy+=.035;spark.vx*=.992;spark.life-=spark.decay;
    birthdayCtx.beginPath();birthdayCtx.arc(spark.x,spark.y,1.6,0,Math.PI*2);
    birthdayCtx.fillStyle=`hsla(${spark.hue},100%,70%,${spark.life})`;birthdayCtx.fill();
    if(spark.life<=0)sparks.splice(index,1);
  });
  birthdayAnimation=requestAnimationFrame(drawBirthdaySky);
}

function sendBirthdayWish(){
  if(!birthdayActive) return;
  const wishes = currentLang === "es" && typeof appPhrases !== "undefined" ? appPhrases : translations[currentLang].wishes;
  const wish=document.createElement("span");
  wish.className="flying-wish";
  wish.textContent="✦ "+wishes[Math.floor(Math.random()*wishes.length)];
  wish.style.top=(8+Math.random()*84)+"%";
  wish.style.setProperty("--duration",(10+Math.random()*10)+"s");
  wish.style.setProperty("--drift",(-80+Math.random()*160)+"px");
  birthdayWishStream.appendChild(wish);
  wish.addEventListener("animationend",()=>wish.remove());
}

function openBirthdayExperience(){
  birthdayExperience.classList.add("show");
  document.body.style.overflow="hidden";
  birthdayActive=true;sizeBirthdaySky();drawBirthdaySky();
  for(let i=0;i<4;i++)setTimeout(()=>launchFirework(),i*350);
  sendBirthdayWish();wishTimer=setInterval(sendBirthdayWish,1700);
  setupMemoryCarousel();memoryTimer=setInterval(()=>renderMemory(currentMemory+1),7000);
}

function closeBirthdayExperience(){
  birthdayActive=false;cancelAnimationFrame(birthdayAnimation);clearInterval(wishTimer);clearInterval(memoryTimer);
  birthdayExperience.classList.remove("show");document.body.style.overflow="";
  birthdayWishStream.textContent="";
}

document.getElementById("birthdayEnter").addEventListener("click",()=>{
  for(let i=0;i<10;i++)setTimeout(()=>launchFirework(innerWidth*(.08+Math.random()*.84),innerHeight*(.08+Math.random()*.48)),i*180);
  if(!playing){bgMusic.play().then(()=>{playing=true;musicBtn.innerHTML="❚❚"}).catch(()=>{});}
});
document.getElementById("birthdayClose").addEventListener("click",closeBirthdayExperience);
document.getElementById("memoryPrevious").addEventListener("click",()=>renderMemory(currentMemory-1));
document.getElementById("memoryNext").addEventListener("click",()=>renderMemory(currentMemory+1));
document.getElementById("memoryCarousel").addEventListener("mouseenter",()=>clearInterval(memoryTimer));
document.getElementById("memoryCarousel").addEventListener("mouseleave",()=>{
  if(birthdayActive){clearInterval(memoryTimer);memoryTimer=setInterval(()=>renderMemory(currentMemory+1),7000);}
});
document.addEventListener("keydown",event=>{
  if(!birthdayActive) return;
  if(event.key==="ArrowLeft") renderMemory(currentMemory-1);
  if(event.key==="ArrowRight") renderMemory(currentMemory+1);
  if(event.key==="Escape") closeBirthdayExperience();
});
window.addEventListener("resize",()=>{if(birthdayActive)sizeBirthdaySky()});

if(
  today.getMonth()+1 === birthdayMonth &&
  today.getDate() === birthdayDay
){
  setTimeout(openBirthdayExperience,2800);
}
