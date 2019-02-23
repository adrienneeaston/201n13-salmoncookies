'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var header = document.getElementById('header');
var pikeUl = document.getElementById('pike');
var seatacUl = document.getElementById('seatac');
var centerUl = document.getElementById('center');
var hillUl = document.getElementById('hill');
var alkiUl = document.getElementById('alki');
var footer = document.getElementById('footer');

//Constructor function

function Locations (store, minCust, maxCust, avrNumCookies, id) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrNumCookies = avrNumCookies;
  this.totalArray = [];
  this.counter = 0;
  this.id = id;

  this.cookies = function () {
    var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    var numCookies = Math.ceil(ranNum * this.avrNumCookies);
    return numCookies;
    },
  

    this.render = function () {

    var totalArray = [];
    var counter = 0

    // table data
    for(var i = 0; i < hours.length; i++) {
        totalArray.push(this.cookies());
        counter += totalArray[i];
        var liEl = document.createElement('td');
        liEl.innerHTML = totalArray[i];
        this.id.appendChild(liEl);  
    }
    var liTotal = document.createElement('td');
    liTotal.innerHTML = counter;
    this.id.appendChild(liTotal);

    // footer

}
};

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

    // header
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

    header.appendChild(trEl);

var firstAndPike = new Locations ('First and Pike', 23, 65, 6.3, pikeUl);
var seatac = new Locations ('SeaTac', 3, 24, 1.2, seatacUl);
var seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7, centerUl);
var capitolHill = new Locations ('Capitol Hill', 20, 38, 2.3, hillUl);
var alkiBeach = new Locations ('Alki', 2, 16, 4.6, alkiUl);

firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();