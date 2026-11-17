 /* Optional: plays a soft click when a link, button or tab is pressed.
   Delete the <script> line in index.html if your assignment must stay JavaScript-free. */
document.addEventListener("click", function (e) {
  if (e.target.closest("a, button, summary, label")) {
    var sound = new Audio("click.wav");
    sound.volume = 0.4;
    sound.play();
  }
});