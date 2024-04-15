let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#inputID");
let table = document.querySelector(".time-table");

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    //   console.log(tableOf + " x " + i + " =", tableOf * i);
    const message = `${tableOf}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 X\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${i}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 =\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${tableOf * i}`;

    table.innerHTML += `${message} <br>`;
  }
});


