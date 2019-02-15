// var days = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// var alkiUl = document.getElementById('alkibeach');
// var goldenUl = document.getElementById('gg');
// var edmondsUl = document.getElementById('edmondsbeach');

// var alki = {
//   name: 'Alki',
//   neighborhood: 'West Seattle',
//   seagullCount: [
//     212,
//     44,
//     34,
//     14,
//     15, 
//     23,
//     42,
//   ],
//   render: function () {
//     for(var i = 0; i < days.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
//       alkiUl.appendChild(liEl);
//     }
//   }
// };

// var goldenGardens = {
//   name: 'Golden Gardens',
//   neighborhood: 'Crown Hill',
//   seagullCount: [2, 34, 67, 78, 98, 23, 101],
//   render: function () {
//     for(var i = 0; i < days.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
//       goldenUl.appendChild(liEl);
//     }
//   }
// };

// var edmonds = {
//   name: 'Edmonds',
//   neighborhood: 'North Seattle',
//   seagullCount: [24, 34, 54, 63, 75, 87, 94],
//   render: function () {
//     for(var i = 0; i < days.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
//       edmondsUl.appendChild(liEl);
//     }
//   }
// };

// alki.render();
// goldenGardens.render();
// edmonds.render();



'use strict';


// Stores the min/max hourly customers, and the average cookies per customer, in object properties

var hours = ['6am:', '7am;', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:',];

var pikeUL = document.getElementById('pike');
var seatacUL = document.getElementById('seatac');
var centerUL = document.getElementById('center');
var hillUL = document.getElementById('hill');
var alkiUL = document.getElementById('alki');

function random () {
    Math.floor(Math.random() * (maxCust+minCust)) + minCust)

}

var firstAndPike {
    minCust: 23,
    maxCust: 65,
    avrNumCookies: 6.3,
    render: function () {
        for(var i = 0; i < days.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${random ()} salmon cookies.`;
            pikeUl.appendChild(liEl);  
    }
}
};

var seaTac {
    minCust: 3,
    maxCust: 24,
    avrNumCookies: 1.2, 
};

var seattleCenter {
    minCust: 11,
    maxCust: 38,
    avrNumCookies: 3.7,
};

var capitolHill {
    minCust: 20,
    maxCust: 38,
    avrNumCookies: 2.3,
};

var alkiBeach {
    minCust: 2,
    maxCust: 16
    avrNumCookies: 4.6,
};

first.render ();

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// Display the lists on sales.html.