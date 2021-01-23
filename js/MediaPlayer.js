
class MediaPlayer {
  constructor(video){
    this.video = video.mi;
    this.plugins = video.plugins || [];
    
    this._initPlugings();
  }
  _initPlugings(){
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play () {
    if(this.video.paused){
      this.video.play();
    }
    else{
      this.video.pause();
    }
  }
  mute(){
    this.video.muted =  true;
  }
  unmute(){
    this.video.muted = false;
  }
  muteUnmute(){
    if( this.video.muted ){
      this.unmute()
    }else{
      this.mute()
    }
  }
}

export default MediaPlayer;