import MediaPlayer from './MediaPlayer.js';
const video = document.querySelector("video");
const button = document.querySelector("button");

const inicio = new MediaPlayer(video);
button.onclick = () => inicio.play();