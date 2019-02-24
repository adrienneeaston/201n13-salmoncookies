'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var table = document.getElementById('table');

var allStores = [];

//Constructor function

function Locations (store, minCust, maxCust, avrNumCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrNumCookies = avrNumCookies;
  this.cookiesPerHour = [];
  this.totalArray = [];
  this.counter = 0;
  allStores.push(this);

  this.cookies = function () {
    var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    var numCookies = Math.ceil(ranNum * this.avrNumCookies);
    return numCookies;
  }

  this.makeArray = function() {
    for(var i = 0; i < hours.length; i++) {
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
   
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.innerHTML = this.store;
    trEl.appendChild(tdEl);
  
    // put data on table for each hour

    for(var j = 0; j < hours.length; j++) {
      var tdEl = document.createElement('td');
      tdEl.innerHTML = this.totalArray[j];
      trEl.appendChild(tdEl);  
    }

    // put the total cookies per day on the table

    var tdEl = document.createElement('td');
    tdEl.innerHTML = this.counter;
    trEl.appendChild(tdEl);
    
    table.appendChild(trEl);
  }
}

//Creating the stores/objects

var firstAndPike = new Locations ('First and Pike', 23, 65, 6.3);
var seatac = new Locations ('SeaTac', 3, 24, 1.2);
var seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7);
var capitolHill = new Locations ('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new Locations ('Alki', 2, 16, 4.6);

// header

function headerRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = "Locations";
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
  var tdEl = document.createElement('td');
  tdEl.innerHTML = hours[i];
  trEl.appendChild(tdEl);
  }

  var tdEl = document.createElement('td'); 
  tdEl.textContent = "Total Cookies Per Day";
  trEl.appendChild(tdEl);

  table.appendChild(trEl);
};

// footer row

function footerRow() {
  console.log('Hello footerRow!');
}

// table data

headerRow();
firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();
footerRow();

