const formEl = document.querySelector("form");
const inputEl = document.querySelector("form input");
const checkboxEl = document.querySelector("form input[type='checkbox']");

formEl.addEventListener(
  "submit",
  (event) => {
    event.preventDefault(); // Stops defaults actions

    if (inputEl.value.length <= 3 || inputEl.value.length > 20) {
      alert("Validation error : Enter Name 3 to 20 Letters");
      return;
    }

    if (!checkboxEl.checked) {
      alert("check the Terms");
      return;
    }
    console.log("Form Submitted : ", inputEl.value, checkboxEl.checked);

    console.log("Default Prevent : ", event.defaultPrevented);
  }
  //   { passive: true }
);
