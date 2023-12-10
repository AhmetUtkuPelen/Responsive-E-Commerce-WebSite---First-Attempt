// !! NAVBAR İKON VE LİSTELERİ SANDVİÇ MENU İÇİN SEÇİM YAPIYORUM !! \\

const menuIcon = document.querySelector('.ikon')

const menu = document.querySelector('.liste')

const nav = document.querySelector('.navigasyon')

// !!! DARK MODE LIGHT MODE !!! \\

const renkdegis = document.getElementById('toggleDark')

const body = document.querySelector('main')



//  NAVBAR İKON KOD KISMI \\


menuIcon.addEventListener('click', (e) => {

    e.currentTarget.classList.toggle('fa-bars')

    e.currentTarget.classList.toggle('fa-x')

    menu.classList.toggle('navi-goster')

    
})

window.addEventListener('resize',(e) =>{

    if (window.innerWidth > 992){

    menuIcon.classList.add('fa-bars')

    menuIcon.classList.remove('fa-x')

    menu.classList.remove('navi-goster')

    }

})


document.body.addEventListener('click', (e) => {

    if(!e.target.matches('.navigasyon') && !e.target.matches('.ikon')){


        menuIcon.classList.add('fa-bars')

        menuIcon.classList.remove('fa-x')
    
        menu.classList.remove('navi-goster')


    }

})



//  DARK LIGHT MODE KOD KISMI \\




renkdegis.addEventListener('click', function(){

    this.classList.toggle('bi-moon')


    if(this.classList.toggle('bi-emoji-sunglasses')){

        body.style.background ='linear-gradient(to left, lightblue , white , lightblue , white , lightblue)'

    }else{

        body.style.background ='darkgray'

    }

})











// ! İMAGES KISIMLARINI YAZIYORUM ! \\




const imgs = document.querySelectorAll('img-select a')
const imgbuttons = [...imgs]
let imgId = 1

imgbuttons.forEach((imgItem) => {


    imgItem.addEventListener('click', (event) => {

        event.preventDefault()

        imgId = imgItem.dataset.id

        slideImage()


    })

})



function slideImage() {

    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth


    document.querySelector('.img-showcase').style.transform = 'translateX(${- (imgId - 1) *displayWidth}px)'

}

window.addEventListener('resize' , slideImage)