const scriptURL = 'https://script.google.com/macros/s/AKfycbyzkKlNh-KwQ4fuwLXwYf8KNu9UyqeUv35HsIYlZrjfM31tpvarlDBw28099mGky1x3/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})