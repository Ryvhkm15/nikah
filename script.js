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
    urlMusik: "marry-your-daughter.mp3",

    rek1Nomor: "1122334455",
    rek1Bank: "BCA",
    rek1Nama: "a.n Herlangga Aprilyansah",

    rek2Nomor: "1122334455",
    rek2Bank: "DANA",
    rek2Nama: "a.n Zalsa Nabila Putri",

    kadoPenerima: "Herlangga & Zalsa",
    kadoAlamat: "Jl. K.H. Mas Mansyur No.47, Tanah Abang, Jakarta Pusat",
    kadoWA: "08xxxxxxxxxx"
};

// ==========================================
// SISTEM OTOMATIS
// ==========================================
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
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

const linkMapsEl = document.getElementById("display-link-maps");
if (linkMapsEl) linkMapsEl.href = CONFIG.linkMaps;

const linkMapsDetailEl = document.getElementById("display-link-maps-detail");
if (linkMapsDetailEl) linkMapsDetailEl.href = CONFIG.linkMaps;

const urlParams = new URLSearchParams(window.location.search);
const tamu = urlParams.get("to");
if (tamu) {
    setText("nama-tamu", tamu);
}

// ==========================================
// EFEK KELOPAK BUNGA EMAS JATUH DI SAMPUL
// ==========================================
const petalsContainer = document.getElementById("petals-container");
if (petalsContainer) {
    const jumlahKelopak = 16;
    for (let i = 0; i < jumlahKelopak; i++) {
        const petal = document.createElement("span");
        petal.className = "petal";
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${7 + Math.random() * 7}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        const size = 8 + Math.random() * 7;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.3}px`;
        petalsContainer.appendChild(petal);
    }
}

// ==========================================
// ANIMASI SCROLL REVEAL
// ==========================================
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.14 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
} else {
    revealElements.forEach((el) => el.classList.add("active"));
}

// ==========================================
// MUSIK LATAR + ANIMASI BUKA AMPLOP 3D
// ==========================================
const audioEl = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
const musicLabel = document.getElementById("music-label");
const bukaBtn = document.getElementById("btn-buka-undangan");
const envelopeCard = document.getElementById("envelope-card");

if (audioEl && CONFIG.urlMusik) {
    audioEl.src = CONFIG.urlMusik;
    audioEl.load();
    audioEl.addEventListener("error", () => {
        console.error("Gagal memuat file audio:", audioEl.src);
    });
}

function perbaruiLabelMusik() {
    if (!musicBtn || !audioEl) return;
    if (audioEl.paused) {
        musicBtn.classList.remove("is-playing");
        if (musicLabel) musicLabel.innerText = "Musik: OFF";
    } else {
        musicBtn.classList.add("is-playing");
        if (musicLabel) musicLabel.innerText = "Musik: ON";
    }
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
        if (envelopeCard) {
            envelopeCard.classList.add("is-opening");
        }
        await toggleMusik(true);
        setTimeout(() => {
            const ayatSection = document.getElementById("ayat");
            if (ayatSection) {
                ayatSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 420);
    });
}

// ==========================================
// TOMBOL COPY REKENING / E-WALLET
// ==========================================
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

// ==========================================
// HITUNG MUNDUR (COUNTDOWN TIMER)
// ==========================================
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

// ==========================================
// RSVP & UCAPAN (TERSIMPAN DI LOCALSTORAGE)
// ==========================================
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
