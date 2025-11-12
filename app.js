const NAME = "Esther Mazariegos";
const BIRTHDAY_MONTH = 12;
const BIRTHDAY_DAY = 7;

function todayLocal() {
	const d = new Date();
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function getNextBirthdayDate() {
	const now = new Date();
	let year = now.getFullYear();
	const bd = new Date(year, BIRTHDAY_MONTH - 1, BIRTHDAY_DAY);
	if (bd < now) bd.setFullYear(year + 1);
	return bd;
}

function createStars() {
	const starsContainer = document.getElementById('stars');
	starsContainer.textContent = '';
	const count = 40;
	for (let i = 0; i < count; i++) {
		const s = document.createElement('div');
		s.className = 'star';
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const size = 1 + Math.random() * 3;
		s.style.top = top + '%';
		s.style.left = left + '%';
		s.style.width = size + 'px';
		s.style.height = size + 'px';
		s.style.opacity = 0.5 + Math.random() * 0.8;
		starsContainer.appendChild(s);
	}
}
createStars();


function generate365Phrases(name) {
	const starts = [
		"Hoy quiero recordarte que", "Nunca olvides que", "Que sepas que", "Recuerda siempre que",
		"Hoy y todos los días", "Permíteme decirte que", "Que tengas presente que", "No pares de creer que",
		"Por si lo necesitabas escuchar hoy,", "De todo corazón te digo que", "A veces hace falta recordarte que",
		"Solo quería decirte que", "Hoy más que nunca quiero recordarte que", "No está de más decirte que"
	];

	const qualities = [
		"eres increíble 💫", "tu sonrisa ilumina todo a tu alrededor 😊", "tu fortaleza inspira 💪",
		"tu ternura conmueve 💖", "eres valiente y capaz 🌟", "tu alegría contagia ☀️", "eres luz ✨", "eres única 🌷",
		"tu forma de ser enamora 💞", "tienes un corazón gigante ❤️", "eres fuerza y calma a la vez 🌊",
		"tienes una mente brillante 🧠✨", "tu inteligencia deslumbra 🌟", "tu creatividad no tiene límites 🎨",
		"tu forma de pensar es admirable 💭", "tus sueños son tan grandes como tú 🌈",
		"tu determinación es poderosa ⚡️", "tienes una esencia que no se olvida 🌹",
		"eres tan hermosa que el mundo parece detenerse un momento 💘",
		"tus ojos tienen una luz especial ✨👁️", "tu sonrisa es mi rincón favorito del día 😊",
		"eres tan bonita por dentro como por fuera 🌺", "cada gesto tuyo transmite belleza y dulzura 💐",
		"tu mirada tiene algo mágico 💫", "tus labios esconden la ternura más sincera 💋",
		"eres de esas personas que hacen que todo se vea más lindo 🌸"
	];

	const specifics = [
		"cada paso que das tiene sentido 🚶‍♀️", "los pequeños detalles hablan de ti 🌼", "haces mejores los días 🌞",
		"tu presencia cambia todo a mejor 🌻", "tu risa hace el mundo más amable 😂", "tu gusto por la vida inspira 🌈",
		"mereces lo mejor siempre 🌹", "siempre encuentro paz cuando pienso en ti 🌙",
		"tu entusiasmo es contagioso 🔥", "tu mirada dice más que mil palabras 👀",
		"tu forma de ver el mundo es especial 💫", "tus logros me llenan de orgullo 🏆",
		"no hay reto que no puedas superar 💪", "lo que haces, lo haces con el corazón ❤️",
		"inspiras a quien tiene la suerte de conocerte ✨", "tu belleza no solo se ve, se siente 💞",
		"cuando sonríes, el día se ilumina 🌞", "tu energía hace brillar cada momento 🔆",
		"eres arte en movimiento 🎨", "hasta el silencio se siente bonito cuando estás tú 🌸"
	];

	const closers = [
		"y yo estoy orgulloso de ti 💖.", "y quiero verte sonreír siempre 😊.", "y te admiro mucho 🌟.",
		"y me siento afortunado de conocerte 🍀.", "y te mereces todo lo bueno 🌈.", "y gracias por ser tú ❤️.",
		"y siempre tendrás mi apoyo 🤝.", "y quiero verte brillar ✨.",
		"porque el mundo necesita personas como tú 🌍.", "y cada día me haces creer más en ti 💪.",
		"y no imaginas cuánto significas para mí 💞.", "y estoy feliz de compartir esta vida contigo 💫.",
		"y tus ojos merecen ver solo cosas hermosas 💐.", "y tu sonrisa merece todos los motivos para brillar 😍."
	];

	const motivational = [
		"Sigue creyendo en ti, porque yo ya lo hago 💪❤️.",
		"No importa lo difícil que parezca, tú puedes con todo 🌈.",
		"Nunca subestimes tu poder, tienes una fuerza increíble ⚡️.",
		"Eres capaz de lograr lo que te propongas 🌟.",
		"El mundo es mejor porque tú estás en él 🌍💖.",
		"Si hoy dudas de ti, recuerda todo lo que ya has superado 🦋.",
		"No hay meta imposible para alguien con tu corazón y mente 💭💪.",
		"Tienes tanto por dar, tanto por vivir, tanto por brillar ✨.",
		"Eres una inspiración constante para mí 🌹.",
		"Cuando creas que no puedes, recuerda que siempre estaré aquí para recordarte que sí ❤️."
	];

	const specialTemplates = [
		`Eres como ese atardecer que no me cansaría de ver, 🥰${name}🥰.`,
		`Si alguna vez dudas, recuerda que alguien piensa en ti con cariño: yo 💞.`,
		`Tu sonrisa tiene la capacidad de mejorar mi día; gracias por eso 😊.`,
		`Cuando pienso en lo bonito, termino pensando en ti 🌸.`,
		`Hoy deseo que te pasen cosas buenas; te lo mereces de verdad 🌈.`,
		`Tu forma de ser convierte momentos simples en recuerdos especiales 💫.`,
		`Me inspiras a ser mejor cada día 💪.`,
		`Contigo, las cosas pequeñas se vuelven memorables 💖.`,
		`Espero que hoy encuentres mil razones para sonreír 😊.`,
		`Eres ese tipo de persona que hace que todo valga la pena 🌹.`,
		`🥰${name}🥰, si el mundo se olvidara de lo especial que eres, yo estaría ahí para recordártelo ❤️.`,
		`Tu forma de pensar, de sentir y de luchar me deja sin palabras 🌟.`,
		`Nunca cambies, porque tal como eres, ya eres maravillosa 🌷.`,
		`Eres la prueba viviente de que la bondad y la inteligencia pueden ir juntas 💞.`,
		`Cada día contigo es una razón más para creer en lo bonito de la vida 🌅.`,
		`Tus ojos son el refugio más bonito que conozco 👀💖.`,
		`Tu sonrisa tiene la magia de calmar cualquier tormenta 🌤️.`,
		`Eres tan hermosa que hasta el tiempo se detiene cuando sonríes ⏳✨.`,
		`No hay palabra que describa lo linda que eres, ${name} 🌸.`,
		`Tu belleza no solo se ve, se siente, se vive 💞.`
	];

	/*const phrases = [];
	for(let i=0;i<365;i++){
		// occasionally pick a special template
		if (i % 35 === 0) {
			phrases.push(specialTemplates[(i/35) % specialTemplates.length]);
			continue;
		}
		const s = starts[Math.floor(Math.random()*starts.length)];
		const q = qualities[Math.floor(Math.random()*qualities.length)];
		const sp = specifics[Math.floor(Math.random()*specifics.length)];
		const c = closers[Math.floor(Math.random()*closers.length)];
		const connector = [" ", " — " , ", "][Math.floor(Math.random()*3)];
		const phrase = `${s} ${q} ${sp} ${c}`.replace(/\s+/g,' ').trim();
		phrases.push(phrase);
	}*/
	/*const phrases = [
		'Y es que contigo quiero vivir todo eso que no he vivido con alguien más, quiero proponerte todos los planes que jamás he propuesto, quiero leerte, cantarte y cuidarte, quiero abrazarte cada tarde, quiero llorar de felicidad. Y es que contigo solo busco poder hacer las cosas bien, por primera vez, porque quiero, porque eres tú, porque es contigo🥰.',
		'Que sepas que eres valiente y capaz 🌟 no hay reto que no puedas superar 💪 y quiero verte brillar ✨.',
		'Que sepas que eres tan hermosa que el mundo parece detenerse un momento 💘 tu belleza no solo se ve, se siente 💞.'
		'Permíteme decirte que tienes un corazón gigante ❤️ mereces lo mejor siempre 🌹 y quiero verte sonreír siempre 😊.'
		'Y es que contigo quiero vivir todo eso que no he vivido con alguien más, quiero proponerte todos los planes que jamás he propuesto, quiero leerte, cantarte y cuidarte, quiero abrazarte cada tarde, quiero llorar de felicidad. Y es que contigo solo busco poder hacer las cosas bien, por primera vez, porque quiero, porque eres tú, porque es contigo🥰.',
		'🌞 Cada amanecer trae una oportunidad para ser feliz, y pensar en ti ya hace que el día empiece bien 💕.'

	];*/
	const phrases = appPhrases;
	while (phrases.length < 365) phrases.push(`Hoy pienso en ti, 🥰${name}🥰, y deseo que tengas un día lleno de luz.\n🥰`);
	return phrases.sort(function () { return Math.random() - 0.5 });
}

const phrases = generate365Phrases(NAME);

function dayOfYearIndex(d) {
	const start = new Date(d.getFullYear(), 0, 0);
	const diff = d - start;
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);
	return (day - 1 + 365) % 365;
}

