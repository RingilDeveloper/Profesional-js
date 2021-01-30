
class MediaPlayer {
  video: HTMLVideoElement
  plugins: Array<any>
  constructor(video){
    this.video = video.mi;
    this.plugins = video.plugins || [];
    
    this.initPlugings();
  }
  private initPlugings(){
    
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play () {
      this.video.play();
  }
  pause(){
    this.video.pause();
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