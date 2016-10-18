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

  var template = '<article class="tv-show">'+
  '<div class="left img-container">'+
  '<img src=":img:" alt=":img alt:"></img>'+
  '</div>'+
  '<div class="right info">'+
  '<h1>:name:</h1>'+
  '<p>:summary:</p>'+
  '</div>'+
  '</article>';

  $.ajax({
    url: 'http://api.tvmaze.com/shows',
    success: function (data, textStatus, xhr)
    {
      var $tvShowsContainer= $('#app-body').find('.tv-shows');

      data.forEach(function (show) {
        var article = template
        .replace(':name:', show.name)
        .replace(':img:', show.image.medium)
        .replace(':summary:', show.summary)
        .replace(':img alt:', show.name + " Logo")

        $tvShowsContainer.append($(article))

      })
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
