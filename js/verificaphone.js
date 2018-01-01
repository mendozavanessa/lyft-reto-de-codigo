$(document).ready(function(){
  var codigo = $('#input-codigo');
  var validaCodigo = false;
  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validaCodigo) {
      $('#boton-phone').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#boton-phone').attr('disabled', 'disabled');
  }
  codigo.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 3) {
      validaCodigo = true;
      $('#boton-phone').on('click', function(event) {
        event.preventDefault();
        window.location.href = '../views/signup-form.html';
        localStorage.phone = phone.val();
      });
      activeButton();
    } else {
      desactiveButton();
    }
  });
});
