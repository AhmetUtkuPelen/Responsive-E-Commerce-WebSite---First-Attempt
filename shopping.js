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





// ! ÜRÜN EKLEYİP SEPETE GÖNDERME FONKSİYONLARINI YAZIYORUM ! \\



const openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.alisveriskapat')
const list = document.querySelector('.alisverisliste')
const listCard = document.querySelector('.sepetliste')
const total = document.querySelector('.toplam')
const body2 = document.querySelector('body')
const quantity = document.querySelector('.quantity')






openShopping.addEventListener('click', () => {

    body2.classList.add('aktif')

})


closeShopping.addEventListener('click', () => {

    body2.classList.remove('.aktif')

})





let products = [





{
    id:1,
    name:'ÜRÜN1',
    images:'11.png',
    price:501
},

{
    id:2,
    name:'ÜRÜN2',
    images:'21.png',
    price:502
},

{
    id:3,
    name:'ÜRÜN3',
    images:'31.png',
    price:503
},



{
    id:4,
    name:'ÜRÜN4',
    images:'12.png',
    price:505
},

{
    id:5,
    name:'ÜRÜN5',
    images:'22.png',
    price:506
},



{
    id:6,
    name:'ÜRÜN6',
    images:'3.png',
    price:508
},

{
    id:7,
    name:'ÜRÜN7',
    images:'13.png',
    price:509
},


{
    id:8,
    name:'ÜRÜN8',
    images:'14.png',
    price:513
},



{
    id:9,
    name:'ÜRÜN9',
    images:'6.png',
    price:520
},


{
    id:10,
    name:'ÜRÜN10',
    images:'36.png',
    price:523
},


{
    id:11,
    name:'ÜRÜN11',
    images:'37.png',
    price:527
},
{
    id:12,
    name:'ÜRÜN12',
    images:'8.png',
    price:528
},


{
    id:13,
    name:'ÜRÜN13',
    images:'38.png',
    price:531
},
{
    id:14,
    name:'ÜRÜN14',
    images:'9.png',
    price:532
},

{
    id:15,
    name:'ÜRÜN15',
    images:'29.png',
    price:534
},

{
    id:16,
    name:'ÜRÜN16',
    images:'10.png',
    price:536
},

{
    id:17,
    name:'ÜRÜN17',
    images:'30.png',
    price:538
},
{
    id:18,
    name:'ÜRÜN18',
    images:'40.png',
    price:539
},


]



 let listCards = []


 const initApp = () => {

    products.forEach((value , key)=>{

        let newDiv = document.createElement('div')

        newDiv.classList.add('item')

        newDiv.innerHTML = 
        `
        

        <img src='${value.images}'>


        <div class='title'>${value.name}</div>


        <div class='price'>${value.price.toLocaleString()}</div>


        <button onclick='addToCard(${key})'>Sepete Ekle</button>


        `


        list.appendChild(newDiv)


    })

 }

 initApp()







//  ! SEPETE EKLE FONKSİYONUNU YAZIYORUM ! \\



const addToCard = (key) =>{

    if(listCards[key] == null){

        
        listCards[key] = JSON.parse(JSON.stringify(products[key]))


        listCards[key].quantity = 1


    }

    reloadCard()


}



const reloadCard = () =>{

    listCard.innerHTML = ''

    let count = 0

    let totalPrice = 0


    listCards.forEach((value,key)=> {

     
    totalPrice = totalPrice + value.price

    count = count + value.quantity

    
    if(value != null){

        let newDiv = document.createElement('li')


        newDiv.innerHTML = 
        
        `
        
        <div><img src='${value.images}'></div>

        <div class='cardTitle'>${value.name}<div>

        <div class='cardPrice'>${value.price.toLocaleString()}</div>

        <div>
        <button style="background_color:black" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
            <div class='count'>${count}</div>
        <button style="background_color:black" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity +1})">+</button>
        </div>


        `


    }

    total.innerText = totalPrice.toLocaleString()

    quantity.innerText = count

    })

}


const changeQuantity = (key, quantity) =>{

    if(quantity == 0){
    delete listCards[key]
    }else{
    listCards[key].quantity = quantity
    listCards[key].price = quantity * products[key].price
    }

    reloadCard()

}