const tamu = new URLSearchParams(location.search).get("to");
if (tamu) document.getElementById("nama-tamu").textContent = tamu;
const box = document.getElementById("petals");
if (box) {
  const e = ["🌸","🌺","🌷","✨"];
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span");
    s.className = "petal";
    s.textContent = e[i % e.length];
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = (10 + Math.random() * 12) + "px";
    s.style.animationDuration = (6 + Math.random() * 6) + "s";
    s.style.animationDelay = Math.random() * 5 + "s";
    box.appendChild(s);
  }
}
const audio = document.getElementById("bg-music");
const playBtn = document.getElementById("music-toggle");
const buka = document.getElementById("btn-buka");
const env = document.getElementById("envelope");
async function toggleMusic(force) {
  try {
    if (force || audio.paused) {
      audio.play();
      playBtn.textContent = "🎶 Musik: ON";
    } else {
      audio.pause();
      playBtn.textContent = "🎵 Musik: OFF";
    }
  } catch (e) {}
}
if (playBtn) playBtn.onclick = () => toggleMusic(false);
if (buka) buka.onclick = () => {
  env.classList.add("open");
  toggleMusic(true);
  const ayat = document.getElementById("ayat");
  if (ayat) ayat.classList.add("show");
  setTimeout(() => {
    ayat.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 350);
};
const target = new Date("March 27, 2027 19:00:00").getTime();
function upd() {
  const d = Math.max(0, target - Date.now());
  document.getElementById("days").textContent = String(Math.floor(d / 86400000)).padStart(2, "0");
  document.getElementById("hours").textContent = String(Math.floor(d % 86400000 / 3600000)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor(d % 3600000 / 60000)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(Math.floor(d % 60000 / 1000)).padStart(2, "0");
}
upd();
setInterval(upd, 1000);
document.querySelectorAll(".copy-btn").forEach(b => {
  b.onclick = async () => {
    const t = document.getElementById(b.dataset.target).textContent.trim();
    try { await navigator.clipboard.writeText(t); }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = t;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    b.textContent = "Copy Successfully!";
    b.classList.add("done");
    setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1800);
  };
});
const form = document.getElementById("rsvp-form");
const list = document.getElementById("daftar-ucapan");
const KEY = "rsvp-herlangga-zalsa";
function get() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}
function render() {
  const items = get();
  list.innerHTML = items.length ? "" : "<p style='text-align:center;font-style:italic'>Belum ada ucapan. Jadilah yang pertama.</p>";
  items.forEach(it => {
    const d = document.createElement("div");
    d.className = "ucapan";
    d.innerHTML = "<b>" + it.nama + " • " + it.status + "</b><p>" + it.pesan + "</p>";
    list.appendChild(d);
  });
}
form.onsubmit = e => {
  e.preventDefault();
  const n = document.getElementById("rsvp-nama").value.trim();
  const s = document.getElementById("rsvp-status").value;
  const p = document.getElementById("rsvp-pesan").value.trim();
  if (!n || !s || !p) return;
  const a = get();
  a.unshift({ nama: n, status: s, pesan: p });
  localStorage.setItem(KEY, JSON.stringify(a));
  form.reset();
  render();
};
render();
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("show");
      obs.unobserve(en.target);
    }
  });
}, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
reveals.forEach(r => obs.observe(r));
