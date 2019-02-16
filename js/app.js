'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// var hours = ['6am:', '7am;', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:',];

// var pikeUL = document.getElementById('pike');
// var seatacUL = document.getElementById('seatac');
// var centerUL = document.getElementById('center');
// var hillUL = document.getElementById('hill');
// var alkiUL = document.getElementById('alki');

var firstAndPike = {
    minCust: 23,
    maxCust: 65,
    avrNumCookies: 6.3,
    render: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        console.log(ranNum);
        var numCookies = ranNum * this.avrNumCookies;
        console.log(numCookies);
    } 
};

//     render: function () {
//         for(var i = 0; i < days.length; i++) {
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${random ()} salmon cookies.`;
//             pikeUl.appendChild(liEl);  
//     }
// }
// };

var seaTac = {
    minCust: 3,
    maxCust: 24,
    avrNumCookies: 1.2, 
    render: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        console.log(ranNum);
        var numCookies = ranNum * this.avrNumCookies;
        console.log(numCookies);
    } 
};

var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avrNumCookies: 3.7,
    render: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        console.log(ranNum);
        var numCookies = ranNum * this.avrNumCookies;
        console.log(numCookies);
    } 
};

var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avrNumCookies: 2.3,
    render: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        console.log(ranNum);
        var numCookies = ranNum * this.avrNumCookies;
        console.log(numCookies);
    } 
};

var alkiBeach = {
    minCust: 2,
    maxCust: 16,
    avrNumCookies: 4.6,
    render: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        console.log(ranNum);
        var numCookies = ranNum * this.avrNumCookies;
        console.log(numCookies);
    } 
};

firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();

// first.render ();

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// Display the lists on sales.html.