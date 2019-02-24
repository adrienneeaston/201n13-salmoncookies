'use strict';

// make an html page with a form
    // will need text input boxes for store name, minimum customers, maximum customers, and  average number of cookies per customer.

// the info inputed from html form will need to be used create a new object.
// will need to put appropriate info onto the sale.html page.
    // added to table




// code from class, will use as referece for my form

// var chatList = document.getElementById('chat-list');
// var chatForm = document.getElementById('chat-form');
// var allComments = [];

// var Comment = function(username, text) {
//   this.username = username;
//   this.text = text;
// };

// Comment.prototype.render = function() {
//   var liEl = document.createElement('li');
//   // liEl.innerHtml = '<b>' + this.username + ': </b><em>' + this.text + '</em>';
//   liEl.innerHTML = ' <b>' + this.username + ': </b><em>' + this.text + '</em>';
//   return liEl;

// };

// function handleCommentSubmit(event) {
//   event.preventDefault();
//   var commenter = event.target.who.value;
//   var remark = event.target.says.value;

//   var newComment = new Comment(commenter, remark);

//   event.target.who.value = null;
//   event.target.says.value = null;
  
//   allComments.unshift(newComment);
//   renderAllComments();
// }

// function renderAllComments() {
//   chatList.innerHTML = '';
//   for(var i = 0; i < allComments.length; i++) {
//     chatList.appendChild(allComments[i].render());
//   }
// }

// chatForm.addEventListener('submit', handleCommentSubmit);