let currentDate = todayLocal();
function showForDate(d) {
	currentDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	const idx = dayOfYearIndex(currentDate);
	const phraseEl = document.getElementById('phrase');
	const dateLine = document.getElementById('dateLine');
	const formatter = new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
	const textDate = formatter.format(currentDate);
	phraseEl.textContent = phrases[idx];
	dateLine.textContent = `${textDate}`;
	const isBirthday = (currentDate.getDate() === BIRTHDAY_DAY && (currentDate.getMonth() + 1) === BIRTHDAY_MONTH);
	if (isBirthday) { showBirthdayOverlay(); } else hideBirthdayOverlay();
}

const newPhrase = () => {
	const phraseEl = document.getElementById('phrase');
	const index = (Math.floor(Math.random() * 365) + 1);
	phraseEl.textContent = phrases[index] ?? 'Y es que contigo quiero vivir todo eso que no he vivido con alguien más, quiero proponerte todos los planes que jamás he propuesto, quiero leerte, cantarte y cuidarte, quiero abrazarte cada tarde, quiero llorar de felicidad. Y es que contigo solo busco poder hacer las cosas bien, por primera vez, porque quiero, porque eres tú, porque es contigo🥰.';
	createStars();
}

setInterval(() => newPhrase(), 20000);

document.getElementById('prevBtn')?.addEventListener('click', () => {
	const prev = new Date(currentDate); prev.setDate(prev.getDate() - 1); showForDate(prev);
});
document.getElementById('nextBtn')?.addEventListener('click', () => {
	const next = new Date(currentDate); next.setDate(next.getDate() + 1); showForDate(next);
});
document.getElementById('todayBtn')?.addEventListener('click', () => showForDate(todayLocal()));

