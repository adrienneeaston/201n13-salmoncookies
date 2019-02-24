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

// creates data table

  this.render = function () {
    cookies();
    tableRows();    
}
};

var firstAndPike = new Locations ('First and Pike', 23, 65, 6.3);
var seatac = new Locations ('SeaTac', 3, 24, 1.2);
var seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7);
var capitolHill = new Locations ('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new Locations ('Alki', 2, 16, 4.6);


// Random number generator

function cookies(minCust, maxCust, avrNumCookies) {
  var ranNum = Math.floor((Math.random() * (maxCust - minCust + 1)) + minCust);
  var numCookies = Math.ceil(ranNum * avrNumCookies);
  return numCookies;
};

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

// table data

function tableRows() {
  console.log('Hello tableRows!');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.innerHTML = this.store;
  trEl.appendChild(tdEl);

  for(var j = 0; j < hours.length; j++) {
    console.log('Hello for loop!');
    var totalArray = [];
    var counter = 0;
    totalArray.push(cookies());
    counter += totalArray[j];
    var tdEl = document.createElement('td');
    tdEl.innerHTML = totalArray[j];
    trEl.appendChild(tdEl);  
    }
    var tdEl = document.createElement('td');
    tdEl.innerHTML = counter;
    trEl.appendChild(tdEl);

    table.appendChild(trEl);
  };

headerRow();
// firstAndPike.render();
// seatac.render();
// seattleCenter.render();
// capitolHill.render();
// alkiBeach.render();

// functional for hard coded stores
    // for(var i = 0; i < hours.length; i++) {
    //     totalArray.push(this.cookies());
    //     counter += totalArray[i];
    //     var liEl = document.createElement('td');
    //     liEl.innerHTML = totalArray[i];
    //     this.id.appendChild(liEl);  
    // }
    // var liTotal = document.createElement('td');
    // liTotal.innerHTML = counter;
    // this.id.appendChild(liTotal);

    // footer



    //calculates cookies needed per hour

// Jeff's code review

// var allShops = [firstandpike, seatac, seattleCenter, capitolHill, alki];

// function makeFooterRow() {
//     var trEl =document.createElement('tr');
//     var theEL = documnet.createElement('th');
//     theEL.textContent = 'Hourly Totals for all Locations';
//     trEl.appendChild(thEl);

//     var totalOfHours = 0;
//     var hourlyTotal = 0;

//     for (var i = 0; i <hours.length; i++) {

//         hourlyTotal = 0;

//         for (var j = 0; j < allShops.length; j++) {
//             hourlyTotal += allShops[j].cookiesPerHour[i];
//             totalsOfTotals += allShops[j].cookiesPerHour[i];
//         }

//     theEl = document.createElement('th');
//     thEl.textContent = hourlyTotal;
//     trEl.appendChild(thEl);

//     }

// thEl = document.createElement('th');
// thEl.textContent = totalOfTotals;
// trEl.appendChild(trEl);

// footer.appendChild(trEl);

// }

//end of Jeff's code review and then calling function below