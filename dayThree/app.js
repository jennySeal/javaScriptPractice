const play = (id) => {
    let audio = new Audio(`./audio/${id}.mp3`);
    audio.play()
}