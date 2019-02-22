'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var pikeUl = document.getElementById('pike');
var seatacUl = document.getElementById('seatac');
var centerUl = document.getElementById('center');
var hillUl = document.getElementById('hill');
var alkiUl = document.getElementById('alki');

var firstAndPike = {
    minCust: 23,
    maxCust: 65,
    avrNumCookies: 6.3,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
        return numCookies;
    },
    render: function () {
        var totalArray = [];
        var counter = 0
        for(var i = 0; i < hours.length; i++) {
            totalArray.push(this.cookies());
            counter += totalArray[i];
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
            pikeUl.appendChild(liEl);  
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
        pikeUl.appendChild(liTotal);
    },
};


var seaTac = {
    minCust: 3,
    maxCust: 24,
    avrNumCookies: 1.2, 
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
        return numCookies;
    },
    render: function () {
        var totalArray = [];
        var counter = 0
        for(var i = 0; i < hours.length; i++) {
            totalArray.push(this.cookies());
            counter += totalArray[i];
            console.log(counter);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
            seatacUl.appendChild(liEl);  
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
        seatacUl.appendChild(liTotal);
    },
};


var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avrNumCookies: 3.7,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
        return numCookies;
    },
    render: function () {
        var totalArray = [];
        var counter = 0
        for(var i = 0; i < hours.length; i++) {
            totalArray.push(this.cookies());
            counter += totalArray[i];
            console.log(counter);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
            centerUl.appendChild(liEl);  
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
        centerUl.appendChild(liTotal);
    },
};


var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avrNumCookies: 2.3,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
        return numCookies;
    },
    render: function () {
        var totalArray = [];
        var counter = 0
        for(var i = 0; i < hours.length; i++) {
            totalArray.push(this.cookies());
            counter += totalArray[i];
            console.log(counter);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
            hillUl.appendChild(liEl);  
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
        hillUl.appendChild(liTotal);
    },
};


var alkiBeach = {
    minCust: 2,
    maxCust: 16,
    avrNumCookies: 4.6,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
        return numCookies;
    },
    render: function () {
        var totalArray = [];
        var counter = 0
        for(var i = 0; i < hours.length; i++) {
            totalArray.push(this.cookies());
            counter += totalArray[i];
            console.log(counter);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
            alkiUl.appendChild(liEl);  
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
        alkiUl.appendChild(liTotal);
    },
};

firstAndPike.render();
// seaTac.render();
// seattleCenter.render();
// capitolHill.render();
// alkiBeach.render();

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// Display the lists on sales.html. 


// 'use strict';

// //Pulling table id from HTML 

// var tableOfStores = document.getElementById('shell');

// //creating array to store hours of day

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// //Constructor function

// function Locations(store, minCust, maxCust, avgCookiesPerCust, id) {
//   this.store = store; 
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookiesPerCust = avgCookiesPerCust;
//   this.id = id;
//   this.custPerHour = [];
//   this.cookiesPerHour = [];
//   this.counter = 0;

//   //calculates cookies per hour

//   this.calcCustomersEachHour = function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.custPerHour.push(random(this.minCust, this.maxCust));
//     }
//   };
//   this.calcCookiesEachHour = function() {
//     this.calcCustomersEachHour();
//     for (var i = 0; i < hours.length; i++) {
//       var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(oneHour);
//       this.counter += oneHour;
//     }
//   };
// }

// //creates table data for total cookies each hour

// this.render = function() {
//   this.calcCookiesEachHour();
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.store;
//   trEl.appendChild(tdEl);

//   for (var i = 0; i < hours.length; i++) {
//     tdEl = document.createElement('td');
//     tdEl.textContent = this.cookiesPerHour[i];
//     trEl.appendChild(tdEl);
//   }

//   var thEl = document.createElement('th');
//   thEl.textContent = this.counter;
//   trEl.appendChild(thEl);
//   tableOfStores.appendChild(trEl);
// };

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function makeHeaderRow() {
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Locations';
//   trEl.appendChild(thEl);

//   for(var i = 0; i < hours.length; i++) {
//     thEl = document.createElement('th');
//     thEl.textContent = hours[i];
//     trEl.appendChild(thEl);
//   }

//   thEl = document.createElement('th');
//   thEl.textContent = 'Total Cookies';
//   trEl.appendChild(thEl);
//   tableOfStores.appendChild(trEl);
// }

// var firstandpike = new Locations('First and Pike', 23, 65, 6.3, 'pike');
// var seatac = new Locations('Seatac', 3, 24, 1.2, 'seatac');
// var seattleCenter = new Locations('Seattle Center', 11, 38, 3.7, 'center');
// var capitolHill = new Locations('Capitol Hill', 20, 38, 2.3, 'hill');
// var alki = new Locations('Alki', 2, 16, 4.6, 'alki');

// var allShops = [firstandpike, seatac, seattleCenter, capitolHill, alki];



// (function renderTable() {
//   makeHeaderRow();

//   })();

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





