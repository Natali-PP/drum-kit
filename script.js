window.addEventListener( "keydown", function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)

    if (!audio) return; //stop function if the user pushes a button whitout a sound
    audio.currentTime = 0;
    audio.play();
});
