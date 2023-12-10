const openShopping = document.querySelector('.openShopping')
const closeShopping = document.querySelector('alisveriskapat')
const list = document.querySelector('.urunlistesi')
const listCard = document.querySelector('.kartlistesi')
const total = document.querySelector('.toplam')
const main = document.querySelector('main')
const quantitiy = document.querySelector('.quantity')



let products = [

{
id : 1,
name : 'Erkek Gri Gömlek',
images : '1.png',
price : 232
},

{
id : 2,
name : 'Erkek Kahverengi Gömlek',
images : '2.png',
price : 132
},

{
id : 3,
name : 'Erkek Lacivert Gömlek',
images : '3.png',
price : 122
},


{
id : 4,
name : 'Erkek Lacivert Kareli Gömlek',
images : '4.png',
price : 104
},


{
id : 5,
name : 'Erkek Gri Kareli Gömlek',
images : '5.png',
price : 152
},


{
id : 6,
name : 'Erkek Lacivert Kareli Gömlek',
images : '6.png',
price : 12
},


{
id : 7,
name : 'Erkek Lacivert Kareli Gömlek',
images : '7.png',
price : 126
},


{
id : 8,
name : 'Erkek Siyah Gömlek',
images : '8.png',
price : 162
},



{
id : 9,
name : 'Erkek Oduncu Siyah Gömlek',
images : '9.png',
price : 112
},


{
id : 10,
name : 'Tropikal Erkek Gömlek',
images : '10.png',
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