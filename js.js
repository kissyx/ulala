const music = document.getElementById('music'); 
music.volume = 0.5;

let muteCount = 0;
const muteMsgs = [
  "Неа! 💜",
  "BTS не сдаётся!",
  "Ты же любишь нас, Вика!",
  "Dynamite продолжается! 🎵",
  "Попробуй ещё раз... 😈",
  "ARMY FOREVER! 💜"
];

function startSite() {
  const splash = document.getElementById('splash');
  splash.classList.add('hide');
  setTimeout(() => splash.remove(), 500);
  music.play();
  createConfetti();
  setTimeout(() => {
    showPopup("💜 Вика, мы знаем!", "Ты тайный ARMY и это нормально! BTS тебя любит 방탄소년단 💜🎵");
  }, 2000);
}

function tryMute() {
  const btn = document.querySelector('.mute-btn');
  btn.textContent = '🔊 ' + muteMsgs[muteCount % muteMsgs.length];
  muteCount++;
  music.volume = Math.min(1, music.volume + 0.15);
  showPopup("Не получится! 😈", "BTS специально для тебя, Вика! Музыка будет играть вечно 💜");
}

function showPopup(title, text) {
  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupText').textContent = text;
  document.getElementById('popup').classList.add('show');
}

function closePopup() {
  document.getElementById('popup').classList.remove('show');
}

function createConfetti() {
  const colors = ['#7B2FBE', '#C77DFF', '#E0AAFF', '#fff', '#FFD700'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      animation-duration: ${Math.random() * 3 + 2}s;
      animation-delay: ${Math.random() * 2}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }
}

setInterval(createConfetti, 6000);

const members = [
  { name: 'RM', photo:'rm.avif', fact: 'Лидер BTS! IQ 148 😱' },
  { name: 'Jin', photo:'jin.webp', fact: 'Самый красивый в мире 💜' },
  { name: 'Suga', photo:'suga.webp', fact: 'Гений музыки! Min Yoongi 🎵' },
  { name: 'J-Hope', photo:'j-hope.webp', fact: 'Sunshine! ☀️ Всегда улыбается' },
  { name: 'Jimin', photo:'jimin.webp',fact: 'Танцует лучше всех 💃' },
  { name: 'V', photo:'v.webp', fact: 'Kim Taehyung — самый загадочный 💜' },
  { name: 'Jungkook', photo:'junkook.webp', fact: 'Golden Maknae — умеет всё!' },
];

const grid = document.getElementById('photosGrid');
members.forEach(m => {
  const card = document.createElement('div');
  card.className = 'photo-card';
  card.innerHTML = `
    <img src="${m.photo}" style="width:80%;height:80%;object-fit:cover;border-radius:12px;">
    <span class="member-name">${m.name}</span>
    `;
  card.onclick = () => showPopup(`${m.emoji} ${m.name}`, m.fact);
  grid.appendChild(card);
});

const floatingEmojis = ['💜', '🎵', '⭐', '✨', '💫', '🎤'];
floatingEmojis.forEach((emoji, i) => {
  const el = document.createElement('div');
  el.className = 'floating-emoji';
  el.textContent = emoji;
  el.style.cssText = `
    left: ${Math.random() * 85 + 5}vw;
    top: ${Math.random() * 85 + 5}vh;
    animation-duration: ${3 + i * 0.7}s;
    animation-delay: ${i * 0.4}s;
  `;
  document.body.appendChild(el);
});

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = 'BTS будет скучать по тебе, Вика! 💜';
});