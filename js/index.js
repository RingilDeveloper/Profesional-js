import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './AutoPlay.js'
import AutoPause from './AutoPause.js'

const video = document.querySelector("video");
const button = document.querySelector("button");
const unmute = document.getElementById("unmute")

const inicio = new MediaPlayer({mi : video, plugins :[
  new AutoPlay(),
  new AutoPause(),
]});
button.onclick = () => {
  if(video.paused){
    video.play();
  }
  else{
    video.pause();
}
}
unmute.onclick= () => inicio.muteUnmute();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message)})
}