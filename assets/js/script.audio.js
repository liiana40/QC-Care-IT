const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const playPause = document.querySelector("#playPause");
const next = document.querySelector("#next");
const audio = document.querySelector("audio");

const songList = [
    {
        path: "./assets/music/Tom Novy - Hypnotize.mp3",
        songName: "Hypnotize - Tom Novy",
    },
    {
        path: "./assets/music/this-minimal-technology-pure.mp3",
        songName: "this-minimal-technology-pure",
    },
    {
        path: "./assets/music/own.mp3",
        songName: "own brand freestyle",
    }
];
let song_Playing = false;

// play song
function playSong() {
    song_Playing = true;
    audio.play();
    playPause.classList.add("active");

    // change icon
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

// pause song
function pauseSong() {
    song_Playing = false;
    audio.pause();
    playPause.classList.remove("active");

    // change icon
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// play or pause song on click
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));

// load song
function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
}

// current song
let i = 0;

//On load - select first song from song list
loadSong(songList[i]);

// previous song
function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

// next song
function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);