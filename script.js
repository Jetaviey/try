// =================================
// TARGET ULANG TAHUN
// =================================

const targetDate = new Date(
    "2026-10-15T00:00:00+07:00"
).getTime();


// =================================
// COUNTDOWN
// =================================

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;


    // =================================
    // JIKA WAKTU SUDAH TIBA
    // =================================

    if (distance <= 0) {

        clearInterval(countdown);

        unlockBirthday();

        return;

    }


    // =================================
    // HITUNG WAKTU
    // =================================

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // =================================
    // TAMPILKAN COUNTDOWN
    // =================================

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");


}, 1000);



// =================================
// MEMBUKA HALAMAN ULANG TAHUN
// =================================

function unlockBirthday() {

    const lockPage =
        document.getElementById("lockPage");

    const birthdayPage =
        document.getElementById("birthdayPage");


    // Hilangkan halaman countdown

    lockPage.classList.remove("active");


    // Tampilkan halaman ulang tahun

    birthdayPage.classList.add("active");


    // Jalankan efek hati

    startHearts();

}



// =================================
// MUSIC
// =================================

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


let isPlaying = false;


musicButton.addEventListener("click", () => {

    if (!isPlaying) {

        music.play();

        musicButton.textContent =
            "⏸ Pause Our Song";

        isPlaying = true;

    }

    else {

        music.pause();

        musicButton.textContent =
            "🎵 Play Our Song";

        isPlaying = false;

    }

});



// =================================
// FLOATING HEART
// =================================

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart-float";


    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}



// =================================
// MENJALANKAN FLOATING HEART
// =================================

function startHearts() {

    setInterval(() => {

        createHeart();

    }, 700);

}