/* ==========================================================================
   FOREVER 27 — INTERACTIVE LOGIC (Aldza Salwatul Aisy)
   Programming Style: NVIDIA-performance (Canvas 60fps, Optimized Loops), 
   Apple-aesthetics (Precise Transitions), Fashion Web (Ultra-Fluid Animations)
   ========================================================================== */

// --- FALLBACK MOCK DATA ---
// Used if data.json fails to load (CORS block on file:/// or network errors)
const FALLBACK_DATA = {
  "birthday": {
    "targetISO": "2026-07-26T00:00:00+07:00",
    "name": "Aldza Salwatul Aisy",
    "age": 20,
    "surpriseHeading": "Happy Birthday, Sayang! 🌸✨",
    "surpriseSubheading": "Selamat ulang tahun yang ke-20 untuk kamu yang selalu bikin hari-hariku jadi jauh lebih indah."
  },
  "timeline": [
    {
      "date": "Pertama Kali Kenal",
      "title": "📸 Fotbar Pertama Kita 🌸",
      "story": "Foto ini jadi saksi momen pertama kita mengabadikan kenangan bersama. Mungkin bagi orang lain ini cuma sebuah foto biasa, tapi buat aku, ini adalah awal dari banyak cerita yang ingin terus kita ciptakan.<br><br>Masih ingat rasanya waktu itu? Ada sedikit canggung, sedikit malu, tapi di balik senyum yang kita tampilkan, ternyata ada perasaan yang pelan-pelan mulai tumbuh. Siapa sangka, dari satu foto sederhana itu, sekarang kita sudah punya begitu banyak kenangan indah yang nggak akan pernah bisa aku lupakan.<br><br>Setiap kali aku melihat foto ini, aku selalu tersenyum. Karena dari sinilah semuanya terasa semakin nyata. Terima kasih sudah mau berdiri di sampingku waktu itu, dan semoga sampai kapan pun, posisi itu tetap jadi tempatmu.",
      "image": "assets/images/timeline-1.jpg"
    },
    {
      "date": "First Date",
      "title": "Tawa Bersama yang Pertama ☕",
      "story": "Waktu pertama kali kita nongkrong bareng di kafe. Kita ngobrol dan ketawa lepas tanpa beban sama sekali. Di situ aku langsung ngerasa nyaman banget, kayak nemu tempat pulang yang paling pas.",
      "image": "assets/images/timeline-2.jpg"
    },
    {
      "date": "Ngelewatin Masalah",
      "title": "Kita yang Saling Nguatin 💪",
      "story": "Pas kita lagi ngadepin hari-hari yang berat. Hubungan kita emang gak selalu mulus, tapi karena ada kamu yang selalu ngedukung dan nemenin, semua masalah rasanya jadi jauh lebih ringan.",
      "image": "assets/images/timeline-3.jpg"
    },
    {
      "date": "Jalan-Jalan Seru",
      "title": "Petualangan Kita 🗺️",
      "story": "Momen kita jalan-jalan bareng. Capek, kadang nyasar, tapi seru banget karena perginya sama kamu. Setiap sudut tempat yang kita lewati selalu punya cerita manis sendiri.",
      "image": "assets/images/timeline-4.jpg"
    },
    {
      "date": "Masa Depan",
      "title": "Bareng Kamu Terus 💍",
      "story": "Mulai hari ini, besok, dan seterusnya, aku pengen terus bareng kamu. Berjuang dan tumbuh bareng kamu adalah keputusan paling bahagia yang pernah aku ambil.",
      "image": "assets/images/timeline-5.jpg"
    }
  ],
  "gallery": [
    { "image": "assets/images/gallery-1.jpg", "caption": "Senyum kamu yang paling bikin hati aku tenang. Cantik banget deh." },
    { "image": "assets/images/gallery-2.jpg", "caption": "Ekspresi bahagia kamu waktu nerima kejutan, manis banget sumpah." },
    { "image": "assets/images/gallery-3.jpg", "caption": "Aura kamu di sini tuh hangat banget, bikin betah ngeliatnya." },
    { "image": "assets/images/gallery-4.jpg", "caption": "Vibes santai di alam terbuka, cocok banget sama kamu yang suka damai." },
    { "image": "assets/images/gallery-5.jpg", "caption": "Cantikmu yang natural, yang selalu bikin aku bersyukur punya kamu." },
    { "image": "assets/images/gallery-6.jpg", "caption": "Cantik banget di tengah taman bunga, senyummu ngalahin semua bunganya. 🌸" },
    { "image": "assets/images/gallery-7.jpg", "caption": "Senyum manis yang selalu bikin hari aku jadi lebih cerah. 💖" },
    { "image": "assets/images/gallery-8.jpg", "caption": "Pose andalanmu di taman bunga, cantik dan percaya diri banget! ✨" }
  ],
  "letters": [
    {
      "title": "Dari Hatiku",
      "teaser": "Surat kecil pas kamu lagi capek...",
      "content": "Hai sayang, kalau kamu lagi capek atau ngerasa hari-harimu lagi berat, inget ya kalau aku selalu ada di sini buat dengerin dan nemenin kamu. Aku selalu bangga sama semua perjuangan kamu. Jangan lupa istirahat yang cukup ya!"
    },
    {
      "title": "Untuk Senyummu",
      "teaser": "Tentang senyum manis favoritku...",
      "content": "Senyuman kamu tuh kayak mood booster instan buat aku, Aldza. Capek aku langsung ilang kalau liat kamu senyum lepas. Jadi, tolong sering-sering senyum ya, biar duniaku ikutan cerah!"
    },
    {
      "title": "Sebuah Janji",
      "teaser": "Janji kecil yang pengen aku tepati...",
      "content": "Aku janji bakal selalu berusaha jadi tempat bersandar paling nyaman buat kamu. Tempat kamu bisa cerita apa aja, ketawa lepas, atau nangis tanpa perlu malu. Pokoknya, be yourself aja kalau sama aku."
    },
    {
      "title": "Masa Depan",
      "teaser": "Mimpi santai kita nanti...",
      "content": "Lucu kali ya kalau bayangin beberapa tahun lagi kita masih santai bareng sore-sore sambil ngeteh dan ngetawain hal konyol berdua. Aku beneran pengen terus ngelewatin hari-hari seru sama kamu, Aldza. Gak mau sama yang lain."
    }
  ],
  "reasons": [
    "Aku suka banget liat muka antusias kamu tiap lagi cerita hal yang kamu senangi. Binar matamu tuh bikin adem dan nagih banget.",
    "Sifat sabar dan perhatian kamu yang selalu bisa nenangin pikiran aku pas lagi stres atau capek kerja.",
    "Kamu itu paket lengkap yang bikin hidup aku jadi jauh lebih seru. Rasanya tiap hari jadi lebih menyenangkan sejak ada kamu."
  ],
  "loveQuotes": [
    "Gak butuh yang sempurna, yang penting itu kamu.",
    "Makasih ya udah selalu jadi alasan aku buat pengen cepet pulang.",
    "Bareng kamu, hal biasa aja rasanya jadi seru banget.",
    "Aku gak tau masa depan kayak gimana, tapi aku tau aku pengen ada kamu di dalamnya.",
    "Kamu tuh kayak kopi pagi, bikin hariku langsung siap dimulai.",
    "Bahagia itu sederhana: ngeliat kamu senyum dan tau aku penyebabnya.",
    "Cinta itu pas kita bisa receh bareng tanpa canggung.",
    "Gak pernah bosen ngeliat kamu, heran deh kok bisa selucu itu.",
    "Seharian gak ngabarin rasanya ada yang kurang banget.",
    "Aku sayang kamu, kemarin, sekarang, dan besok-besok juga."
  ],
  "longLetter": {
    "greeting": "Dear Aldza Salwatul Aisy, 🌸",
    "paragraphs": [
      "Selamat ulang tahun yang ke-20 ya, sayang. Hari ini spesial banget buat kamu, dan juga buat aku yang bersyukur banget semesta udah ngelahirin kamu ke dunia ini. Nemenin kamu berproses sampai sekarang adalah perjalanan paling berharga buat aku.",
      "Lewat website sederhana ini, aku pengen nyimpen sedikit dari sekian banyak rasa sayang dan banggaku ke kamu. Umur 20 ini semoga jadi langkah awal buat impian-impian besar kita yang lebih indah ke depannya.",
      "Makasih banyak ya udah jadi temen ngobrol paling asyik, pendengar yang sabar, dan mood booster-ku tiap hari. Makasih juga udah milih buat terus jalan bareng aku. Aku janji bakal selalu ada buat ngedukung mimpi-mimpi kamu.",
      "Semoga di usia 20 ini kamu makin sehat, dilancarin semua urusannya, bahagia terus, dan didekatkan dengan semua hal baik. Inget ya, sesibuk atau seberat apa pun hari kamu nanti, aku bakal selalu jadi rumah yang siap menyambut kamu pulang.",
      "Happy birthday, cintaku. Aku sayang kamu hari ini, besok, dan seterusnya. Yuk kita bareng-bareng terus sampai nanti! 💖"
    ],
    "closing": "Sayangkuu."
  }
};

