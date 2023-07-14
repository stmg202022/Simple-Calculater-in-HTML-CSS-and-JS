let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.value);

    const value = e.target.value;

    if (value === "=") {
      string = eval(string);

      if (string == undefined) {
        string = "";
      }

      document.querySelector("input").value = string;
    } else if (value === "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.value;
      document.querySelector("input").value = string;
    }
  });
});
