$(document).ready(function() {
  $('#start').on('click', message);
  $("#color").on("click", '.box' , game);

  var colors = ["red" , "green" , "yellow" , "blue" , "black" , "purple"];
  var randColor;
  $("#color").append('<div class = "box" id = "red"></div>');
  $("#color").append('<div class = "box" id = "green"></div>');
  $("#color").append('<div class = "box" id = "yellow"></div>');
  $("#color").append('<div class = "box" id = "blue"></div>');
  $("#color").append('<div class = "box" id = "black"></div>');
  $("#color").append('<div class = "box" id = "purple"></div>');

  function colorChooser(){
    var index = randomNumber(0 , 5);
    randColor = colors[index];
  }

  function message(){

    colorChooser();
    $('#messages').html("Prepare yourselves, the color is coming: " + randColor );

  }


  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };


  function game(){
    console.log('hello');
    var thisColor = $(this).attr('id');
    if (thisColor == randColor){
      $('#correct').append("<p>Way to go!</p>").fadeOut(3000);
    } else {
      $('#incorrect').append("<p>You'll get it next time!</p>").fadeOut(3000);
      }
  };
});