// --- CORE APPLICATION VARIABLE ---
let appData = FALLBACK_DATA;
let countdownInterval = null;
let isBirthdayPassed = false;

// --- INITIALIZE APPLICATION ---
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupTheme();
  setupMouseGlow();
  setupClickParticles();
  setupScrollSpy();
});

// Fetch data.json or fallback
async function loadData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Network response not ok");
    appData = await response.json();
    console.log("Successfully loaded data.json");
  } catch (err) {
    console.warn("Using fallback local mockup database because of CORS/File system constraint:", err);
    appData = FALLBACK_DATA;
  } finally {
    initializeSections();
  }
}

function initializeSections() {
  setupCountdown();
  setupTimeline();
  setupLoveMeter();
  setupReasons();
  setupGallery();
  setupLetters();
  setupGiftBox();
  setupEndingSection();
  sfxManager.init();
  setupMiniGame();
  setupEasterEgg();
}

// --- SYSTEM A: THEME MANAGER (DARK/LIGHT) ---
function setupTheme() {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const activeTheme = localStorage.getItem("theme") || "dark";

  document.documentElement.setAttribute("data-theme", activeTheme);
  updateThemeIcon(activeTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const iconBtn = document.getElementById("dark-mode-toggle");
  if (theme === "light") {
    // Sun icon
    iconBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/>
      </svg>
    `;
  } else {
    // Moon icon
    iconBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
      </svg>
    `;
  }
}

// --- SYSTEM B: AMBIENT MOUSE GLOW TRACKER ---
function setupMouseGlow() {
  const glow = document.getElementById("mouse-glow");

  window.addEventListener("mousemove", (e) => {
    // Apple-style ambient glow moves instantly with mouse
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

// --- SYSTEM C: AMBIENT FLOATING PARTICLES CANVAS ---
function setupClickParticles() {
  const container = document.getElementById("floating-clicks-container");

  // Clicking anywhere generates beautiful floating hearts
  window.addEventListener("click", (e) => {
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("#game-canvas")) return;

    createClickHeart(e.clientX, e.clientY);
  });
}

function createClickHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "floating-click-emoji";
  heart.innerHTML = ["🌸", "💖", "❤️", "✨", "🌸", "💕"][Math.floor(Math.random() * 6)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.position = "fixed";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9998";
  heart.style.fontSize = `${Math.random() * 15 + 15}px`;
  heart.style.opacity = "1";
  heart.style.transition = "transform 1.2s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.2s";

  document.body.appendChild(heart);

  // Trigger animations in parallel thread (NVIDIA style rendering)
  setTimeout(() => {
    const driftX = (Math.random() - 0.5) * 150;
    const driftY = -150 - Math.random() * 100;
    const rotate = (Math.random() - 0.5) * 90;

    heart.style.transform = `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotate}deg) scale(1.5)`;
    heart.style.opacity = "0";
  }, 10);

  setTimeout(() => heart.remove(), 1300);
}

// Background Canvas (Snow / Blossoms / Floating Stars)
const canvas = document.getElementById("ambient-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class AmbientParticle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 3 + 1;
    this.speedY = -(Math.random() * 0.8 + 0.3);
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.type = Math.random() > 0.6 ? "blossom" : "star";
    this.angle = Math.random() * 360;
    this.spin = (Math.random() - 0.5) * 0.02;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.angle += this.spin;

    if (this.y < -20) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);

    if (this.type === "blossom") {
      ctx.rotate(this.angle);
      ctx.fillStyle = "rgba(255, 182, 193, 0.7)"; // soft pink petal
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 1.5, this.size, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = "rgba(211, 196, 252, 0.5)"; // lavender glowing star
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#d3c4fc";
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

// Generate starting particles
for (let i = 0; i < 45; i++) {
  const p = new AmbientParticle();
  p.y = Math.random() * canvas.height; // spread initially
  particles.push(p);
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
requestAnimationFrame(animateParticles);

// --- SYSTEM D: REAL-TIME FLIP COUNTDOWN & LOCK SCREEN ---
function setupCountdown() {
  const targetISO = appData.birthday.targetISO;
  const targetDate = new Date(targetISO);
  const lockScreen = document.getElementById("lock-screen");

  const typingTexts = [
    `Hari spesial untuk ${appData.birthday.name} segera tiba! 💖`,
    "Semoga kamu menyukai kejutan ini...",
    "Setiap detik sangatlah berharga bersamamu. ✨",
    "Selamanya, hanya kamu... 🌸"
  ];
  setupTyping(typingTexts);

  function updateClock() {
    const now = new Date();
    const diff = targetDate - now;

    // Check for dev mode in URL (?dev=true) to bypass lock
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.get('dev') === 'true';

    if (diff <= 0 || isDev) {
      // Unlock website
      document.body.classList.remove("locked");
      document.documentElement.classList.remove("locked");
      if (lockScreen) lockScreen.classList.add("hidden");

      if (diff <= 0) {
        // Countdown complete! Trigger Surprise
        clearInterval(countdownInterval);
        triggerSurprise();
        return;
      }
    } else {
      // Lock website
      document.body.classList.add("locked");
      document.documentElement.classList.add("locked");
      if (lockScreen) lockScreen.classList.remove("hidden");
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    flipDigit("days-unit", days);
    flipDigit("hours-unit", hours);
    flipDigit("minutes-unit", minutes);
    flipDigit("seconds-unit", seconds);

    // Update lock screen countdown
    if (document.getElementById("lock-days")) {
      document.getElementById("lock-days").textContent = String(days).padStart(2, '0');
      document.getElementById("lock-hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("lock-minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("lock-seconds").textContent = String(seconds).padStart(2, '0');
    }
  }

  updateClock();
  countdownInterval = setInterval(updateClock, 1000);
}

function flipDigit(unitId, value) {
  const unit = document.getElementById(unitId);
  const formattedVal = String(value).padStart(2, "0");
  const topCard = unit.querySelector(".card-top");
  const bottomCard = unit.querySelector(".card-bottom");

  if (topCard.textContent !== formattedVal) {
    // Perform smooth digit scaling flip
    topCard.style.transform = "rotateX(-90deg)";
    topCard.style.transition = "transform 0.3s ease-in";

    setTimeout(() => {
      topCard.textContent = formattedVal;
      bottomCard.textContent = formattedVal;
      topCard.style.transform = "rotateX(0deg)";
      topCard.style.transition = "none";
    }, 300);
  }
}

// Typing dynamic lines
function setupTyping(lines) {
  const el = document.getElementById("typing-text");
  let lineIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentLine = lines[lineIdx];

    if (isDeleting) {
      el.textContent = currentLine.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentLine.substring(0, charIdx + 1);
      charIdx++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentLine.length) {
      typeSpeed = 2000; // Pause at end of line
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      lineIdx = (lineIdx + 1) % lines.length;
      typeSpeed = 500; // Pause before typing new line
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// --- SYSTEM E: THE SURPRISE UNFOLDING ---
function triggerSurprise() {
  if (isBirthdayPassed) return;
  isBirthdayPassed = true;

  // Hide countdown, reveal unlocked surprise layout
  document.getElementById("countdown-wrapper").classList.add("hidden-element");

  const unlockedSec = document.getElementById("unlocked-surprise");
  unlockedSec.classList.remove("hidden-element");

  document.getElementById("surprise-title").textContent = appData.birthday.surpriseHeading;
  document.getElementById("surprise-subtitle").textContent = appData.birthday.surpriseSubheading;

  // Trigger full screen visual explosion overlay
  const overlay = document.getElementById("surprise-overlay");
  overlay.classList.remove("hidden-element");

  // Play ambient audio if possible (usually blocked until click, but Vercel logic is ready)
  const player = document.getElementById("music-player");
  player.classList.add("playing");

  // Start Fireworks and Confetti
  startFireworks();
  releaseBalloons();

  // Close surprise overlay trigger
  document.getElementById("btn-close-surprise").addEventListener("click", () => {
    overlay.classList.add("hidden-element");
    stopFireworks();
    // Play music once clicked
    const audio = player.querySelector("audio");
    if (audio) audio.play().catch(e => console.log("Audio play blocked: ", e));
  });
}

// Fireworks canvas implementation
let fireworksActive = false;
let fireworksCanvas = document.getElementById("fireworks-canvas");
let fwCtx = fireworksCanvas.getContext("2d");
let fwParticles = [];

function startFireworks() {
  fireworksActive = true;
  resizeFireworksCanvas();
  window.addEventListener("resize", resizeFireworksCanvas);
  animateFireworks();

  // Launch periodic rockets
  fireworksInterval = setInterval(() => {
    if (!fireworksActive) return;
    launchRocket();
  }, 800);
}

function stopFireworks() {
  fireworksActive = false;
  clearInterval(fireworksInterval);
  window.removeEventListener("resize", resizeFireworksCanvas);
}

function resizeFireworksCanvas() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
}

function launchRocket() {
  const startX = Math.random() * fireworksCanvas.width;
  const startY = fireworksCanvas.height;
  const targetX = Math.random() * fireworksCanvas.width;
  const targetY = Math.random() * (fireworksCanvas.height * 0.5) + 50;

  fwParticles.push({
    x: startX,
    y: startY,
    targetX: targetX,
    targetY: targetY,
    speed: 8,
    isRocket: true,
    angle: Math.atan2(targetY - startY, targetX - startX),
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  });
}

function explodeRocket(x, y, color) {
  sfxManager.play('firework');
  const particleCount = 60;
  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 5 + 2;
    fwParticles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01,
      color: color,
      isRocket: false
    });
  }
}

function animateFireworks() {
  if (!fireworksActive) return;

  fwCtx.fillStyle = "rgba(5, 4, 10, 0.2)";
  fwCtx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  for (let i = fwParticles.length - 1; i >= 0; i--) {
    const p = fwParticles[i];

    if (p.isRocket) {
      const dx = p.targetX - p.x;
      const dy = p.targetY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 10) {
        explodeRocket(p.x, p.y, p.color);
        fwParticles.splice(i, 1);
        continue;
      }

      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;

      // Draw rocket trail
      fwCtx.fillStyle = p.color;
      fwCtx.beginPath();
      fwCtx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      fwCtx.fill();
    } else {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // gravity
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        fwParticles.splice(i, 1);
        continue;
      }

      fwCtx.save();
      fwCtx.globalAlpha = p.alpha;
      fwCtx.fillStyle = p.color;
      fwCtx.beginPath();
      fwCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      fwCtx.fill();
      fwCtx.restore();
    }
  }

  requestAnimationFrame(animateFireworks);
}

// Balloon rising overlay system
function releaseBalloons() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const balloon = document.createElement("div");
      balloon.className = "floating-balloon";

      const colors = ["#ff9aa2", "#ffb7b2", "#ffdac1", "#e2f0cb", "#b5ead7", "#c7ceea"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      balloon.style.left = `${Math.random() * 90 + 5}vw`;
      balloon.style.bottom = `-100px`;
      balloon.style.background = color;
      balloon.style.position = "fixed";
      balloon.style.width = `${Math.random() * 20 + 30}px`;
      balloon.style.height = `${parseFloat(balloon.style.width) * 1.2}px`;
      balloon.style.borderRadius = "50% 50% 50% 50% / 40% 40% 60% 60%";
      balloon.style.boxShadow = "inset -5px -5px 10px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.1)";
      balloon.style.transition = "transform 6s linear, opacity 6s";
      balloon.style.zIndex = "9997";

      // Balloon string
      const string = document.createElement("div");
      string.style.width = "2px";
      string.style.height = "50px";
      string.style.background = "rgba(255,255,255,0.4)";
      string.style.position = "absolute";
      string.style.bottom = "-50px";
      string.style.left = "50%";
      string.style.transform = "translateX(-50%)";
      balloon.appendChild(string);

      document.body.appendChild(balloon);

      setTimeout(() => {
        balloon.style.transform = `translateY(-120vh) rotate(${(Math.random() - 0.5) * 45}deg)`;
      }, 50);

      setTimeout(() => balloon.remove(), 7000);
    }, i * 300);
  }
}

