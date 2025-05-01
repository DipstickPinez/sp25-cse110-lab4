
function printCurrentTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

let intervalID = setInterval(printCurrentTime, 1000);

