let inputTime = `12:45:12 PM`;
const [time, timeSpecifies] = inputTime.split(" ");
let [hours, min, secs] = time.split(":");
secs = parseInt(secs, 10) + 45;
let inrMin = 0,
  inrHrs = timeSpecifies.toUpperCase() == "PM" ? 12 : 0;
if (secs >= 60) {
  inrMin = 1;
  secs -= 60;
}

min = parseInt(min, 10) + 45 + inrMin;
if (min >= 60) {
  inrHrs += 1;
  min -= 60;
}

hours += inrHrs;

hours %= 24;

console.log([hours, min, secs].join(":"));