// --- SYSTEM F: HORIZONTAL JOURNEY TIMELINE ---
function setupTimeline() {
  const track = document.getElementById("timeline-track");
  const prevBtn = document.getElementById("timeline-prev");
  const nextBtn = document.getElementById("timeline-next");

  track.innerHTML = ""; // Clear placeholders

  appData.timeline.forEach((moment) => {
    const card = document.createElement("div");
    card.className = "timeline-card glass-card";

    // Use fallback gradient background if image load fails
    card.innerHTML = `
      <img src="${moment.image}" class="timeline-img" alt="${moment.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22350%22 height=%22220%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 stop-color=%22%23ffb7b2%22/><stop offset=%22100%25%22 stop-color=%22%23c7ceea%22/></linearGradient></defs></svg>'">
      <div class="timeline-card-content">
        <span class="timeline-date">${moment.date}</span>
        <h3>${moment.title}</h3>
        <p>${moment.story}</p>
      </div>
    `;
    track.appendChild(card);
  });

  // Timeline arrow navigations
  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -380, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 380, behavior: "smooth" });
  });

  // Horizontal drag interactions
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("mouseleave", () => isDown = false);
  track.addEventListener("mouseup", () => isDown = false);

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}

// --- SYSTEM G: LOVE METER & 100 REASONS ---
function setupLoveMeter() {
  const fill = document.getElementById("love-meter-fill");
  const percentText = document.getElementById("love-percentage");
  const labelText = document.getElementById("love-label");
  const boostBtn = document.getElementById("btn-boost-love");

  let percentage = 0;
  let targetPercentage = 100;
  let boostCount = 0;

  // Set initial circular stroke configuration
  const perimeter = 2 * Math.PI * 40; // r=40
  fill.style.strokeDasharray = perimeter;

  function updateProgress() {
    if (boostCount >= 5) {
      percentText.textContent = "∞";
      labelText.textContent = "Sayangnya Nggak Bisa Dihitung!! ♾️❤️";
      fill.style.strokeDashoffset = 0;
      boostBtn.disabled = true;
      boostBtn.textContent = "Udah Penuh Bangettt! 💥";
      return;
    }

    if (percentage < targetPercentage) {
      percentage += 1;
      const offset = perimeter - (percentage / 100) * perimeter;
      fill.style.strokeDashoffset = offset;

      // Format number elegantly like 1.000.000%
      const val = (percentage * 10000).toLocaleString("id-ID") + "%";
      percentText.textContent = val;

      labelText.textContent = percentage < 40 ? "Masih Malu-malu 🙈" :
        percentage < 80 ? "Sayang Banget!! 🥰" : "Sayang Maksimal!!! 💖";

      requestAnimationFrame(updateProgress);
    }
  }

  // Triggers after loading
  setTimeout(() => {
    updateProgress();
  }, 1000);

  boostBtn.addEventListener("click", () => {
    boostCount++;
    createClickHeart(boostBtn.getBoundingClientRect().left + 40, boostBtn.getBoundingClientRect().top - 20);

    if (boostCount >= 5) {
      targetPercentage = 100;
      percentage = 100;
      updateProgress();

      // Spawn explosive balloons
      releaseBalloons();
      return;
    }

    targetPercentage += 20;
    updateProgress();
  });
}

