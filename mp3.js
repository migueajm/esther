(function () {
	const playlist = [
		{ title: 'Harmony', artist: 'Pufino', src: 'https://migueajm.github.io/esther/mp3/7.mp3', artText: 'HA' },
		{ title: 'Love in Japan', artist: 'Milky Wayvers', src: 'https://migueajm.github.io/esther/mp3/5.mp3', artText: 'LJ' },
		{ title: 'Rainy', artist: 'Pufino', src: 'https://migueajm.github.io/esther/mp3/4.mp3', artText: 'RA' },
		{ title: 'Love', artist: 'Amine Maxwell', src: 'https://migueajm.github.io/esther/mp3/2.mp3', artText: 'LV' },
		{ title: 'Coming Of Age', artist: 'Hazelwood', src: 'https://migueajm.github.io/esther/mp3/3.mp3', artText: 'CA' },
		{ title: 'Silhouette', artist: 'Moavii', src: 'https://migueajm.github.io/esther/mp3/6.mp3', artText: 'SI' },
		{ title: 'Beautiful Liar', artist: 'AgusAlvarez & Markvard ', src: 'https://migueajm.github.io/esther/mp3/1.mp3', artText: 'BL' },
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