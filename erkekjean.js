const openShopping = document.querySelector('.openShopping')
const closeShopping = document.querySelector('alisveriskapat')
const list = document.querySelector('.urunlistesi')
const listCard = document.querySelector('.kartlistesi')
const total = document.querySelector('.toplam')
const main = document.querySelector('main')
const quantitiy = document.querySelector('.quantity')



let products = [

{
id : 21,
name : 'Erkek Siyah Kot',
images : '21.png',
price : 232
},

{
id : 22,
name : 'Erkek Lacivert Kot',
images : '22.png',
price : 132
},

{
id : 23,
name : 'Erkek Lacivert Kot',
images : '23.png',
price : 122
},


{
id : 24,
name : 'Erkek Gri Kot',
images : '24.png',
price : 104
},


{
id : 25,
name : 'Erkek Lacivert Kot',
images : '25.png',
price : 152
},


{
id : 26,
name : 'Erkek Siyah Kot',
images : '26.png',
price : 12
},


{
id : 27,
name : 'Erkek Siyah Kot',
images : '27.png',
price : 126
},


{
id : 28,
name : 'Erkek Siyah Kot',
images : '28.png',
price : 162
},



{
id : 29,
name : 'Erkek Siyah Kot',
images : '29.png',
price : 112
},


{
id : 30,
name : 'Erkek Açık Mavi Kot',
images : '30.png',
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