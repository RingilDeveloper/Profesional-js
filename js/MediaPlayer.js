
class MediaPlayer {
  constructor(video){
    this.video = video;
  }
  play () {
    if(this.video.paused){
      this.video.play();
    }
    else{
      this.video.pause();
    }
  }
}

export default MediaPlayer;