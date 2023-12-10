const openShopping = document.querySelector('.openShopping')
const closeShopping = document.querySelector('alisveriskapat')
const list = document.querySelector('.urunlistesi')
const listCard = document.querySelector('.kartlistesi')
const total = document.querySelector('.toplam')
const main = document.querySelector('main')
const quantitiy = document.querySelector('.quantity')



let products = [

{
id : 31,
name : 'Erkek Beyaz Tişört',
images : '31.png',
price : 232
},

{
id : 32,
name : 'Erkek Beyaz Tişört',
images : '32.png',
price : 132
},

{
id : 33,
name : 'Erkek Gri Tişört',
images : '33.png',
price : 122
},


{
id : 34,
name : 'Erkek Kırmızı Tişört',
images : '34.png',
price : 104
},


{
id : 35,
name : 'Erkek Siyah Tişört',
images : '35.png',
price : 152
},


{
id : 36,
name : 'Erkek Lacivert Tişört',
images : '36.png',
price : 12
},


{
id : 37,
name : 'SHACO TİŞÖRT',
images : '37.png',
price : 126
},


{
id : 38,
name : 'Erkek Siyah Tişört',
images : '38.png',
price : 162
},



{
id : 39,
name : 'Erkek Siyah Tişört',
images : '39.png',
price : 112
},


{
id : 40,
name : 'ORC Tişört',
images : '40.png',
price : 104
},

]

let listCards = []

const initApp = () =>{

    products.forEach((value,key) => {

        let newDiv = document.createElement('div')

        newDiv.classList.add('item')

        newDiv.innerHTML = 
        
        `
        
        <img src='${value.images}'>
        
        <div class='title'>${value.name}</div>

        <div class='price'>${value.price.toLocaleString()}</div>
        
        <button onclick="SepeteEkle(${key})">Sepete Ekle</button>
        
        `

        list.appendChild(newDiv)

    })

}

initApp()


// !! NAVBAR İKON VE LİSTELERİ SANDVİÇ MENU İÇİN SEÇİM YAPIYORUM !! \\

const menuIcon = document.querySelector('.ikon')

const menu = document.querySelector('.liste')

const nav = document.querySelector('.navigasyon')

// !!! DARK MODE LIGHT MODE !!! \\

const renkdegis = document.getElementById('toggleDark')

const body = document.querySelector('body')



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


    if(this.classList.toggle(bi-emoji-sunglasses)){

        body.style.background ='linear-gradient(to left, lightblue , white , lightblue , white , lightblue)'

    }else{

        body.style.background ='black'

    }

})