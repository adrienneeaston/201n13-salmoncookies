'use strict';

//Pulling table id from HTML 

var tableOfStores = document.getElementById('shell');

//creating array to store hours of day

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Constructor function

function Locations(store, minCust, maxCust, avgCookiesPerCust, id) {
  this.store = store; 
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.id = id;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.counter = 0;

  //calculates cookies per hour

  this.calcCustomersEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(random(this.minCust, this.maxCust));
    }
  };
  this.calcCookiesEachHour = function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.counter += oneHour;
    }
  };
}

//creates table data for total cookies each hour

this.render = function() {
  this.calcCookiesEachHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.counter;
  trEl.appendChild(thEl);
  tableOfStores.appendChild(trEl);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total Cookies';
  trEl.appendChild(thEl);
  tableOfStores.appendChild(trEl);
}

var firstandpike = new Locations('First and Pike', 23, 65, 6.3, 'pike');
var seatac = new Locations('Seatac', 3, 24, 1.2, 'seatac');
var seattleCenter = new Locations('Seattle Center', 11, 38, 3.7, 'center');
var capitolHill = new Locations('Capitol Hill', 20, 38, 2.3, 'hill');
var alki = new Locations('Alki', 2, 16, 4.6, 'alki');

var allShops = [firstandpike, seatac, seattleCenter, capitolHill, alki];



(function renderTable() {
  makeHeaderRow();

  })();

// let renderAllShops = function() {
//   // makeHeaderRow();
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// }

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

// var storeLocations = document.getElementById('shell');

// function Locations (store, minCust, maxCust, avrNumCookies) {
//   this.store = store;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avrNumCookies = avrNumCookies;
//   this.totalArray = [];
//   this.counter = 0;
//   //add id for each location to use for dom manipulation this.id = id;
//   this.cookiesPerHour = function() {
//     var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     return Math.ceil(ranNum * this.avrNumCookies);
   
//   };
//   this.total = function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.totalArray.push(this.cookiesPerHour());
      
//   };
//   this.cookiesPerDay = function() {
//     this.total();
//     for(var i = 0; i < this.totalArray.length; i++) {
//       this.counter += this.totalArray[i];
//     }
//     return this.counter;
    
//   };
// }
// };

// var firstAndPike = new Locations ('First and Pike', 23, 65, 6.3);
// var seatac = new Locations ('SeaTac', 3, 24, 1.2);
// var seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7);
// var capitolHill = new Locations ('Capitol Hill', 20, 38, 2.3);
// var alkiBeach = new Locations ('Alki', 2, 16, 4.6);

// Locations.prototype.render = function() {
//   this.cookiesPerDay();
//   for (var i = 0; i < this.totalArray.length; i++) {
//     var newData = document.createElement('td');
//     newData.textContent(this.totalArray[i]);
//     td.appendChild(newData)
//   }
// }





