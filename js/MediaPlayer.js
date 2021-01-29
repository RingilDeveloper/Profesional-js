
class MediaPlayer {
  constructor(video){
    this.video = video.mi;
    this.plugins = video.plugins || [];
    
    this._initPlugings();
  }
  _initPlugings(){
    const player = {
      play: () =>this.play(),
      pause: () => this.pause(),
      video: this.video,
      get muted(){
        return this.video.muted
      },
      set muted(value){
        this.video.muted= value
      }
    }
    this.plugins.forEach(plugin => {
      plugin.run(player);
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