function setupReasons() {
  const card = document.getElementById("reason-card");
  const numText = document.getElementById("reason-number");
  const contentText = document.getElementById("reason-text");

  const prevBtn = document.getElementById("btn-reason-prev");
  const nextBtn = document.getElementById("btn-reason-next");
  const randomBtn = document.getElementById("btn-reason-random");

  let activeIndex = 0;
  const reasons = appData.reasons;

  function showReason(index, direction = "next") {
    card.classList.remove("fade-in-left", "fade-in-right");
    card.classList.add(direction === "next" ? "fade-out-left" : "fade-out-right");

    setTimeout(() => {
      numText.textContent = index + 1;
      contentText.textContent = reasons[index];

      card.classList.remove("fade-out-left", "fade-out-right");
      card.classList.add(direction === "next" ? "fade-in-right" : "fade-in-left");
    }, 300);
  }

  // Show initial reason
  numText.textContent = "1";
  contentText.textContent = reasons[0];

  nextBtn.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % reasons.length;
    showReason(activeIndex, "next");
  });

  prevBtn.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + reasons.length) % reasons.length;
    showReason(activeIndex, "prev");
  });

  randomBtn.addEventListener("click", () => {
    activeIndex = Math.floor(Math.random() * reasons.length);
    showReason(activeIndex, "next");
  });
}

