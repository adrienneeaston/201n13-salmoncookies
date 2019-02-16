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
    },
    render: function () {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookies ()} salmon cookies.`;
            pikeUl.appendChild(liEl);  
        }
    },
};

var seaTac = {
    minCust: 3,
    maxCust: 24,
    avrNumCookies: 1.2, 
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
    },
    render: function () {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookies ()} salmon cookies.`;
            seatacUl.appendChild(liEl);  
        }
    },
};

var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avrNumCookies: 3.7,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
    },
    render: function () {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookies ()} salmon cookies.`;
            centerUl.appendChild(liEl);  
        }
    },
};

var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avrNumCookies: 2.3,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
    },
    render: function () {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookies ()} salmon cookies.`;
            hillUl.appendChild(liEl);  
        }
    },
};

var alkiBeach = {
    minCust: 2,
    maxCust: 16,
    avrNumCookies: 4.6,
    cookies: function () {
        var ranNum = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        var numCookies = Math.ceil(ranNum * this.avrNumCookies);
    },
    render: function () {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookies ()} salmon cookies.`;
            alkiUl.appendChild(liEl);  
        }
    },
};

firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// Display the lists on sales.html.