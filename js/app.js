'use strict';

var table = document.getElementById('shell');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

function Locations (store, minCust, maxCust, avrNumCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrNumCookies = avrNumCookies;
  this.totalArray = [];
  this.cookiesPerHour = function() {
    var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    return Math.ceil(ranNum * this.avrNumCookies);
  }
  this.total = function() {
    var counter = 0
    for(var i = 0; i < hours.length; i++) {
      this.totalArray.push(this.cookiesPerHour());
      this.counter += this.totalArray[i];
  }
}
};

var firstAndPike = new Locations ('First and Pike', 23, 65, 6.3);
console.log(firstAndPike.cookiesPerHour());
firstAndPike.total();
console.log(firstAndPike.totalArray);
console.log(firstAndPike.counter);

var seatac = new Locations ('SeaTac', 3, 24, 1.2);

var seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7);

var capitolHill = new Locations ('Captiol Hill', 20, 38, 2.3);

var alkiBeach = new Locations ('Alki', 2, 16, 4.6);

console.log(firstAndPike);
console.log(seatac);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alkiBeach);

  // this.cookiesPerHour = function cookiesPerHour() {
  //   var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  //   var numCookies = Math.ceil(ranNum * this.avrNumCookies);
  //   return numCookies;
  // };

      // console.log(totalArray);
    //   var liEl = document.createElement('li');
    //   liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
    //   pikeUl.appendChild(liEl);  
    // }
    // var liTotal = document.createElement('li');
    //   liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
    //   pikeUl.appendChild(liTotal);


// for (var i=0; i < people.length; i++) {
//   data.push(
//     '<td>' + people[i].name + '</td>' +
//     '<td>' + people[i].age + '</td>' +
//     '<td>' + people[i].profession + '</td>'
//   )
// }

// console.log('my data array:', data);

// for (var j = 0; j < data.length; j++) {
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = data[j];
//   table.appendChild(newRow);
// }

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

// var pikeUl = document.getElementById('pike');
// var seatacUl = document.getElementById('seatac');
// var centerUl = document.getElementById('center');
// var hillUl = document.getElementById('hill');
// var alkiUl = document.getElementById('alki');

// var firstAndPike = {
//     minCust: 23,
//     maxCust: 65,
//     avrNumCookies: 6.3,
//     cookies: function () {
//         var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//         var numCookies = Math.ceil(ranNum * this.avrNumCookies);
//         return numCookies;
//     },
//     render: function () {
//         var totalArray = [];
//         var counter = 0
//         for(var i = 0; i < hours.length; i++) {
//             totalArray.push(this.cookies());
//             counter += totalArray[i];
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
//             pikeUl.appendChild(liEl);  
//         }
//         var liTotal = document.createElement('li');
//         liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
//         pikeUl.appendChild(liTotal);
//     },
// };


// var seaTac = {
//     minCust: 3,
//     maxCust: 24,
//     avrNumCookies: 1.2, 
//     cookies: function () {
//         var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//         var numCookies = Math.ceil(ranNum * this.avrNumCookies);
//         return numCookies;
//     },
//     render: function () {
//         var totalArray = [];
//         var counter = 0
//         for(var i = 0; i < hours.length; i++) {
//             totalArray.push(this.cookies());
//             counter += totalArray[i];
//             console.log(counter);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
//             seatacUl.appendChild(liEl);  
//         }
//         var liTotal = document.createElement('li');
//         liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
//         seatacUl.appendChild(liTotal);
//     },
// };


// var seattleCenter = {
//     minCust: 11,
//     maxCust: 38,
//     avrNumCookies: 3.7,
//     cookies: function () {
//         var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//         var numCookies = Math.ceil(ranNum * this.avrNumCookies);
//         return numCookies;
//     },
//     render: function () {
//         var totalArray = [];
//         var counter = 0
//         for(var i = 0; i < hours.length; i++) {
//             totalArray.push(this.cookies());
//             counter += totalArray[i];
//             console.log(counter);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
//             centerUl.appendChild(liEl);  
//         }
//         var liTotal = document.createElement('li');
//         liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
//         centerUl.appendChild(liTotal);
//     },
// };


// var capitolHill = {
//     minCust: 20,
//     maxCust: 38,
//     avrNumCookies: 2.3,
//     cookies: function () {
//         var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//         var numCookies = Math.ceil(ranNum * this.avrNumCookies);
//         return numCookies;
//     },
//     render: function () {
//         var totalArray = [];
//         var counter = 0
//         for(var i = 0; i < hours.length; i++) {
//             totalArray.push(this.cookies());
//             counter += totalArray[i];
//             console.log(counter);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
//             hillUl.appendChild(liEl);  
//         }
//         var liTotal = document.createElement('li');
//         liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
//         hillUl.appendChild(liTotal);
//     },
// };


// var alkiBeach = {
//     minCust: 2,
//     maxCust: 16,
//     avrNumCookies: 4.6,
//     cookies: function () {
//         var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//         var numCookies = Math.ceil(ranNum * this.avrNumCookies);
//         return numCookies;
//     },
//     render: function () {
//         var totalArray = [];
//         var counter = 0
//         for(var i = 0; i < hours.length; i++) {
//             totalArray.push(this.cookies());
//             counter += totalArray[i];
//             console.log(counter);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${totalArray[i]} salmon cookies.`;
//             alkiUl.appendChild(liEl);  
//         }
//         var liTotal = document.createElement('li');
//         liTotal.textContent = `TOTAL DAILY COOKIES: ${counter}`;
//         alkiUl.appendChild(liTotal);
//     },
// };

// firstAndPike.render();
// seaTac.render();
// seattleCenter.render();
// capitolHill.render();
// alkiBeach.render();