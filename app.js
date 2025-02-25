let hamburgerButton = document.querySelector('.hamburger-przycisk');
let menuMobilne = document.querySelector('.mobilne-menu');
let obszarZawodowySelect = document.querySelector('#obszarZawodowySelect');
let obszarZawodowyGroup = document.querySelector('.obszar-zawodowy-group');
let wojewodzctwoSelect = document.querySelector('#wojewodztwoSelect');
let wojewodztwoGroup = document.querySelector('.wojewodztwo-group');
let wybranyObszarZawodowy = document.querySelector('.wybrany-obszar');
let wybraneWojewodztwo = document.querySelector('.wybrane-wojewodztwo');





function pokazMenu(){
    console.log('worken')
    console.log(menuMobilne)
    menuMobilne.classList.toggle('menu-pokaz')
};

obszarZawodowySelect.addEventListener('click',function(){
    obszarZawodowyGroup.classList.toggle("obszar-pokaz")
    if(wojewodztwoGroup.classList.contains("obszar-pokaz")){
        wojewodztwoGroup.classList.remove("obszar-pokaz")
    }
})
obszarZawodowyGroup.addEventListener('click',function(e){
    let wybranyObszar = e.target.textContent;
    wybranyObszarZawodowy.textContent = wybranyObszar
})

wojewodzctwoSelect.addEventListener('click',function(){
    wojewodztwoGroup.classList.toggle("obszar-pokaz")
    if(obszarZawodowyGroup.classList.contains("obszar-pokaz")){
        obszarZawodowyGroup.classList.remove("obszar-pokaz")
    }
})
wojewodztwoGroup.addEventListener('click',function(e){
    let wybraneWoj = e.target.textContent;
    wybraneWojewodztwo.textContent = wybraneWoj
})