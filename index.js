// navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// tv design
let channels = [
    { src: "Home/movie.mp4", name: "Channel 1" },
    { src: "Home/movie2.mp4", name: "Channel 2" },
    { src: "Home/movie3.mp4", name: "Channel 3" }
  ];

  let currentChannelIndex = 0;
  
  const video = document.getElementById("video");
  
  function togglePower() {
    if (video.paused) {
      video.style.display = "block";
      document.getElementById("screen-bezel").style.backgroundColor = "#fff";
      video.play();
    } else {
      video.pause();
      video.style.display = "none"; 
      document.getElementById("screen-bezel").style.backgroundColor = "#000";
      var audio = new Audio('Home/close.mp3');
      audio.play();
    }
  }
  
  function volumeUp() {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  }
  
  function volumeDown() {
    if (video.volume > 0) {
      video.volume -= 0.1;
    }
  }
  
  function changeChannel() {
    currentChannelIndex++;
    if (currentChannelIndex >= channels.length) {
      currentChannelIndex = 0;
    }
    video.src = channels[currentChannelIndex].src;
    video.play();
    var audio = new Audio('Home/transition.mp3');
    audio.volume = 0.2;
    audio.play();
  }
  
  function goBack() {
    currentChannelIndex--;
    if (currentChannelIndex < 0) {
      currentChannelIndex = channels.length - 1;
    }
    video.src = channels[currentChannelIndex].src;

    video.play();
    var audio = new Audio('Home/transition.mp3');
    audio.volume = 0.2;
    audio.play();
  }
  
  const changeChannelButton = document.getElementById("change-channel-button");
  changeChannelButton.addEventListener("click", changeChannel);
  
  const goBackButton = document.createElement("div");
  goBackButton.id = "go-back-button";
  goBackButton.classList.add("button");
  goBackButton.innerHTML = "<p class='button-text'>CH -</p>";
  goBackButton.addEventListener("click", goBack);
  document.getElementById("buttons").appendChild(goBackButton);

