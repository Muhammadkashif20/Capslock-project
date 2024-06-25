function CapslockLink() {
    var inp=document.getElementById('text-Inp')
    var link=document.getElementById('Capslock')
   if(link.innerText=='Caps lock is OFF'){
    link.innerText='Caps lock is ON'
    inp.style.textTransform='uppercase'
   }
   else{
    link.innerText='Caps lock is OFF'
    inp.style.textTransform='lowercase'

   }
}