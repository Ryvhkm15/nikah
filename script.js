// ==========================================
// UBAH DATA PERNIKAHAN DI BAGIAN INI SAJA
// ==========================================
const CONFIG = {
    namaPanggilan: "Herlangga & Zalsa",
    monogramAmplop: "H & Z",
    namaFooter: "HERLANGGA & ZALSA",
    namaPria: "Herlangga Aprilyansah",
    ortuPria: "Putra Pertama dari\nBapak Ramlan\n& Ibu Hernawati",
    namaWanita: "Zalsa Nabila Putri.S.E",
    ortuWanita: "Putri Pertama dari\nBapak Yudi Himawan\n& Ibu Indri Rastuti",

    ayatTeks: '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."',
    ayatSumber: "QS Ar-Rum 21",

    tanggalTeks: "Sabtu, 27 Maret 2027",
    jamAcara: "",
    tanggalCountdown: "2027-03-27T16:00:00+07:00",
    kalenderMulai: "20270327T090000Z", // 16:00 WIB
    kalenderSelesai: "20270327T140000Z", // 21:00 WIB

    stdBulan: "MARET",
    stdTanggal: "27",
    stdTahun: "2027",
    jamAkad: "Pukul 16.00 WIB",
    jamResepsi: "Pukul 19.00 - 21.00 WIB",
    detailJamAkad: "16.00 WIB",
    detailJamResepsi: "19.00 WIB - 21.00 WIB",

    namaLokasi: "Yayasan Darul Aitama",
    alamatLengkap: "Jl. K.H. Mas Mansyur No.47, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230",
    detailLokasiUpper: "YAYASAN DARUL AITAMA",
    detailAlamatLines: "Jl. K.H. Mas Mansyur No.47, Kb. Melati,\nKec. Tanah Abang, Kota Jakarta Pusat,\nDaerah Khusus Ibukota Jakarta 10230",
    linkMaps: "https://maps.app.goo.gl/vtc6LVVJoQGudwiw7",

    // Sesuai nama file di repository root
    urlMusik: "lagu.mp3.mp3",

    // =========================================================
    // BACKGROUND BERLAPIS & BERTEKSTUR TIAP BAGIAN (TIDAK POLOS)
    // =========================================================
    backgrounds: {
        heroCover: [
            'radial-gradient(ellipse 76% 52% at 50% 14%, rgba(245, 226, 186, 0.24) 0%, transparent 64%)',
            'radial-gradient(circle at 14% 84%, rgba(217, 190, 140, 0.24) 0%, transparent 48%)',
            'radial-gradient(circle at 88% 72%, rgba(28, 132, 86, 0.54) 0%, transparent 55%)',
            'repeating-linear-gradient(135deg, rgba(217, 190, 140, 0.04) 0px, rgba(217, 190, 140, 0.04) 1px, transparent 1px, transparent 18px)',
            'linear-gradient(155deg, #03150d 0%, #0b3a26 48%, #03130b 100%)'
        ].join(", "),

        ayatSection: [
            'radial-gradient(circle at 50% 20%, rgba(245, 226, 186, 0.26) 0%, transparent 54%)',
            'radial-gradient(circle at 12% 88%, rgba(112, 16, 35, 0.34) 0%, transparent 50%)',
            'radial-gradient(circle at 90% 18%, rgba(24, 118, 76, 0.28) 0%, transparent 46%)',
            'repeating-linear-gradient(45deg, rgba(217, 190, 140, 0.045) 0px, rgba(217, 190, 140, 0.045) 2px, transparent 2px, transparent 16px)',
            'repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.025) 0px, rgba(255, 255, 255, 0.025) 2px, transparent 2px, transparent 16px)',
            'linear-gradient(175deg, #041b11 0%, #0d3e29 52%, #04170e 100%)'
        ].join(", "),

        mempelaiSection: [
            'radial-gradient(ellipse 72% 48% at 50% 10%, rgba(245, 226, 186, 0.22) 0%, transparent 62%)',
            'radial-gradient(circle at 86% 24%, rgba(217, 190, 140, 0.19) 0%, transparent 46%)',
            'radial-gradient(circle at 16% 84%, rgba(176, 28, 58, 0.52) 0%, transparent 54%)',
            'repeating-radial-gradient(circle at 50% 50%, rgba(255, 232, 188, 0.04) 0px, rgba(255, 232, 188, 0.04) 2px, transparent 2px, transparent 20px)',
            'linear-gradient(165deg, #210309 0%, #520d1b 52%, #1d0207 100%)'
        ].join(", "),

        acaraSection: [
            'radial-gradient(circle at 14% 16%, rgba(217, 190, 140, 0.36) 0%, transparent 44%)',
            'radial-gradient(circle at 88% 84%, rgba(13, 59, 40, 0.14) 0%, transparent 50%)',
            'repeating-linear-gradient(-45deg, rgba(183, 148, 88, 0.055) 0px, rgba(183, 148, 88, 0.055) 1px, transparent 1px, transparent 16px)',
            'linear-gradient(180deg, #fcf8f0 0%, #f3e8d4 55%, #eadcc3 100%)'
        ].join(", "),

        stdSection: [
            'radial-gradient(ellipse 78% 45% at 50% 12%, rgba(255, 245, 208, 0.26) 0%, transparent 64%)',
            'radial-gradient(circle at 14% 85%, rgba(16, 86, 56, 0.5) 0%, transparent 52%)',
            'radial-gradient(circle at 88% 70%, rgba(217, 190, 140, 0.18) 0%, transparent 44%)',
            'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.028) 0px, rgba(255, 255, 255, 0.028) 1px, transparent 1px, transparent 26px)',
            'linear-gradient(175deg, #182718 0%, #324c32 50%, #142014 100%)'
        ].join(", "),

        giftSection: [
            'radial-gradient(ellipse 74% 46% at 50% 10%, rgba(245, 226, 186, 0.24) 0%, transparent 60%)',
            'radial-gradient(circle at 15% 75%, rgba(217, 190, 140, 0.16) 0%, transparent 45%)',
            'radial-gradient(circle at 82% 88%, rgba(22, 3, 8, 0.72) 0%, transparent 56%)',
            'repeating-linear-gradient(45deg, rgba(217, 190, 140, 0.038) 0px, rgba(217, 190, 140, 0.038) 1px, transparent 1px, transparent 18px)',
            'linear-gradient(170deg, #2d050d 0%, #5c0f1e 50%, #240309 100%)'
        ].join(", "),

        storySection: [
            'radial-gradient(circle at 80% 20%, rgba(245, 226, 186, 0.22) 0%, transparent 48%)',
            'radial-gradient(circle at 20% 80%, rgba(8, 38, 24, 0.56) 0%, transparent 52%)',
            'repeating-linear-gradient(-45deg, rgba(255, 248, 224, 0.034) 0px, rgba(255, 248, 224, 0.034) 2px, transparent 2px, transparent 18px)',
            'linear-gradient(180deg, #172517 0%, #2e452e 52%, #121d12 100%)'
        ].join(", "),

        galeriSection: [
            'radial-gradient(ellipse 72% 40% at 50% 8%, rgba(217, 190, 140, 0.34) 0%, transparent 58%)',
            'radial-gradient(circle at 88% 85%, rgba(92, 15, 30, 0.11) 0%, transparent 48%)',
            'repeating-radial-gradient(circle at 20% 20%, rgba(183, 148, 88, 0.07) 0px, rgba(183, 148, 88, 0.07) 1.5px, transparent 1.5px, transparent 24px)',
            'linear-gradient(180deg, #fefbf5 0%, #f5ebd8 55%, #e9dcc4 100%)'
        ].join(", "),

        penutupSection: [
            'radial-gradient(ellipse 76% 48% at 50% 18%, rgba(245, 226, 186, 0.24) 0%, transparent 62%)',
            'radial-gradient(circle at 85% 80%, rgba(118, 18, 36, 0.42) 0%, transparent 52%)',
            'repeating-linear-gradient(135deg, rgba(217, 190, 140, 0.04) 0px, rgba(217, 190, 140, 0.04) 1px, transparent 1px, transparent 16px)',
            'linear-gradient(165deg, #041910 0%, #0d3e29 52%, #03130c 100%)'
        ].join(", "),

        ucapanSection: [
            'radial-gradient(circle at 18% 16%, rgba(217, 190, 140, 0.28) 0%, transparent 46%)',
            'radial-gradient(circle at 85% 85%, rgba(13, 59, 40, 0.14) 0%, transparent 50%)',
            'repeating-linear-gradient(45deg, rgba(166, 128, 66, 0.045) 0px, rgba(166, 128, 66, 0.045) 1px, transparent 1px, transparent 14px)',
            'linear-gradient(180deg, #faf5ec 0%, #eee2cd 100%)'
        ].join(", "),

        amplopHero: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.85) 0%, transparent 55%), linear-gradient(160deg, #fffaf0 0%, #ebd9b7 100%)',
        amplopAyat: 'radial-gradient(circle at 70% 25%, rgba(255, 255, 255, 0.76) 0%, transparent 55%), linear-gradient(160deg, #fcf5e8 0%, #e4cfa9 100%)',
        amplopPenutup: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.76) 0%, transparent 55%), linear-gradient(160deg, #fbf3e4 0%, #e1caa3 100%)'
    },

    rek1Nomor: "110293867",
    rek1Bank: "BCA",
    rek1Nama: "a.n Herlangga Aprilyansah",

    rek2Nomor: "4183269335",
    rek2Bank: "PERMATA BANK",
    rek2Nama: "a.n Zalsa Nabila Putri",

    kadoPenerima: "Herlangga & Zalsa",
    kadoAlamat: "Jl. KS TUBUN IV Rt 04 Rw 07 No 31, Slipi Jakarta Barat",
    kadoWA: "0895331933432",
    kadoWA2: "081212708828",

    storyFoto1: "pria.jpg",
    storyFoto2: "wanita.jpg",
    storyJudul1: "Awal Pertemuan",
    storyTeks1: "Tidak ada yang benar-benar kebetulan di dunia ini. Setiap pertemuan telah diatur dengan indah, hanya menunggu waktu yang tepat untuk terjadi. Berawal dari sebuah perkenalan sederhana, tanpa banyak rencana atau harapan berlebihan, kami dipertemukan dalam cara yang tidak pernah kami duga sebelumnya.",
    storyJudul2: "Perjalanan Bersama",
    storyTeks2: "Seiring berjalannya waktu, kebersamaan kecil yang kami lalui perlahan tumbuh menjadi sesuatu yang lebih berarti. Dalam setiap cerita, tentu ada tawa, ada juga tantangan. Namun dari situlah kami belajar untuk saling memahami, menerima, dan melengkapi satu sama lain.",
    storyJudul3: "Komitmen",
    storyTeks3: "Hingga akhirnya kami menyadari bahwa perjalanan ini bukan lagi tentang dua orang yang berjalan sendiri, melainkan tentang dua hati yang memilih untuk melangkah bersama. Dengan penuh rasa syukur dan keyakinan, kami memutuskan untuk mengikat janji suci dan memulai babak baru dalam kehidupan kami.",

    galeriFoto: [
        "pria.jpg",
        "wanita.jpg",
        "pria.jpg"
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

function buildWaUrl(phone, text) {
    const cleanPhone = String(phone || "").replace(/\D/g, "").replace(/^0/, "62");
    if (!cleanPhone) return "#";
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

(function applyGuestName() {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("to") || params.get("tamu");
    if (guest && guest.trim()) {
        setText("nama-tamu", guest.trim());
    }
})();

setText("display-nama-pasangan", CONFIG.namaPanggilan);
setText("display-monogram-amplop", CONFIG.monogramAmplop);
setText("display-footer-nama", CONFIG.namaFooter);
setText("display-nama-pria", CONFIG.namaPria);
setText("display-ortu-pria", CONFIG.ortuPria);
setText("display-nama-wanita", CONFIG.namaWanita);
setText("display-ortu-wanita", CONFIG.ortuWanita);

setText("display-ayat-teks", CONFIG.ayatTeks);
setText("display-ayat-sumber", CONFIG.ayatSumber);

setText("display-tanggal-hero", CONFIG.tanggalTeks);

const waktuLengkapEl = document.getElementById("display-std-waktu-lengkap");
if (waktuLengkapEl) {
    if (CONFIG.jamAcara && CONFIG.jamAcara.trim()) {
        waktuLengkapEl.innerText = `${CONFIG.tanggalTeks} | ${CONFIG.jamAcara}`;
    } else {
        waktuLengkapEl.remove();
    }
}

setText("display-std-bulan", CONFIG.stdBulan);
setText("display-std-tanggal", CONFIG.stdTanggal);
setText("display-std-tahun", CONFIG.stdTahun);
setText("display-std-jam-akad", CONFIG.jamAkad);
setText("display-std-jam-resepsi", CONFIG.jamResepsi);

setText("display-detail-tanggal-akad", CONFIG.tanggalTeks);
setText("display-detail-tanggal-resepsi", CONFIG.tanggalTeks);
setText("display-detail-jam-akad", CONFIG.detailJamAkad);
setText("display-detail-jam-resepsi", CONFIG.detailJamResepsi);
setText("display-detail-lokasi-resepsi", CONFIG.detailLokasiUpper);
setText("display-detail-alamat-akad", CONFIG.detailAlamatLines);
setText("display-detail-alamat-resepsi", CONFIG.detailAlamatLines);

const mapsLink = document.getElementById("display-link-maps-detail");
if (mapsLink && CONFIG.linkMaps) {
    mapsLink.href = CONFIG.linkMaps;
}

setText("display-rek1-nomor", CONFIG.rek1Nomor);
setText("display-rek1-bank", CONFIG.rek1Bank);
setText("display-rek1-nama", CONFIG.rek1Nama);

setText("display-rek2-nomor", CONFIG.rek2Nomor);
setText("display-rek2-bank", CONFIG.rek2Bank);
setText("display-rek2-nama", CONFIG.rek2Nama);

setText("display-kado-penerima", CONFIG.kadoPenerima);
setText("display-kado-alamat", CONFIG.kadoAlamat);
setText("display-kado-wa", CONFIG.kadoWA);
setText("display-kado-wa-2", CONFIG.kadoWA2);

const waGiftBtn1 = document.getElementById("btn-wa-kado");
if (waGiftBtn1 && CONFIG.kadoWA) {
    waGiftBtn1.href = buildWaUrl(
        CONFIG.kadoWA,
        `Halo Zalsa (${CONFIG.kadoPenerima}), saya ingin konfirmasi pengiriman kado pernikahan.`
    );
}

const waGiftBtn2 = document.getElementById("btn-wa-kado-2");
if (waGiftBtn2 && CONFIG.kadoWA2) {
    waGiftBtn2.href = buildWaUrl(
        CONFIG.kadoWA2,
        `Halo Herlangga (${CONFIG.kadoPenerima}), saya ingin konfirmasi pengiriman kado pernikahan.`
    );
}

setSrc("display-story-foto-1", CONFIG.storyFoto1);
setSrc("display-story-foto-2", CONFIG.storyFoto2);
setText("display-story-judul-1", CONFIG.storyJudul1);
setText("display-story-teks-1", CONFIG.storyTeks1);
setText("display-story-judul-2", CONFIG.storyJudul2);
setText("display-story-teks-2", CONFIG.storyTeks2);
setText("display-story-judul-3", CONFIG.storyJudul3);
setText("display-story-teks-3", CONFIG.storyTeks3);

if (Array.isArray(CONFIG.galeriFoto)) {
    CONFIG.galeriFoto.forEach((src, index) => {
        setSrc(`display-galeri-${index + 1}`, src);
    });
}

const closingEl = document.getElementById("display-closing-nama");
if (closingEl) {
    closingEl.innerHTML = `<span>${CONFIG.closingPria}</span><span class="closing-amp">&</span><span>${CONFIG.closingWanita}</span>`;
}

// ==========================================
// THEME SWITCHER & SCROLL PROGRESS BAR
// ==========================================
(function initThemeAndProgress() {
    const THEME_KEY = "undangan_tema_herlangga_zalsa";
    const allowedThemes = ["emerald", "velvet", "botanical"];
    const chips = document.querySelectorAll("[data-theme-option]");

    function applyTheme(themeName) {
        const chosen = allowedThemes.includes(themeName) ? themeName : "emerald";
        document.body.setAttribute("data-wedding-theme", chosen);
        chips.forEach((chip) => {
            chip.classList.toggle("is-active", chip.getAttribute("data-theme-option") === chosen);
        });
        try {
            localStorage.setItem(THEME_KEY, chosen);
        } catch {
            // Abaikan jika storage tidak tersedia
        }
    }

    let savedTheme = "emerald";
    try {
        savedTheme = localStorage.getItem(THEME_KEY) || "emerald";
    } catch {
        savedTheme = "emerald";
    }
    applyTheme(savedTheme);

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            applyTheme(chip.getAttribute("data-theme-option"));
        });
    });

    const progressEl = document.getElementById("scroll-progress-bar");
    if (progressEl) {
        window.addEventListener(
            "scroll",
            () => {
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
                progressEl.style.width = `${pct}%`;
            },
            { passive: true }
        );
    }
})();