// --- SYSTEM H: MASONRY GALLERY & LIGHTBOX ---
function setupGallery() {
  const grid = document.getElementById("gallery-masonry");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCap = document.getElementById("lightbox-caption");

  let currentImgIdx = 0;
  const items = appData.gallery;

  grid.innerHTML = ""; // Clear placeholders

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";

    galleryItem.innerHTML = `
      <img src="${item.image}" alt="Kenangan ${index + 1}" loading="lazy" onerror="this.parentElement.style.display='none';">
      <div class="gallery-caption">
        <p>${item.caption}</p>
      </div>
    `;

    galleryItem.addEventListener("click", () => {
      currentImgIdx = index;
      openLightbox(index);
    });

    grid.appendChild(galleryItem);
  });

  function openLightbox(index) {
    lightboxImg.src = items[index].image;
    lightboxCap.textContent = items[index].caption;
    lightbox.classList.remove("hidden-element");
    lightbox.setAttribute("aria-hidden", "false");
  }

  document.getElementById("lightbox-close").addEventListener("click", () => {
    lightbox.classList.add("hidden-element");
    lightbox.setAttribute("aria-hidden", "true");
  });

  document.getElementById("lightbox-prev").addEventListener("click", () => {
    currentImgIdx = (currentImgIdx - 1 + items.length) % items.length;
    lightboxImg.src = items[currentImgIdx].image;
    lightboxCap.textContent = items[currentImgIdx].caption;
  });

  document.getElementById("lightbox-next").addEventListener("click", () => {
    currentImgIdx = (currentImgIdx + 1) % items.length;
    lightboxImg.src = items[currentImgIdx].image;
    lightboxCap.textContent = items[currentImgIdx].caption;
  });

  // Close lightbox on clicking background overlay
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden-element");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}

