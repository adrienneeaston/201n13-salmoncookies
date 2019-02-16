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
seaTac.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();