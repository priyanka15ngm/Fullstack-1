//Selector

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

//EVENT LISTENER
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//FUNCTION
function showtime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let todaydate = today.toDateString();

  // am pm format

  const amPm = hour > 12 ? " PM" : " AM";

  //12hour format logic
  hour = hour % 12 || 12;

  //output time
  time.innerHTML = `${addZero(hour)}<span>:<span/>${addZero(
    min
  )}<span>:<span/>${addZero(sec)}${amPm}`;
}
setTimeout(showtime, 1000);

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setGreeting() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = 'url("images/morning.jpg")';
    greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url("images/afternoon.jpg")';
    greeting.innerHTML = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = 'url("images/night.jpg")';
    greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}
//Function call

function getName() {
  if (localStorage.getItem("myData") == null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
    // e.target means name and the be store the innerhtml of name into mydata database which get store into localstorage
  }
}
getName();
showtime();
setGreeting();