// --- SYSTEM I: DIGITAL ENVELOPES & TYPEWRITER LETTERS ---
function setupLetters() {
  const container = document.getElementById("envelopes-container");
  container.innerHTML = "";

  appData.letters.forEach((letter, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "envelope-wrapper";

    wrapper.innerHTML = `
      <div class="envelope-card">
        <div class="envelope-front">
          <div class="envelope-emoji">✉️</div>
          <h3>${letter.title}</h3>
          <p>${letter.teaser}</p>
        </div>
      </div>
    `;

    wrapper.addEventListener("click", () => {
      openLetterModal(letter);
    });

    container.appendChild(wrapper);
  });

  const modal = document.getElementById("letter-modal");
  const modalTitle = document.getElementById("modal-letter-title");
  const modalContent = document.getElementById("modal-letter-content");

  let typingTimer = null;

  function openLetterModal(letter) {
    sfxManager.play('paper');
    modalTitle.textContent = letter.title;
    modalContent.textContent = "";
    modal.classList.remove("hidden-element");

    // Typewriter effect on opening
    let charIdx = 0;
    const text = letter.content;

    if (typingTimer) clearInterval(typingTimer);

    typingTimer = setInterval(() => {
      modalContent.textContent += text.charAt(charIdx);
      charIdx++;
      if (charIdx >= text.length) {
        clearInterval(typingTimer);
      }
    }, 30);
  }

  document.getElementById("btn-close-letter").addEventListener("click", () => {
    modal.classList.add("hidden-element");
    if (typingTimer) clearInterval(typingTimer);
  });
}

// --- SYSTEM J: 3D GIFT BOX & UNFOLDING LETTER ---
function setupGiftBox() {
  const box = document.getElementById("gift-box-3d");
  const paperContainer = document.getElementById("scroll-letter-container");

  // 3D Tilt orientation (Apple Style)
  const stage = document.querySelector(".gift-box-stage");
  stage.addEventListener("mousemove", (e) => {
    if (box.classList.contains("open")) return;

    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Limit rotation angle
    const rotX = -y / 4;
    const rotY = x / 4;

    box.style.transform = `rotateX(${rotX - 20}deg) rotateY(${rotY + 45}deg)`;
  });

  stage.addEventListener("mouseleave", () => {
    if (box.classList.contains("open")) return;
    box.style.transform = "rotateX(-20deg) rotateY(45deg)";
  });

  // Click open action
  box.addEventListener("click", () => {
    if (box.classList.contains("open")) return;

    sfxManager.play('gift');
    box.classList.add("open");

    // Release explosive balloons & click heart particles
    releaseBalloons();
    for (let i = 0; i < 15; i++) {
      createClickHeart(window.innerWidth / 2 + (Math.random() - 0.5) * 200, window.innerHeight / 2 + (Math.random() - 0.5) * 200);
    }

    // Unfold dynamic long letter
    setTimeout(() => {
      renderLongLetter();
      paperContainer.classList.remove("hidden-element");
      paperContainer.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  });
}

function renderLongLetter() {
  const greet = document.getElementById("scroll-letter-greeting");
  const paragraphs = document.getElementById("scroll-letter-paragraphs");
  const closing = document.getElementById("scroll-letter-closing");

  greet.textContent = appData.longLetter.greeting;
  paragraphs.innerHTML = "";

  appData.longLetter.paragraphs.forEach(para => {
    const p = document.createElement("p");
    p.textContent = para;
    paragraphs.appendChild(p);
  });

  closing.textContent = appData.longLetter.closing;
}

// --- SYSTEM K: NIGHT SKY CANVAS & INTERACTIONS ---
function setupEndingSection() {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resizeStars() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resizeStars();
  window.addEventListener("resize", resizeStars);

  class Star {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5;
      this.alpha = Math.random();
      this.speed = Math.random() * 0.02 + 0.005;
      this.growing = Math.random() > 0.5;
    }

    update() {
      if (this.growing) {
        this.alpha += this.speed;
        if (this.alpha >= 1) this.growing = false;
      } else {
        this.alpha -= this.speed;
        if (this.alpha <= 0.2) this.growing = true;
      }
    }

    draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    stars.push(new Star());
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(animateStars);
  }
  animateStars();

  // Virtual hugs & kisses counters
  let hugCount = parseInt(localStorage.getItem("hugs") || "0");
  let kissCount = parseInt(localStorage.getItem("kisses") || "0");

  const hugText = document.getElementById("hug-count");
  const kissText = document.getElementById("kiss-count");

  hugText.textContent = hugCount;
  kissText.textContent = kissCount;

  document.getElementById("btn-virtual-hug").addEventListener("click", () => {
    hugCount++;
    localStorage.setItem("hugs", hugCount);
    hugText.textContent = hugCount;

    // Heart float animation
    createClickHeart(window.innerWidth / 2, window.innerHeight - 300);
    showFloatingCenterNotification("🤗 Pelukan Virtual Terkirim!");
  });

  document.getElementById("btn-virtual-kiss").addEventListener("click", () => {
    kissCount++;
    localStorage.setItem("kisses", kissCount);
    kissText.textContent = kissCount;

    createClickHeart(window.innerWidth / 2, window.innerHeight - 300);
    showFloatingCenterNotification("💋 Ciuman Virtual Terkirim!");
  });

  // Love quote generator
  const quoteText = document.getElementById("generated-quote");
  document.getElementById("btn-generate-quote").addEventListener("click", () => {
    const quotes = appData.loveQuotes;
    const randQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = `"${randQuote}"`;
      quoteText.style.opacity = 1;
      quoteText.style.transition = "opacity 0.5s";
    }, 400);
  });
}