// ==========================================
// SIMPAN KE KALENDER (.ICS)
// ==========================================
(function initCalendarDownload() {
    const btn = document.getElementById("btn-save-calendar");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Undangan Pernikahan//Herlangga & Zalsa//ID",
            "BEGIN:VEVENT",
            `DTSTART:${CONFIG.kalenderMulai}`,
            `DTEND:${CONFIG.kalenderSelesai}`,
            `SUMMARY:Pernikahan ${CONFIG.namaPanggilan}`,
            `LOCATION:${CONFIG.namaLokasi} - ${CONFIG.alamatLengkap}`,
            `DESCRIPTION:Akad (${CONFIG.detailJamAkad}) & Resepsi (${CONFIG.detailJamResepsi}) di ${CONFIG.namaLokasi}.`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Pernikahan-Herlangga-Zalsa.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
})();

// ==========================================
// LIGHTBOX PREVIEW FOTO GALERI & LOVE STORY
// ==========================================
(function initLightbox() {
    const lightbox = document.getElementById("photo-lightbox");
    const lightboxImg = document.getElementById("photo-lightbox-img");
    const closeBtn = document.getElementById("photo-lightbox-close");
    if (!lightbox || !lightboxImg || !closeBtn) return;

    function openLightbox(src, alt) {
        if (!src) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || "Preview Foto Momen";
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
    }

    document.querySelectorAll(".gallery-frame img, .polaroid-card img").forEach((img) => {
        img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
    });

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
})();

