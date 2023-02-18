//declare button variables

const TwoD = document.getElementById('2-d');
const Murdoc = document.getElementById('murdoc');
const Russel = document.getElementById('russel');
const Noodle = document.getElementById('noodle');

//declare audio variables

const Jopay = new Audio('member-audio/jopay.mp3');
const Bass = new Audio('member-audio/bass.mp3');
const Drums = new Audio('member-audio/drum.mp3');
const Synth = new Audio('member-audio/synth.mp3');


TwoD.addEventListener('click', () => {
    Jopay.currentTime = 0;
    Jopay.play();
});

Murdoc.addEventListener('click', () => {
    Bass.currentTime = 0;
    Bass.play();
})

Russel.addEventListener('click', () => {
    Drums.currentTime = 0;
    Drums.play();
})

Noodle.addEventListener('click', () => {
    Synth.currentTime = 0;
    Synth.play();
})