function showFloatingCenterNotification(msg) {
  const notif = document.createElement("div");
  notif.style.position = "fixed";
  notif.style.top = "50%";
  notif.style.left = "50%";
  notif.style.transform = "translate(-50%, -50%) scale(0.8)";
  notif.style.background = "rgba(var(--primary-rgb), 0.9)";
  notif.style.color = "#0a0915";
  notif.style.padding = "16px 30px";
  notif.style.borderRadius = "30px";
  notif.style.fontWeight = "700";
  notif.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  notif.style.zIndex = "99999";
  notif.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s";
  notif.style.pointerEvents = "none";
  notif.textContent = msg;

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.style.transform = "translate(-50%, -50%) scale(1)";
  }, 50);

  setTimeout(() => {
    notif.style.opacity = "0";
    notif.style.transform = "translate(-50%, -50%) scale(0.8)";
  }, 1500);

  setTimeout(() => notif.remove(), 2100);
}

// --- SYSTEM L: FLOATING MUSIC PLAYER CONTROLS ---
// --- SYSTEM L: SFX MANAGER & SOUND TOGGLE ---
const sfxManager = {
  muted: true, // Muted by default (browsers block autoplay SFX)
  sounds: {
    click: new Audio("assets/sfx/click.mp3"),
    paper: new Audio("assets/sfx/paper.mp3"),
    gift: new Audio("assets/sfx/gift.mp3"),
    firework: new Audio("assets/sfx/firework.mp3")
  },
  init() {
    for (let key in this.sounds) {
      this.sounds[key].preload = "auto";
    }

    // Wire up sound-toggle floating button
    const toggleBtn = document.getElementById("sound-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isMuted = this.toggle();
        this.updateToggleIcon(isMuted);

        // Play a test pop SFX when unmuting so the user gets instant feedback
        if (!isMuted) {
          this.play("click");
          showFloatingCenterNotification("Suara Aktif! 🔊");
        } else {
          showFloatingCenterNotification("Suara Dimatikan! 🔇");
        }
      });
    }

    // Global click sound listener for interactive items
    window.addEventListener("click", (e) => {
      // Play click sound if we clicked an interactive element and we are NOT muted
      if (this.muted) return;

      const target = e.target;
      if (target.closest(".envelope-wrapper") || target.closest(".gift-box")) {
        // Skip playing standard click sound, they have their own specific sounds
        return;
      }

      if (target.closest("button") ||
        target.closest("a") ||
        target.closest(".nav-arrow") ||
        target.closest(".control-btn") ||
        target.closest(".interaction-btn")) {
        this.play("click");
      }
    });
  },
  play(key) {
    if (this.muted) return;
    const audio = this.sounds[key];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(err => {
        // Fallback silently if files aren't downloaded yet or browser blocks it
        console.warn(`SFX '${key}' play blocked or file not found at assets/sfx/${key}.mp3`, err);
      });
    }
  },
  toggle() {
    this.muted = !this.muted;
    return this.muted;
  },
  updateToggleIcon(isMuted) {
    const icon = document.getElementById("sound-icon");
    if (!icon) return;

    if (isMuted) {
      // Mute icon path
      icon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    } else {
      // Unmute icon path (Active speaker)
      icon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
  }
};

