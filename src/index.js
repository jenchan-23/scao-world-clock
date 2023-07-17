function updateTime() {
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTime = moment().tz("Australia/Sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM, YYYY");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoTime = moment().tz("Asia/Tokyo");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    tokyoDateElement.innerHTML = tokyoTime.format("Do MMMM, YYYY");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    tokyoTimeElement.innerHTML = tokyoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisTime = moment().tz("Europe/Paris");
    let parisDateElement = parisElement.querySelector(".date");
    parisDateElement.innerHTML = parisTime.format("Do MMMM, YYYY");
    let parisTimeElement = parisElement.querySelector(".time");

    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateSelectCity(events) {
  let cityTimeZone = events.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city-element");
  cityElement.innerHTML = `
<div class="city">
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("Do MMMM, YYYY")}</div>
</div>
<div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
</div>`;
  <a href="/">Back to all cities</a>;
}

setInterval(updateTime, 1000);
let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateSelectCity, 1000);
