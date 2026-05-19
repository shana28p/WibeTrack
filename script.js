// Get Elements
// Get Elements
const moodSelect = document.getElementById("moodSelect");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const player = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");


// Songs Object
const songs = {

    happy: {
        src: "happy.mp3",
        title: "Happy Mood Song"
    },

    sad: {
        src: "sad.mp3",
        title: "Sad Mood Song"
    },

    chill: {
        src: "chill.mp3",
        title: "Chill Mood Song"
    },

    romantic: {
        src: "romantic.mp3",
        title: "Romantic Mood Song"
    },

    study: {
        src: "study.mp3",
        title: "Study Focus Music"
    },

    energetic: {
        src: "energetic.mp3",
        title: "Energetic Workout Music"
    },

    lofi: {
        src: "lofi.mp3",
        title: "LoFi Relax Music"
    }
};


// Play Button Event
playBtn.addEventListener("click", function () {

    const mood = moodSelect.value;

    if (mood === "") {
        alert("Please select a mood!");
        return;
    }

    player.src = songs[mood].src;

    songTitle.innerText = songs[mood].title;

    player.play();
});


// Pause Button Event
pauseBtn.addEventListener("click", function () {
    player.pause();
});


// Stop Button Event
stopBtn.addEventListener("click", function () {

    player.pause();

 player.currentTime = 0;
});

moodSelect.addEventListener("change", function () {

    const mood = moodSelect.value;

    if (mood === "happy") {
        document.body.style.background = "linear-gradient(135deg,#f6d365,#fda085)";
    }

    else if (mood === "sad") {
        document.body.style.background = "linear-gradient(135deg,#4facfe,#00f2fe)";
    }

    else if (mood === "chill") {
        document.body.style.background = "linear-gradient(135deg,#43e97b,#38f9d7)";
    }

    else if (mood === "romantic") {
        document.body.style.background = "linear-gradient(135deg,#ff9a9e,#fad0c4)";
    }
   

    else if (mood === "study") {
        document.body.style.background = "linear-gradient(135deg,#a18cd1,#fbc2eb)";
    }

    else if (mood === "energetic") {
        document.body.style.background = "linear-gradient(135deg,#f093fb,#f5576c)";
    }

    else if (mood === "lofi") {
        document.body.style.background = "linear-gradient(135deg,#5ee7df,#b490ca)";
    }

    else {
        document.body.style.background = "linear-gradient(135deg,#667eea,#764ba2)";
    }
});