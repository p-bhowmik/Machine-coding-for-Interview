const currentTime = document.querySelector(".paraTimer");
const btn = document.querySelector(".btn-parent");

//console.log(paraTimer);

let second = 0;
let minute = 0;
let hour = 0;
let timerId;
function displayTimer(hour, minute, second){
    currentTime.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
        minute < 10 ? `0${minute}` : minute
      } : ${second < 10 ? `0${second}` : second}`;
    }

const handleButtonClick = (e) => {
  // alert("hello");
  const button = e.target.name;
  console.log(button);

  if (button === "start") {
    timerId = setInterval(() => {
      second++;
      if (second > 58) {
        second = 0;
        minute++;
      }
      if (minute > 5) {
        minute = 0;
        hour++;
      }

      displayTimer(hour, minute, second);
    }, 100);
  }
  if (button === "stop") {
    clearInterval(timerId);
  }

  if (button === "reset") {
    clearInterval(timerId);
    second = minute = hour = 0;
    displayTimer(hour, minute, second);
  }
};

btn.addEventListener("click", handleButtonClick);
