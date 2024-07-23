const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();
console.log(today);

let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = daysInWeek[today.getDay()];
month.innerHTML = mL[today.getMonth()];
year.innerHTML = today.getFullYear();