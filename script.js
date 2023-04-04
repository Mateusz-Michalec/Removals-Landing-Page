window.onload = function () {
  const forms = document.querySelectorAll(".needs-validation");
  const name = document.getElementsByName("name")[0];
  const surname = document.getElementsByName("surname")[0];
  const tel = document.getElementsByName("tel")[0];
  const email = document.getElementsByName("email")[0];
  const message = document.getElementsByName("message")[0];
  const emailed = document.querySelector(".emailed");
  const formData = {};

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        formData.name = name.value;
        formData.surname = surname.value;
        formData.tel = tel.value;
        formData.email = email.value;
        formData.message = message.value;
        emailed.classList.remove("d-none");
        emailed.classList.add("d-block");
      }

      form.classList.add("was-validated");
    });
  });
};
