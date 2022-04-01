var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click',function(){
   nav.classList.toggle('muestrate');
})

const menuLinks = document.querySelectorAll(".menu a[href^=\"#\"]");

menuLinks.forEach(menuLink =>{
   menuLink.addEventListener("click", function(){
      nav.classList.remove("muestrate");
   })

})
  