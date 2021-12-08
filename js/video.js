// Get the video
const video = document.getElementById("myVideo");
const srcImagen = document.getElementById("imageVideo");

// Get the button
const btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    srcImagen.setAttribute("src", "recursos/pause.png");
  } else {
    video.pause();
    srcImagen.setAttribute("src", "recursos/play.png");
  }
}