// --- SYSTEM M: MINI GAME "TANGKAP HATINYA" ---
function setupMiniGame() {
  const trigger = document.getElementById("mini-game-trigger");
  const overlay = document.getElementById("game-overlay");
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const scoreText = document.getElementById("game-score");
  const livesText = document.getElementById("game-lives");
  const highscoreText = document.getElementById("game-highscore");
  const menu = document.getElementById("game-menu");

  let score = 0;
  let lives = 3;
  let highscore = parseInt(localStorage.getItem("game_highscore") || "0");
  let gameRunning = false;
  let animationId = null;

  // Game parameters
  let basket = { x: 120, y: 310, w: 60, h: 25, speed: 12 };
  let items = [];
  let nextSpawnTime = 0;

  highscoreText.textContent = highscore;

  // Auto-resize game canvas based on CSS wrapper
  function resizeGameCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    basket.y = canvas.height - 40;
  }

  trigger.addEventListener("click", () => {
    overlay.classList.remove("hidden-element");
    resizeGameCanvas();
    menu.classList.remove("hidden-element");
  });

  document.getElementById("btn-close-game").addEventListener("click", () => {
    overlay.classList.add("hidden-element");
    stopGame();
  });

  document.getElementById("btn-start-game").addEventListener("click", () => {
    menu.classList.add("hidden-element");
    startGame();
  });

  // Mobile / Desktop Control Listeners
  let activeKeys = {};
  window.addEventListener("keydown", (e) => {
    activeKeys[e.key] = true;
  });
  window.addEventListener("keyup", (e) => {
    activeKeys[e.key] = false;
  });

  // Touch / Drag controls
  canvas.addEventListener("touchmove", (e) => {
    if (!gameRunning) return;
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    basket.x = touchX - basket.w / 2;
    keepBasketInBounds();
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!gameRunning) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    basket.x = mouseX - basket.w / 2;
    keepBasketInBounds();
  });

  // Mobile arrow buttons click
  const leftBtn = document.getElementById("game-btn-left");
  const rightBtn = document.getElementById("game-btn-right");

  let leftInterval = null, rightInterval = null;
  leftBtn.addEventListener("mousedown", () => { leftInterval = setInterval(() => { basket.x -= basket.speed; keepBasketInBounds(); }, 30); });
  leftBtn.addEventListener("mouseup", () => clearInterval(leftInterval));
  leftBtn.addEventListener("mouseleave", () => clearInterval(leftInterval));

  rightBtn.addEventListener("mousedown", () => { rightInterval = setInterval(() => { basket.x += basket.speed; keepBasketInBounds(); }, 30); });
  rightBtn.addEventListener("mouseup", () => clearInterval(rightInterval));
  rightBtn.addEventListener("mouseleave", () => clearInterval(rightInterval));

  // Touch arrow buttons support
  leftBtn.addEventListener("touchstart", (e) => { e.preventDefault(); leftInterval = setInterval(() => { basket.x -= basket.speed; keepBasketInBounds(); }, 30); });
  leftBtn.addEventListener("touchend", () => clearInterval(leftInterval));
  rightBtn.addEventListener("touchstart", (e) => { e.preventDefault(); rightInterval = setInterval(() => { basket.x += basket.speed; keepBasketInBounds(); }, 30); });
  rightBtn.addEventListener("touchend", () => clearInterval(rightInterval));

  function keepBasketInBounds() {
    if (basket.x < 0) basket.x = 0;
    if (basket.x + basket.w > canvas.width) basket.x = canvas.width - basket.w;
  }

  function startGame() {
    score = 0;
    lives = 3;
    items = [];
    gameRunning = true;
    scoreText.textContent = score;
    updateLivesDisplay();
    gameLoop();
  }

  function stopGame() {
    gameRunning = false;
    cancelAnimationFrame(animationId);
  }

  function updateLivesDisplay() {
    livesText.textContent = "❤".repeat(lives);
  }

  function gameLoop() {
    if (!gameRunning) return;

    // Keyboard inputs checking
    if (activeKeys["ArrowLeft"] || activeKeys["a"]) {
      basket.x -= basket.speed;
    }
    if (activeKeys["ArrowRight"] || activeKeys["d"]) {
      basket.x += basket.speed;
    }
    keepBasketInBounds();

    // Spawn drops
    const now = Date.now();
    if (now > nextSpawnTime) {
      items.push({
        x: Math.random() * (canvas.width - 20) + 10,
        y: -10,
        speed: Math.random() * 3 + 2,
        isBomb: Math.random() < 0.2, // 20% obstacle bombs
        radius: 12
      });
      nextSpawnTime = now + (Math.random() * 800 + 400); // 400ms - 1200ms
    }

    // Physics & drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw basket
    ctx.fillStyle = "rgba(var(--primary-rgb), 0.7)";
    ctx.strokeStyle = "var(--primary)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(basket.x, basket.y, basket.w, basket.h, 8);
    ctx.fill();
    ctx.stroke();

    // Draw items
    for (let i = items.length - 1; i >= 0; i--) {
      const drop = items[i];
      drop.y += drop.speed;

      // Draw drops
      ctx.save();
      if (drop.isBomb) {
        ctx.fillStyle = "#111";
        ctx.shadowColor = "#ff758c";
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "10px sans-serif";
        ctx.fillText("☠", drop.x - 5, drop.y + 3);
      } else {
        ctx.fillStyle = "var(--primary)";
        ctx.font = "16px sans-serif";
        ctx.fillText("💖", drop.x - 8, drop.y + 6);
      }
      ctx.restore();

      // Collision checker
      if (drop.y + drop.radius >= basket.y &&
        drop.x >= basket.x &&
        drop.x <= basket.x + basket.w) {
        // Caught
        if (drop.isBomb) {
          lives--;
          updateLivesDisplay();
          if (lives <= 0) {
            endGame();
          }
        } else {
          score += 10;
          scoreText.textContent = score;

          if (score > highscore) {
            highscore = score;
            highscoreText.textContent = highscore;
            localStorage.setItem("game_highscore", highscore);
          }
        }
        items.splice(i, 1);
        continue;
      }

      // Out of bounds checker
      if (drop.y > canvas.height + 20) {
        if (!drop.isBomb) {
          lives--;
          updateLivesDisplay();
          if (lives <= 0) {
            endGame();
          }
        }
        items.splice(i, 1);
      }
    }

    animationId = requestAnimationFrame(gameLoop);
  }

  function endGame() {
    stopGame();
    menu.classList.remove("hidden-element");
    menu.innerHTML = `
      <div style="padding:20px;">
        <h3 style="margin-bottom:10px;">Game Over!</h3>
        <p style="margin-bottom:20px;">Skor Akhir: <strong>${score}</strong></p>
        <button id="btn-restart-game" class="primary-btn pulse-glow">Main Lagi</button>
      </div>
    `;
    document.getElementById("btn-restart-game").addEventListener("click", () => {
      menu.classList.add("hidden-element");
      startGame();
    });
  }
}

// --- SYSTEM N: NAV SPY AND EASTER EGGS ---
function setupScrollSpy() {
  const sections = document.querySelectorAll("section, footer");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 150) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

function setupEasterEgg() {
  const eggModal = document.getElementById("easter-egg-modal");
  let keysPressed = {};

  // Simultaneous A + L keydown trigger
  window.addEventListener("keydown", (e) => {
    keysPressed[e.key.toLowerCase()] = true;

    if (keysPressed["a"] && keysPressed["l"]) {
      // Trigger egg
      eggModal.classList.remove("hidden-element");
    }
  });

  window.addEventListener("keyup", (e) => {
    keysPressed[e.key.toLowerCase()] = false;
  });

  document.getElementById("btn-close-egg").addEventListener("click", () => {
    eggModal.classList.add("hidden-element");
  });
}