// ==========================================
// AMPLOP BISA DIBUKA / DITUTUP + MUSIK
// ==========================================
const audio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
const bukaBtn = document.getElementById("btn-buka-undangan");
const hintText = document.getElementById("envelope-hint-text");

if (audio && CONFIG.urlMusik) {
    const sourceEl = audio.querySelector("source");
    if (sourceEl) {
        sourceEl.src = CONFIG.urlMusik;
    }
    audio.src = CONFIG.urlMusik;
    audio.load();
}

function updateMusicButton() {
    if (!musicBtn || !audio) return;
    musicBtn.textContent = audio.paused ? "Musik: OFF" : "Musik: ON";
}

function toggleMusic(forcePlay = false) {
    if (!audio) return;
    if (forcePlay || audio.paused) {
        audio.play().then(updateMusicButton).catch(() => updateMusicButton());
    } else {
        audio.pause();
        updateMusicButton();
    }
}

if (musicBtn) {
    musicBtn.addEventListener("click", () => toggleMusic(false));
}

if (bukaBtn) {
    bukaBtn.addEventListener("click", () => {
        const isNowOpen = bukaBtn.classList.toggle("is-open");
        if (hintText) {
            hintText.textContent = isNowOpen
                ? "AMPLOP TERBUKA - KLIK LAGI UNTUK MENUTUP"
                : "CLICK ENVELOPE TO OPEN";
        }
        if (isNowOpen) {
            toggleMusic(true);
            const targetSection = document.getElementById("ayat");
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }, 650);
            }
        }
    });
}

