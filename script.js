// ==========================================
// UBAH DATA PERNIKAHAN DI BAGIAN INI SAJA
// ==========================================
const CONFIG = {
    namaPanggilan: "Herlangga & Zalsa",
    namaFooter: "HERLANGGA & ZALSA",
    namaPria: "Herlangga Aprilyansah",
    ortuPria: "Putra Pertama dari\nBapak Ramlan\n& Ibu Hernawati",
    namaWanita: "Zalsa Nabila Putri.S.E",
    ortuWanita: "Putri Pertama dari\nBapak Yudi Himawan\n& Ibu Indri Rastuti",

    ayatTeks: '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."',
    ayatSumber: "QS Ar-Rum 21",

    tanggalTeks: "Sabtu, 27 Maret 2027",
    jamAcara: "Pukul 19.00 WIB - 21.00 WIB",
    tanggalCountdown: "March 27, 2027 19:00:00",

    stdBulan: "MARET",
    stdTanggal: "27",
    stdTahun: "2027",
    jamAkad: "Pukul 19.00 WIB",
    jamResepsi: "Pukul 20.00 WIB",
    detailJamAkad: "19.00 WIB",
    detailJamResepsi: "20.00 WIB - 21.00 WIB",

    namaLokasi: "Yayasan Darul Aitama",
    alamatLengkap: "Jl. K.H. Mas Mansyur No.47, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230",
    detailLokasiUpper: "YAYASAN DARUL AITAMA",
    detailAlamatLines: "Jl. K.H. Mas Mansyur No.47, Kb. Melati,\nKec. Tanah Abang, Kota Jakarta Pusat,\nDaerah Khusus Ibukota Jakarta 10230",
    linkMaps: "https://maps.app.goo.gl/vtc6LVVJoQGudwiw7",

    // File lagu lokal di folder audio/
    urlMusik: "audio/marry-your-daughter.mp3.mp3",

    // =========================================================
    // BACKGROUND TIAP BAGIAN & AMPLOP (BISA GAMBAR / WARNA / GRADASI)
    // Simpan gambar kanan di: img/bg-floral-velvet.jpg
    // Simpan gambar tirai polos di: img/bg-velvet-plain.jpg
    // =========================================================
    backgrounds: {
        heroCover: 'linear-gradient(180deg, rgba(6, 28, 18, 0.52) 0%, rgba(6, 24, 16, 0.68) 100%), url("img/bg-floral-velvet.jpg") center/cover no-repeat fixed #092b1c',
        ayatSection: 'linear-gradient(180deg, rgba(6, 26, 17, 0.62) 0%, rgba(6, 26, 17, 0.72) 100%), url("img/bg-velvet-plain.jpg") center/cover no-repeat #082719',
        mempelaiSection: "#3c0913",
        acaraSection: "#f6f1e7",
        stdSection: 'linear-gradient(180deg, rgba(31, 47, 31, 0.62) 0%, rgba(25, 39, 25, 0.74) 100%), url("img/bg-floral-velvet.jpg") center/cover no-repeat #2b3e2b',
        giftSection: "#470c17",
        storySection: 'linear-gradient(180deg, rgba(31, 47, 31, 0.68) 0%, rgba(25, 39, 25, 0.78) 100%), url("img/bg-velvet-plain.jpg") center/cover no-repeat #2b3e2b',
        galeriSection: "#fbf8f2",
        penutupSection: 'linear-gradient(180deg, rgba(6, 28, 18, 0.6) 0%, rgba(6, 24, 16, 0.72) 100%), url("img/bg-floral-velvet.jpg") center/cover no-repeat #09291a',
        ucapanSection: "#f5f0e6",

        // Background amplop masing-masing
        amplopHero: "linear-gradient(165deg, #fbf6ec 0%, #f1e5ce 100%)",
        amplopAyat: "linear-gradient(165deg, #f8f1e3 0%, #eadbc0 100%)",
        amplopPenutup: "linear-gradient(165deg, #f7efe0 0%, #e7d8be 100%)"
    },

    rek1Nomor: "1122334455",
    rek1Bank: "BCA",
    rek1Nama: "a.n Herlangga Aprilyansah",

    rek2Nomor: "1122334455",
    rek2Bank: "DANA",
    rek2Nama: "a.n Zalsa Nabila Putri",

    kadoPenerima: "Herlangga & Zalsa",
    kadoAlamat: "Jl. K.H. Mas Mansyur No.47, Tanah Abang, Jakarta Pusat",
    kadoWA: "08xxxxxxxxxx",

    storyFoto1: "img/pria.jpg",
    storyFoto2: "img/wanita.jpg",
    storyJudul1: "Awal Pertemuan",
    storyTeks1: "Tidak ada yang benar-benar kebetulan di dunia ini. Setiap pertemuan telah diatur dengan indah, hanya menunggu waktu yang tepat untuk terjadi. Berawal dari sebuah perkenalan sederhana, tanpa banyak rencana atau harapan berlebihan, kami dipertemukan dalam cara yang tidak pernah kami duga sebelumnya.",
    storyJudul2: "Perjalanan Bersama",
    storyTeks2: "Seiring berjalannya waktu, kebersamaan kecil yang kami lalui perlahan tumbuh menjadi sesuatu yang lebih berarti. Dalam setiap cerita, tentu ada tawa, ada juga tantangan. Namun dari situlah kami belajar untuk saling memahami, menerima, dan melengkapi satu sama lain.",
    storyJudul3: "Komitmen",
    storyTeks3: "Hingga akhirnya kami menyadari bahwa perjalanan ini bukan lagi tentang dua orang yang berjalan sendiri, melainkan tentang dua hati yang memilih untuk melangkah bersama. Dengan penuh rasa syukur dan keyakinan, kami memutuskan untuk mengikat janji suci dan memulai babak baru dalam kehidupan kami.",

    // Gallery lama (3 foto grid)
    galeriFoto: [
        "img/pria.jpg",
        "img/wanita.jpg",
        "img/pria.jpg"
    ],

    closingPria: "Herlangga",
    closingWanita: "Zalsa"
};

