/*=============== FRASES CUSTOMIZAVEIS DE ACORDO COM A HORA ==============*/

 // Obtém a hora atual
 var agora = new Date();
 var hora = agora.getHours();

 // Define as frases para diferentes horários
 var frases = [
     "Bom dia",
     "Boa tarde",
     "Boa noite"
 ];

 // Escolhe a frase com base na hora atual
 var fraseDoDia;
 if (hora >= 6 && hora < 12) {
     fraseDoDia = frases[0]; // Manhã
 } else if (hora >= 12 && hora < 18) {
     fraseDoDia = frases[1]; // Tarde
 } else {
     fraseDoDia = frases[2]; // Noite
 }

 // Atualiza o conteúdo da div com a frase apropriada
 document.getElementById("greetings").innerHTML = fraseDoDia;


 /*============================= NAVBAR EXPANDIVEL ===========================*/


 /*====================== BARRA DE PROGRESSO DA MUSICA =======================*/
const image = document.getElementById('cover')
const linkImagem = document.getElementById('cover');
title = document.getElementById('music-title')
artist = document.getElementById('music-artist')
currentTimeEl = document.getElementById('current-time'),
durationEl = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play');

const music = new Audio();

const songs = [
    {
        path: 'songs/1.mp3',
        displayName: 'Live and Learn',
        cover: 'images/1.jpg',
        artist: 'Crush 40'
    },
    {
        path: 'songs/2.mp3',
        displayName: 'Lost',
        cover: 'images/2.jpg',
        artist: 'Linkin Park'
    },
    {
        path: 'songs/3.mp3',
        displayName: 'Wonderwall',
        cover: 'images/3.jpg',
        artist: 'Oasis'
    },
    {
        path: 'songs/4.mp3',
        displayName: 'Hot Girl Bummer',
        cover: 'images/4.jpg',
        artist: 'Black Bear'
    },
    {
        path: 'songs/5.mp3',
        displayName: 'Delírios',
        cover: 'images/5.jpg',
        artist: 'Fabricio FBC, VHOOR, Djair Voz Cristalina'
    },
    {
        path: 'songs/6.mp3',
        displayName: 'Somos Poucos Mas Somos Loucos',
        cover: 'images/6.jpg',
        artist: 'Charlie Brown Jr.'
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    // change play button icon
    playBtn.classList.replace('bx-play-circle','bx-pause-circle');
    music.play();
}

function pauseMusic(){
    isPlaying = false ;
    // change pause button icon
    playBtn.classList.replace('bx-pause-circle','bx-play-circle');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
}

function abrirImagem () {

 linkImagem.addEventListener("click", function(event) {
      // Abre a imagem em uma nova aba
      window.open(image.src, "_blank");
})};

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) %
    songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const { duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).
    padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e){
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);


// ========================== MISCELANEOUS =========================//

var progressM1 = document.getElementById('progress');
var progressM2 = document.getElementById('progressM');
var playerM = document.getElementById('player-progress');

  // Adicionando um manipulador de eventos para o evento 'mouseover' do elemento B
  playerM.addEventListener("mouseover", function() {
    // Tornando o elemento A visível quando o mouse estiver sobre B
    progressM2.style.display = "block"; // Ou use "inline" ou outro valor de acordo com sua necessidade
    progressM1.style.backgroundColor = "var(--main-color)";
  });

  // Adicionando um manipulador de eventos para o evento 'mouseout' do elemento B
  playerM.addEventListener("mouseout", function() {
    // Tornando o elemento A invisível quando o mouse sair de B
    progressM2.style.display = "none";
    progressM1.style.backgroundColor = "#fff";
  });


