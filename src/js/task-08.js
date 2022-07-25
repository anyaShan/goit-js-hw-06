const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const formDataEl = {
    email: email.value,
    password: password.value,
  };
  console.log(formDataEl);
  event.currentTarget.reset();
}
