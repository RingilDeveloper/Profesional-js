class  Autoplay{
  run(player){
    console.log(player.muted)
    if(!player.muted){
    player.muted = true;
    }
    player.play();
  }
}

export default Autoplay;