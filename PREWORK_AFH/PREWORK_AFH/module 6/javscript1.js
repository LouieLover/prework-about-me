<!DOCTYPE html>
<html>
<head>
    <title>Jiggle Into JavaScript</title>
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> --&gt;
</head>
<body>

    <p>Press the buttons to change the box!</p>

    <div id="box" style="height:150px; width:150px; background-color:orange; margin:25px"></div>

    <button id="button1">Grow</button>
    <button id="button2">Blue</button>
    <button id="button3">Fade</button>
    <button id="button4">Reset</button>

    <script type="text/javascript" src="javascript.js">
    const box = document.getElementById('box');
let outInterval = null;

document.getElementById("growBtn").addEventListener("click", function() {
  let height = box.offsetHeight + 50;
  let width = box.offsetWidth + 50;
  
  box.style.height = height + 'px';
  box.style.width = width + 'px';
{"}"});

document.getElementById("blueBtn").addEventListener("click", function() {
  box.style.backgroundColor = 'blue';
&rbrace;);

document.getElementById("fadeBtn").addEventListener("click", function() {
  fadeOut(box, 2000);
&rbrace;);

document.getElementById("resetBtn").addEventListener("click", function() {
  // Reset 'Grow'
  box.style.height = '150px';
  box.style.width = '150px';
  
  // Reset 'Blue'
  box.style.backgroundColor = 'orange';
  
  // Reset 'Fade'
  clearInterval(outInterval);
  box.style.opacity = 1;
&rbrace;);

function fadeOut(elem, speed) {
  if (!elem.style.opacity) {
    elem.style.opacity = 1;
  &rbrace; // end if

  outInterval = setInterval(function() {
    elem.style.opacity -= 0.02;
    if (elem.style.opacity <= 0) {
      clearInterval(outInterval);
    &rbrace; // end if
  &rbrace;, speed / 50);
&rbrace;;

        
        
    </script> 
    

    

</body>
</html>