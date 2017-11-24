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

