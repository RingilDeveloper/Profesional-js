import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './AutoPlay.js'
const video = document.querySelector("video");
const button = document.querySelector("button");

const inicio = new MediaPlayer({mi : video, plugins :[
  //new AutoPlay()
]});
button.onclick = () => inicio.play();