$(document).ready(function() {
  var $name = $('#inputName');
  var $lastName = $('#inputLastName');
  var $email = $('#inputEmail');
  var $checked = $('input[type="checkbox"]');

  var validateName = false;
  var validateLastName = false;
  var validateEmail = false;
  var validateChecked = false;

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateName && validateLastName && validateEmail && validateChecked) {
      $('#botonNext').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#botonNext').attr('disabled', 'disabled');
  }

  $name.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      validateName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
  $lastName.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      validateLastName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $checked.on('click', function(event) {
    if (event.target.checked) {
    //   alert('entre');
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#botonNext').on('click', function(event) {
    event.preventDefault();
    localStorage.name = $name.val();
    localStorage.lastName = $lastName.val();
    localStorage.email = $email.val();
    window.location.href = 'ultimavista.html';
  });
});