function terapkanBackground() {
    const bg = CONFIG.backgrounds || {};
    const rootStyle = document.documentElement.style;
    if (bg.heroCover) rootStyle.setProperty("--bg-hero-cover", bg.heroCover);
    if (bg.ayatSection) rootStyle.setProperty("--bg-ayat-section", bg.ayatSection);
    if (bg.mempelaiSection) rootStyle.setProperty("--bg-mempelai-section", bg.mempelaiSection);
    if (bg.acaraSection) rootStyle.setProperty("--bg-acara-section", bg.acaraSection);
    if (bg.stdSection) rootStyle.setProperty("--bg-std-section", bg.stdSection);
    if (bg.giftSection) rootStyle.setProperty("--bg-gift-section", bg.giftSection);
    if (bg.storySection) rootStyle.setProperty("--bg-story-section", bg.storySection);
    if (bg.galeriSection) rootStyle.setProperty("--bg-galeri-section", bg.galeriSection);
    if (bg.penutupSection) rootStyle.setProperty("--bg-penutup-section", bg.penutupSection);
    if (bg.ucapanSection) rootStyle.setProperty("--bg-ucapan-section", bg.ucapanSection);

    if (bg.amplopHero) rootStyle.setProperty("--bg-amplop-hero", bg.amplopHero);
    if (bg.amplopAyat) rootStyle.setProperty("--bg-amplop-ayat", bg.amplopAyat);
    if (bg.amplopPenutup) rootStyle.setProperty("--bg-amplop-penutup", bg.amplopPenutup);
}
terapkanBackground();

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function setSrc(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.src = value;
}

setText("display-nama-pasangan", CONFIG.namaPanggilan);
setText("display-footer-nama", CONFIG.namaFooter);
setText("display-nama-pria", CONFIG.namaPria);
setText("display-ortu-pria", CONFIG.ortuPria);
setText("display-nama-wanita", CONFIG.namaWanita);
setText("display-ortu-wanita", CONFIG.ortuWanita);

setText("display-ayat-teks", CONFIG.ayatTeks);
setText("display-ayat-sumber", CONFIG.ayatSumber);

setText("display-tanggal-hero", CONFIG.tanggalTeks);
setText("display-tanggal-acara", CONFIG.tanggalTeks);
setText("display-jam-acara", CONFIG.jamAcara);

setText("display-std-bulan", CONFIG.stdBulan);
setText("display-std-tanggal", CONFIG.stdTanggal);
setText("display-std-tahun", CONFIG.stdTahun);
setText("display-std-jam-akad", CONFIG.jamAkad);
setText("display-std-jam-resepsi", CONFIG.jamResepsi);

setText("display-detail-tanggal-akad", CONFIG.tanggalTeks);
setText("display-detail-tanggal-resepsi", CONFIG.tanggalTeks);
setText("display-detail-jam-akad", CONFIG.detailJamAkad);
setText("display-detail-jam-resepsi", CONFIG.detailJamResepsi);
setText("display-detail-lokasi-akad", CONFIG.detailLokasiUpper);
setText("display-detail-lokasi-resepsi", CONFIG.detailLokasiUpper);
setText("display-detail-alamat-akad", CONFIG.detailAlamatLines);
setText("display-detail-alamat-resepsi", CONFIG.detailAlamatLines);

setText("display-nama-lokasi", CONFIG.namaLokasi);
setText("display-alamat-lengkap", CONFIG.alamatLengkap);

