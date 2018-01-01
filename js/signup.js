$(document).ready(function(){
  var lista = $('.list-flag');
  var phone = $('#input-codigo');
  lista.on('click', function() {
    var codigo = this.dataset.codigo;
    $('#input-codigo').val(codigo);
  });
  var validaPhone = false;
  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validaPhone) {
      $('#boton-phone').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#boton-phone').attr('disabled', 'disabled');
  }
  phone.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 12) {
      validaPhone = true;
      $('#boton-phone').on('click', function(event) {
        event.preventDefault();
        window.location.href = '../views/verificaphone.html';
        localStorage.phone = phone.val();
        var rndCol = random();
        alert('Tu Codigo LAB-'+rndCol);
      });
      activeButton();
    } else {
      desactiveButton();
    }
  });
  function random() {
    return Math.floor(Math.random()*(1000));
  }
});
