function updateTime() {
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyTime = moment().tz("Australia/Sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM, YYYY");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTime = moment().tz("Asia/Tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  tokyoDateElement.innerHTML = tokyoTime.format("Do MMMM, YYYY");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // paris
  let parisElement = document.querySelector("#paris");
  let parisTime = moment().tz("Europe/Paris");
  let parisDateElement = parisElement.querySelector(".date");
  parisDateElement.innerHTML = parisTime.format("Do MMMM, YYYY");
  let parisTimeElement = parisElement.querySelector(".time");

  parisTimeElement.innerHTML = parisTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
console.log(moment().tz("Europe/Paris"));
setInterval(updateTime, 1000);
