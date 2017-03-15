"use strict";

var BoardStorage = function (boardName) {
    if (!(this instanceof BoardStorage)) {
        return new BoardStorage(boardName);
    } 
    this.boardName = boardName;
    this.boardDivId = '#' + this.boardName;
	
};

/* Changes html dom with the stored html content if it exists. */
BoardStorage.prototype.loadBoard = function() {
  var boardHtml = localStorage.getItem(this.boardName);
  if(boardHtml) {
    $(this.boardDivId).empty();
    $(this.boardDivId).append(boardHtml);
  }
};

BoardStorage.prototype.saveBoard = function() {
  var boardHtml = $(this.boardDivId).html().replace(new RegExp( "\>[ ]+\<" , "g" ) , "><" ); 
  localStorage.setItem(this.boardName, boardHtml);
};


