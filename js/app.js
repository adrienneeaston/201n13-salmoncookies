'use strict';

// Things that can be done

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

let table = document.getElementById('table');

let allStores = []; // might be useful later

//Constructor function

function Locations (store, minCust, maxCust, avrNumCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrNumCookies = avrNumCookies;
  this.cookiesPerHour = [];
  this.totalArray = [];
  this.counter = 0;
  allStores.push(this); // might be useful later

  this.cookies = function () {
    let ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    let numCookies = Math.ceil(ranNum * this.avrNumCookies);
    return numCookies;
  }

  this.makeArray = function() {
    for(let i = 0; i < hours.length; i++) {
      this.totalArray.push(this.cookies());
      this.counter += this.totalArray[i];
    }
  }

// creates data table

  this.render = function () {

    this.cookies();
    this.makeArray();

    // Make a row for the table

    // store name on table at start of row
   
    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.innerHTML = this.store;
    trEl.appendChild(tdEl);
  
    // put data on table for each hour

    for(let j = 0; j < hours.length; j++) {
      let tdEl = document.createElement('td');
      tdEl.innerHTML = this.totalArray[j];
      trEl.appendChild(tdEl);  
    }

    // put the total cookies per day on the table

    let tdEl = document.createElement('td');
    tdEl.innerHTML = this.counter;
    trEl.appendChild(tdEl);
    
    table.appendChild(trEl);
  }
}

// header

function headerRow() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = "Locations";
  trEl.appendChild(tdEl);

  for(let i = 0; i < hours.length; i++) {
  let tdEl = document.createElement('td');
  tdEl.innerHTML = hours[i];
  trEl.appendChild(tdEl);
  }

  let tdEl = document.createElement('td'); 
  tdEl.textContent = "Total Cookies Per Day";
  trEl.appendChild(tdEl);

  table.appendChild(trEl);
};

// footer row

function footerRow() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  let counterHourly = 0;
  let counterDaily = 0;
  for (let i = 0; i < hours.length; i++) {
    counterHourly = 0;
    for (let j = 0; j < allStores.length; j++) {
      counterHourly += allStores[j].totalArray[i];
      counterDaily += allStores[j].totalArray[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = counterHourly;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = counterDaily;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
}

// form event listener

let storeList = document.getElementById('newStoreList');
let newStore = document.getElementById ('newStoreForm');

function addStore(event) {
    event.preventDefault();
    console.log(event.target.locationFs.value);
    let locationNew = event.target.locationFs.value;
    let minCustNew = event.target.minCustFs.value;
    let maxCustNew = event.target.maxCustFs.value;
    let avrCookiesNew = event.target.avrCookiesFs.value;

    let newLocation = new Locations(locationNew, minCustNew, maxCustNew, avrCookiesNew);

    event.target.locationFs.value = null;
    event.target.minCustFs.value = null;
    event.target.maxCustFs.value = null;
    event.target.avrCookiesFs.value = null;

    table.innerHTML = '';

    headerRow();
    createStore();
    footerRow();
}

newStore.addEventListener('submit', addStore);

// create for loop where if array length is greater than 5, it will run the add store function

function createStore() {
  for(let i = 0; i < allStores.length; i++) { 
    allStores[i].render();
  }
}

// Do the things

//Creating the stores/objects

let firstAndPike = new Locations ('First and Pike', 23, 65, 6.3);
let seatac = new Locations ('SeaTac', 3, 24, 1.2);
let seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7);
let capitolHill = new Locations ('Capitol Hill', 20, 38, 2.3);
let alkiBeach = new Locations ('Alki', 2, 16, 4.6);

// table data

headerRow();
createStore();
console.log(allStores.length);
// firstAndPike.render();
// seatac.render();
// seattleCenter.render();
// capitolHill.render();
// alkiBeach.render();
// createStore();
footerRow();

// function renderAllStores() {
//   storeList.innerHTML = '';
//   for(let i = 0; i < allStores.length; i++) {
//     storeList.appendChild(allStores[i].render());
//   }
// }



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