setText("display-rek1-nomor", CONFIG.rek1Nomor);
setText("display-rek1-bank", CONFIG.rek1Bank);
setText("display-rek1-nama", CONFIG.rek1Nama);
setText("display-rek2-nomor", CONFIG.rek2Nomor);
setText("display-rek2-bank", CONFIG.rek2Bank);
setText("display-rek2-nama", CONFIG.rek2Nama);
setText("display-kado-penerima", CONFIG.kadoPenerima);
setText("display-kado-alamat", CONFIG.kadoAlamat);
setText("display-kado-wa", CONFIG.kadoWA);

setSrc("display-story-foto-1", CONFIG.storyFoto1);
setSrc("display-story-foto-2", CONFIG.storyFoto2);
setText("display-story-judul-1", CONFIG.storyJudul1);
setText("display-story-teks-1", CONFIG.storyTeks1);
setText("display-story-judul-2", CONFIG.storyJudul2);
setText("display-story-teks-2", CONFIG.storyTeks2);
setText("display-story-judul-3", CONFIG.storyJudul3);
setText("display-story-teks-3", CONFIG.storyTeks3);

if (Array.isArray(CONFIG.galeriFoto)) {
    CONFIG.galeriFoto.forEach((src, idx) => {
        setSrc(`display-galeri-${idx + 1}`, src);
    });
}

const closingNamaEl = document.getElementById("display-closing-nama");
if (closingNamaEl) {
    closingNamaEl.innerHTML = `<span>${CONFIG.closingPria}</span><span class="closing-amp">&amp;</span><span>${CONFIG.closingWanita}</span>`;
}

const linkMapsEl = document.getElementById("display-link-maps");
if (linkMapsEl) linkMapsEl.href = CONFIG.linkMaps;

const linkMapsDetailEl = document.getElementById("display-link-maps-detail");
if (linkMapsDetailEl) linkMapsDetailEl.href = CONFIG.linkMaps;

// =========================================================
// BANYAK BLINK-BLINK BINTANG & KILAU DI SAVE THE DATE
// =========================================================
function buatBlinkSaveTheDate() {
    const container = document.getElementById("std-sparkles");
    if (!container) return;

    const simbolBintang = ["✦", "✧", "⋆", "✨", "✵"];
    const totalBlink = 46;

    for (let i = 0; i < totalBlink; i++) {
        const isStar = i % 2 === 0;
        const el = document.createElement("span");
        el.className = isStar ? "sparkle-star" : "sparkle-dot";

        const top = Math.random() * 96 + 2;
        const left = Math.random() * 96 + 2;
        const dur = (Math.random() * 2.2 + 1.5).toFixed(2) + "s";
        const delay = (Math.random() * 3.2).toFixed(2) + "s";

        el.style.top = `${top}%`;
        el.style.left = `${left}%`;
        el.style.setProperty("--dur", dur);
        el.style.setProperty("--delay", delay);

        if (isStar) {
            el.textContent = simbolBintang[i % simbolBintang.length];
            const size = (Math.random() * 0.9 + 0.65).toFixed(2);
            el.style.fontSize = `${size}rem`;
        } else {
            const px = Math.floor(Math.random() * 5) + 4;
            el.style.width = `${px}px`;
            el.style.height = `${px}px`;
        }

        container.appendChild(el);
    }
}
buatBlinkSaveTheDate();

// =========================================================
// EFEK KETIKAN (TYPEWRITER) PADA TULISAN MASING-MASING
// =========================================================
const semuaKetikan = document.querySelectorAll(".typewriter-text");
semuaKetikan.forEach((el) => {
    const teksAsli = el.textContent.replace(/\s+/g, " ").trim();
    el.dataset.fullText = teksAsli;
    el.textContent = "";
});

function jalankanKetikan(el) {
    if (!el || el.dataset.typed === "true") return;
    el.dataset.typed = "true";

    const fullText = el.dataset.fullText || "";
    const speed = Number(el.dataset.speed) || 28;
    el.classList.add("typing-active");

    let index = 0;
    function ketikKarakter() {
        if (index <= fullText.length) {
            el.textContent = fullText.slice(0, index);
            index++;
            setTimeout(ketikKarakter, speed);
        } else {
            el.classList.remove("typing-active");
        }
    }
    ketikKarakter();
}

function picuKetikanDiSection(sectionEl) {
    if (!sectionEl) return;
    const daftarTeks = sectionEl.querySelectorAll(".typewriter-text");
    daftarTeks.forEach((el, idx) => {
        setTimeout(() => {
            jalankanKetikan(el);
        }, idx * 240);
    });
}

// Animasi estetik & ketikan saat bagian masuk ke layar
const animSections = document.querySelectorAll(".anim-section");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("anim-visible");
                    picuKetikanDiSection(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    animSections.forEach((sec) => observer.observe(sec));
} else {
    animSections.forEach((sec) => {
        sec.classList.add("anim-visible");
        picuKetikanDiSection(sec);
    });
}