document.getElementById('shareBtn')?.addEventListener('click', async () => {
	const phrase = document.getElementById('phrase').textContent;
	const dateLine = document.getElementById('dateLine').textContent;
	try {
		await navigator.share?.({ title: `Frase para ${NAME}`, text: `${phrase}\n\n${dateLine}` });
	} catch (e) {
		await navigator.clipboard?.writeText(`${phrase}\n\n${dateLine}`);
		alert('Frase copiada al portapapeles. Puedes pegarla en tu app favorita.');
	}
});

/* countdown updater */
function updateCountdown() {
	const now = new Date();
	const bd = getNextBirthdayDate();
	const diff = bd - now;
	if (diff <= 0) {
		document.getElementById('countdown').textContent = "¡Hoy!";
		showBirthdayOverlay();
		startFireworks();
		return;
	}
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const secs = Math.floor((diff % (1000 * 60)) / 1000);
	document.getElementById('countdown').textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

const overlay = document.getElementById('birthdayOverlay');
const canvas = document.getElementById('fireworksCanvas');
let fireworksCtx, fwWidth, fwHeight, fwRunning = false;
function showBirthdayOverlay() {
	overlay.style.display = 'flex';
	canvas.style.display = 'block';
	startFireworks();
}
function hideBirthdayOverlay() {
	overlay.style.display = 'none';
	stopFireworks();
}

function setupCanvas() {
	canvas.width = canvas.clientWidth = document.getElementById('card').clientWidth;
	canvas.height = canvas.clientHeight = document.getElementById('card').clientHeight;
	fireworksCtx = canvas.getContext('2d');
	fwWidth = canvas.width; fwHeight = canvas.height;
}
window.addEventListener('resize', () => { setupCanvas(); });

let particles = [];
function launchBurst(x, y) {
	const colors = ['#ffd56b', '#ff6fa3', '#9be6ff', '#b98bff', '#fff'];
	const count = 36 + Math.floor(Math.random() * 24);
	for (let i = 0; i < count; i++) {
		const angle = Math.random() * Math.PI * 2;
		const speed = 2 + Math.random() * 5;
		const vx = Math.cos(angle) * speed;
		const vy = Math.sin(angle) * speed;
		const life = 50 + Math.floor(Math.random() * 60);
		particles.push({ x, y, vx, vy, life, age: 0, color: colors[Math.floor(Math.random() * colors.length)], size: 1 + Math.random() * 2 });
	}
}
function startFireworks() {
	if (fwRunning) return;
	setupCanvas();
	fwRunning = true;
	(function loop() {
		if (!fwRunning) return;
		fireworksCtx.clearRect(0, 0, fwWidth, fwHeight);
		if (Math.random() < 0.04) launchBurst(100 + Math.random() * (fwWidth - 200), 80 + Math.random() * (fwHeight - 160));
		for (let i = particles.length - 1; i >= 0; i--) {
			const p = particles[i];
			p.x += p.vx;
			p.y += p.vy;
			p.vy += 0.06; // gravity
			p.age++;
			fireworksCtx.globalAlpha = 1 - (p.age / p.life);
			fireworksCtx.fillStyle = p.color;
			fireworksCtx.beginPath();
			fireworksCtx.arc(p.x, p.y, p.size + 0.8 * Math.sin(p.age / 3), 0, Math.PI * 2);
			fireworksCtx.fill();
			if (p.age > p.life) particles.splice(i, 1);
		}
		requestAnimationFrame(loop);
	})();
}
function stopFireworks() { fwRunning = false; particles = []; canvas.style.display = 'none'; }

showForDate(todayLocal());

overlay.addEventListener('click', () => hideBirthdayOverlay());

(function init() {
	console.info("Sitio de frases cargado para", NAME);
})();

(function () {
	const playlist = [
		{ title: 'Rainy', artist: 'Pufino', src: 'https://migueajm.github.io/esther/mp3/4.mp3', artText: 'RA' },
		{ title: 'Harmony', artist: 'Pufino', src: 'https://migueajm.github.io/esther/mp3/7.mp3', artText: 'HA' },
		{ title: 'Love in Japan', artist: 'Milky Wayvers', src: 'https://migueajm.github.io/esther/mp3/5.mp3', artText: 'LJ' },
		{ title: 'Beautiful Liar', artist: 'AgusAlvarez & Markvard ', src: 'https://migueajm.github.io/esther/mp3/1.mp3', artText: 'BL' },
		{ title: 'Love', artist: 'Amine Maxwell', src: 'https://migueajm.github.io/esther/mp3/2.mp3', artText: 'LV' },
		{ title: 'Coming Of Age', artist: 'Hazelwood', src: 'https://migueajm.github.io/esther/mp3/3.mp3', artText: 'CA' },
		{ title: 'Silhouette', artist: 'Moavii', src: 'https://migueajm.github.io/esther/mp3/6.mp3', artText: 'SI' },
	];
	const audio = document.getElementById('audio');
	const playBtn = document.getElementById('btn-play');
	const prevBtn = document.getElementById('btn-prev');
	const nextBtn = document.getElementById('btn-next');
	const muteBtn = document.getElementById('btn-mute');
	const progress = document.getElementById('progress');
	const timeCurrent = document.getElementById('time-current');
	const timeDuration = document.getElementById('time-duration');
	const title = document.getElementById('track-title');
	const artist = document.getElementById('track-artist');
	const art = document.getElementById('art');

	let idx = 0;
	let isPlaying = false;

	function loadTrack(i) {
		const t = playlist[i];
		audio.src = t.src;
		title.textContent = t.title;
		artist.textContent = t.artist;
		art.textContent = t.artText || '';
		progress.value = 0;
		timeCurrent.textContent = '0:00';
		timeDuration.textContent = '0:00';
	}

	function formatTime(s) {
		if (isNaN(s) || s === Infinity) return '0:00';
		const m = Math.floor(s / 60);
		const sec = Math.floor(s % 60).toString().padStart(2, '0');
		return m + ':' + sec;
	}

	playBtn.addEventListener('click', () => {
		if (isPlaying) audio.pause(); else audio.play();
	});

	audio.addEventListener('play', () => { isPlaying = true; playBtn.textContent = '⏸'; });
	audio.addEventListener('pause', () => { isPlaying = false; playBtn.textContent = '▶️'; });

	prevBtn.addEventListener('click', () => { idx = (idx - 1 + playlist.length) % playlist.length; loadTrack(idx); audio.play(); });
	nextBtn.addEventListener('click', () => { idx = (idx + 1) % playlist.length; loadTrack(idx); audio.play(); });

	muteBtn.addEventListener('click', () => { audio.muted = !audio.muted; muteBtn.textContent = audio.muted ? '🔈' : '🔊'; });

	audio.addEventListener('loadedmetadata', () => {
		progress.max = Math.floor(audio.duration);
		timeDuration.textContent = formatTime(audio.duration);
	});

	audio.addEventListener('timeupdate', () => {
		progress.value = Math.floor(audio.currentTime);
		timeCurrent.textContent = formatTime(audio.currentTime);
	});

	progress.addEventListener('input', (e) => {
		audio.currentTime = e.target.value;
	});

	audio.addEventListener('ended', () => { nextBtn.click(); });

	const widget = document.getElementById('my-audio-widget');
	widget.tabIndex = 0;
	widget.addEventListener('keydown', (e) => {
		if (e.code === 'Space') { e.preventDefault(); playBtn.click(); }
		if (e.code === 'ArrowRight') audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
		if (e.code === 'ArrowLeft') audio.currentTime = Math.max(0, audio.currentTime - 10);
	});

	loadTrack(idx);

	window.SimpleAudioWidget = {
		load: (arr) => { if (Array.isArray(arr) && arr.length) { playlist.length = 0; arr.forEach(x => playlist.push(x)); idx = 0; loadTrack(0); } },
		play: () => audio.play(),
		pause: () => audio.pause(),
		next: () => nextBtn.click(),
		prev: () => prevBtn.click(),
	};
})();
