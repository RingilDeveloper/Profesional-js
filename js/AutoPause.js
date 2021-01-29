class AutoPause{
  constructor(){
    this.threshold =0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.handleVisibilitychange = this.handleVisibilitychange.bind(this)

  }
  run(player){
    this.player = player
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold //cuando llegue a cierto procentaje (threshold) para o da play el video

  })
  observer.observe(player.video)
  document.addEventListener("visibilitychange",this.handleVisibilitychange) // cuando cambie de tab se pare el video
}
  handlerIntersection(entries){
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= this.threshold
    if(isVisible){
      this.player.play()
    }else{
    this.player.pause()
    }
  }
  handleVisibilitychange(){ 
    const isVisible = document.visibilityState ==="visible"
    if (isVisible){
      this.player.play()
      
    }else{
    this.player.pause()

    }
  }
}
export default AutoPause;