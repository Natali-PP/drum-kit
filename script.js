/* window.addEventListener( "keydown", function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    

    if (!audio) return; //stop function if the user pushes a button whitout a sound
    audio.currentTime = 0;
    audio.play();

    //animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    key.classList.add("playing");
    
});

function removeTransition(e){
    if (e.propertyName === "transform") return; //no pasa si no es un transform
    e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");

keys.forEach( key => key.addEventListener("transitionend", removeTransition)); */
function playBardo(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();

};

function removeTransition(e){
    if (e.propertyName === "transform") return; //no pasa si no es un transform
    e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");

keys.forEach( key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playBardo);
