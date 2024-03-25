const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const playpaue = document.querySelector('.playpaue');
const audio = document.querySelector('audio');
const titel = document.querySelector('.titel');

// song list
const SongList = [
{
    phat:'alia.mp3',
    songsName:'Alia'
},
{
    phat:'1.mp3',
    songsName:'Bajaw',
},
{
    phat:'kat.mp3',
    songsName:'kat',
},
{
    phat:'2.mp3',
    songsName:'Lalla',
},
{
    phat:'ritik.mp3',
    songsName:'ratik',
},
];

let Songs = false;

function playSong(){
    Songs = true;
    audio.play();
    playpaue.classList.add('active');
    
}

function pauseSong(){
    Songs = false;
    audio.pause();
    playpaue.classList.remove('active');
    playpaue.innerHTML ='<ion-icon name="pause-outline"></ion-icon>';
    
}

var plam = playpaue.addEventListener('click', () => (Songs ? pauseSong() : playSong()));

function loadSong( SongList){
    titel.textContent = SongList.songsName;
    audio.src = SongList.phat;
}
let i = 1;
loadSong(SongList[i]);

function prevSong(){
    i--;
    if( i < 0){
        i = SongList.length-1;
       
    }
    else{
        loadSong(SongList[i]);
         
         playSong();
        }
}

function nextSong(){
    i++;
    if( i > SongList.length-1){
        i = 0;
        
       

    }
    else{
        loadSong(SongList[i]);
        playSong();
        
        }
}

prev.addEventListener('click',prevSong);
next.addEventListener('click', nextSong);