const urlParams = new URLSearchParams(window.location.search);
const tamu = urlParams.get("to");
if (tamu) {
    setText("nama-tamu", tamu);
}

const audioEl = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
const bukaBtn = document.getElementById("btn-buka-undangan");

if (audioEl && CONFIG.urlMusik) {
    audioEl.src = CONFIG.urlMusik;
}

function perbaruiLabelMusik() {
    if (!musicBtn || !audioEl) return;
    musicBtn.innerText = audioEl.paused ? "🎵 Musik: OFF" : "🎶 Musik: ON";
}

async function toggleMusik(paksaPutar = false) {
    if (!audioEl) return;
    try {
        if (paksaPutar || audioEl.paused) {
            await audioEl.play();
        } else {
            audioEl.pause();
        }
    } catch (err) {
        console.warn("Pemutaran audio diblokir browser hingga ada interaksi pengguna:", err);
    }
    perbaruiLabelMusik();
}

if (musicBtn) {
    musicBtn.addEventListener("click", () => toggleMusik(false));
}

if (bukaBtn) {
    bukaBtn.addEventListener("click", async () => {
        await toggleMusik(true);
        const ayatSection = document.getElementById("ayat");
        if (ayatSection) {
            ayatSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

async function salinTeks(teks) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(teks);
        return;
    }
    const tempInput = document.createElement("textarea");
    tempInput.value = teks;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

document.querySelectorAll(".btn-olive-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const targetId = btn.getAttribute("data-copy-target");
        const targetEl = targetId ? document.getElementById(targetId) : null;
        if (!targetEl) return;

        const teksDisalin = targetEl.innerText.trim();
        const labelEl = btn.querySelector(".copy-label");

        try {
            await salinTeks(teksDisalin);
            btn.classList.add("copied");
            if (labelEl) labelEl.textContent = "Copied";
            setTimeout(() => {
                btn.classList.remove("copied");
                if (labelEl) labelEl.textContent = "Copy";
            }, 1800);
        } catch {
            if (labelEl) labelEl.textContent = "Gagal";
            setTimeout(() => {
                if (labelEl) labelEl.textContent = "Copy";
            }, 1800);
        }
    });
});

const targetDate = new Date(CONFIG.tanggalCountdown).getTime();

function updateCountdown() {
    if (Number.isNaN(targetDate)) return;

    const now = Date.now();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setText("days", String(days).padStart(2, "0"));
        setText("hours", String(hours).padStart(2, "0"));
        setText("minutes", String(minutes).padStart(2, "0"));
        setText("seconds", String(seconds).padStart(2, "0"));
    } else {
        setText("days", "00");
        setText("hours", "00");
        setText("minutes", "00");
        setText("seconds", "00");
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

const STORAGE_KEY = "undangan_rsvp_ucapan_v1";
const rsvpForm = document.getElementById("rsvp-form");
const daftarUcapan = document.getElementById("daftar-ucapan");
let fallbackUcapan = [];

function ambilUcapan() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return fallbackUcapan;
    }
}

function simpanUcapan(items) {
    fallbackUcapan = items;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
        // Abaikan jika penyimpanan lokal dibatasi browser
    }
}

function renderUcapan() {
    if (!daftarUcapan) return;
    const items = ambilUcapan();
    daftarUcapan.innerHTML = "";

    if (items.length === 0) {
        daftarUcapan.innerHTML = `<p class="ucapan-empty-note">Belum ada ucapan masuk. Jadilah yang pertama mengirim doa.</p>`;
        return;
    }

    items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ucapan-item";

        const header = document.createElement("div");
        header.className = "ucapan-header";

        const namaEl = document.createElement("strong");
        namaEl.textContent = item.nama;

        const badgeEl = document.createElement("span");
        badgeEl.className = "badge-hadir";
        badgeEl.textContent = item.status;

        const pesanEl = document.createElement("p");
        pesanEl.textContent = item.pesan;

        header.append(namaEl, badgeEl);
        card.append(header, pesanEl);
        daftarUcapan.appendChild(card);
    });
}

if (rsvpForm) {
    rsvpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const namaInput = document.getElementById("rsvp-nama");
        const statusInput = document.getElementById("rsvp-status");
        const pesanInput = document.getElementById("rsvp-pesan");

        const nama = namaInput ? namaInput.value.trim() : "";
        const status = statusInput ? statusInput.value : "";
        const pesan = pesanInput ? pesanInput.value.trim() : "";
        if (!nama || !status || !pesan) return;

        const items = ambilUcapan();
        items.unshift({ nama, status, pesan });
        simpanUcapan(items);

        rsvpForm.reset();
        renderUcapan();
    });
}

renderUcapan();