// ==========================================
// COUNTDOWN TIMER
// ==========================================
(function initCountdown() {
    const targetTime = new Date(CONFIG.tanggalCountdown).getTime();
    if (Number.isNaN(targetTime)) return;

    let timerId = null;

    function updateTimer() {
        const rawDiff = targetTime - Date.now();
        const diff = Math.max(0, rawDiff);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setText("days", String(days).padStart(2, "0"));
        setText("hours", String(hours).padStart(2, "0"));
        setText("minutes", String(minutes).padStart(2, "0"));
        setText("seconds", String(seconds).padStart(2, "0"));

        if (rawDiff <= 0 && timerId !== null) {
            clearInterval(timerId);
        }
    }

    updateTimer();
    timerId = setInterval(updateTimer, 1000);
})();

// ==========================================
// SPARKLES DI SAVE THE DATE (LEBIH RAPIH & SEIMBANG)
// ==========================================
(function initSparkles() {
    const container = document.getElementById("std-sparkles");
    if (!container) return;

    const starCoords = [
        [6, 10], [18, 24], [11, 48], [22, 72], [8, 88],
        [34, 8], [66, 9], [82, 16], [92, 34], [79, 52],
        [91, 68], [84, 86], [28, 92], [72, 91], [44, 15],
        [57, 14]
    ];

    const dotCoords = [
        [13, 17], [25, 36], [9, 62], [19, 82], [38, 12],
        [62, 12], [75, 25], [88, 46], [76, 76], [90, 82],
        [32, 85], [68, 84], [16, 94], [85, 94]
    ];

    starCoords.forEach(([left, top], i) => {
        const star = document.createElement("span");
        star.className = "sparkle-star";
        star.textContent = "✦";
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.fontSize = `${0.68 + (i % 3) * 0.2}rem`;
        star.style.setProperty("--dur", `${2.2 + (i % 4) * 0.45}s`);
        star.style.setProperty("--delay", `${(i % 5) * 0.35}s`);
        container.appendChild(star);
    });

    dotCoords.forEach(([left, top], j) => {
        const dot = document.createElement("span");
        dot.className = "sparkle-dot";
        const size = 4 + (j % 2) * 3;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${left}%`;
        dot.style.top = `${top}%`;
        dot.style.setProperty("--dur", `${2.4 + (j % 4) * 0.5}s`);
        dot.style.setProperty("--delay", `${(j % 5) * 0.4}s`);
        container.appendChild(dot);
    });
})();

// ==========================================
// EFEK KETIKAN (TYPEWRITER) & SCROLL REVEAL
// ==========================================
function runTypewriter(el) {
    if (!el || el.dataset.typedDone === "true") return;
    if (el.children.length > 0) {
        el.dataset.typedDone = "true";
        return;
    }

    const fullText = el.textContent;
    if (!fullText || !fullText.trim()) return;

    const speed = Number(el.getAttribute("data-speed")) || 25;
    el.dataset.typedDone = "true";
    el.textContent = "";
    el.classList.add("typing-active");

    let idx = 0;
    function step() {
        idx += 1;
        el.textContent = fullText.slice(0, idx);
        if (idx < fullText.length) {
            setTimeout(step, speed);
        } else {
            el.classList.remove("typing-active");
        }
    }
    step();
}

(function initRevealAndTypewriter() {
    const sections = document.querySelectorAll(".anim-section");
    if (!sections.length) return;

    const reduceMotion =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function activateSection(section) {
        if (section.dataset.activated === "true") return;
        section.dataset.activated = "true";
        section.classList.add("anim-visible");

        const typeEls = section.querySelectorAll(".typewriter-text");
        if (reduceMotion) {
            typeEls.forEach((el) => {
                el.dataset.typedDone = "true";
            });
            return;
        }

        typeEls.forEach((el, i) => {
            setTimeout(() => runTypewriter(el), i * 110);
        });
    }

    const coverSection = document.getElementById("cover");
    if (coverSection) activateSection(coverSection);

    if (!("IntersectionObserver" in window)) {
        sections.forEach(activateSection);
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activateSection(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    sections.forEach((sec) => observer.observe(sec));
})();

// ==========================================
// TOMBOL COPY NOMOR REKENING
// ==========================================
document.querySelectorAll(".btn-olive-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const targetId = btn.getAttribute("data-copy-target");
        const targetEl = targetId ? document.getElementById(targetId) : null;
        const labelEl = btn.querySelector(".copy-label");
        if (!targetEl) return;

        const textToCopy = targetEl.innerText.trim();
        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch {
            const tempInput = document.createElement("textarea");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }

        btn.classList.add("copied");
        if (labelEl) labelEl.textContent = "Tersalin";
        setTimeout(() => {
            btn.classList.remove("copied");
            if (labelEl) labelEl.textContent = "Copy";
        }, 1800);
    });
});

// ==========================================
// FORM UCAPAN & KONFIRMASI HADIR
// ==========================================
(function initRSVP() {
    const form = document.getElementById("rsvp-form");
    const listEl = document.getElementById("daftar-ucapan");
    if (!form || !listEl) return;

    const STORAGE_KEY = "undangan_ucapan_herlangga_zalsa";

    function loadUcapan() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        } catch {
            return [];
        }
    }

    function saveUcapan(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // Abaikan jika storage tidak tersedia
        }
    }

    function renderUcapan() {
        const items = loadUcapan();
        listEl.innerHTML = "";
        items.forEach((item) => {
            const card = document.createElement("div");
            card.className = "ucapan-item";

            const nama = document.createElement("strong");
            nama.textContent = item.nama;

            const badge = document.createElement("span");
            badge.className = "ucapan-status";
            badge.textContent = item.status;

            const pesan = document.createElement("p");
            pesan.textContent = item.pesan;

            card.append(nama, badge, pesan);
            listEl.appendChild(card);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const namaInput = document.getElementById("rsvp-nama");
        const statusInput = document.getElementById("rsvp-status");
        const pesanInput = document.getElementById("rsvp-pesan");

        const nama = namaInput ? namaInput.value.trim() : "";
        const status = statusInput ? statusInput.value.trim() : "";
        const pesan = pesanInput ? pesanInput.value.trim() : "";
        if (!nama || !status || !pesan) return;

        const items = loadUcapan();
        items.unshift({ nama, status, pesan });
        saveUcapan(items);
        renderUcapan();
        form.reset();
    });

    renderUcapan();
})();
