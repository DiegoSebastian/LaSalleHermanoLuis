let mediaquery = window.matchMedia("(max-width: 800px)");
if (mediaquery.matches) {
   let header;
} else {

   window.onload = function Header() {
      let header = document.getElementById("header");
      header.onmousemove = function(e) {
         let x = -(e.clientX / 15 );
         let y = -(e.clientY / 15 + 800);
         header.style.backgroundPosition = x + 'px ' + y + 'px';
      }
   }
}

$(document).ready(function() {
   let institucion = $('#institucion').offset().top;
   let secciones = $('#secciones').offset().top;

   $('#btn_ins').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: institucion 
      }, 500)
   })

   $('#btn-acti').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: secciones 
      }, 500)
   })

   $('#btn-info').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: secciones 
      }, 500)
   })
})

