"use strict";

$(document).ready(function() {
  
  var storage = new BoardStorage("sampleBoard");
  storage.loadBoard();

  $( "#new, #inp, #done, #shipped, #other" ).sortable({
    connectWith: ".status"
  }).disableSelection();

  $('#sampleBoard').on("DOMSubtreeModified", function(e){
    storage.saveBoard();
    console.log("happening");
  });  

});