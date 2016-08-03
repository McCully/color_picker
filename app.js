$(document).ready(function() {
  alert("Brace yourselves, colors are coming")
  $("#color").on("click" , game);
});
  var colors ["red" , "green" , "yellow" , "blue" , "black" , "purple"];
  var randColor;
  $(".color").append('<div id = "color red"></div>');
  $(".color").append('<div id = "color green"></div>');
  $(".color").append('<div id = "color yellow"></div>');
  $(".color").append('<div id = "color blue"></div>');
  $(".color").append('<div id = "color black"></div>');
  $(".color").append('<div id = "color purple"></div>');

function colorChooser(){
var index = randomNumber(0 , 5);
randColor = colors[index];
}



  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };


function game(){
  var thisColor = $(this).attr('id');
  if (thisColor == randColor){
    $('#correct').append("<p>Way to go!</p>")
  } else {
    $('#incorrect').append("<p>You'll get it next time!</p>")
  }
}
