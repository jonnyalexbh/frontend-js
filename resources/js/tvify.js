$(document).ready(function(){

  $('#app-body')
  .find('form')
  .submit(function (ev) {
    ev.preventDefault();
    // alert('Se hizo submit con el valor:' + )
    var busqueda= $(this)
    .find('input[type="text"]')
    .val();
    alert('Se ha buscado:' + busqueda);
  })

  $.ajax({
    url: 'http://api.tvmaze.com/shows',
    success: function (data, textStatus, xhr)
    {
      console.log(data);
    }
  })

})

/* Add and remove class time */

// var $h1= $('h1');
//
// $h1.addClass('danger'); // Add class
//
// setTimeout(function () {    // remove class time
//   $h1.removeClass('danger');
// },1500)


/* Iniciar documento jquery */

// $(document).ready(function(){
//   alert('ready')
// })

/* Funcion en variable */

// var alerta = function (mensaje)
// {
//   alert(mensaje)
// }
// alerta('Hola jonnyalex.bh')
