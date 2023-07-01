const navBar = document.querySelector('.navbar-email')//
const menuImagen = document.querySelector('.menu')//
const carroCompra  = document.querySelector('.navbar-shopping-cart')//
const shopingCartContainer = document.querySelector('#shopingCardContainer')
const deskMenu = document.querySelector('.desktop-menu')
const menuMobile = document.querySelector('.mobile-menu')
const containerCard = document.querySelector('.cards-container')
const productDetail = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')


navBar.addEventListener('click', menuDeskTop)
menuImagen.addEventListener('click', menuMobile1)
carroCompra.addEventListener('click', showArticuloCarro )
productDetailClose.addEventListener('click', closeProductDetail)


function menuDeskTop(){
     const isDeskMenuOpen = shopingCartContainer.classList.contains('inactive')
     if (!isDeskMenuOpen) {
          shopingCartContainer.classList.add('inactive')   
     }
     deskMenu.classList.toggle('inactive') // menu pequeño
}


function showArticuloCarro (){
    const isshopingCartContainerOpen = menuMobile.classList.contains('inactive')
    const isshopingCartContainerClosed = deskMenu.classList.contains('inactive')

    if (!isshopingCartContainerOpen) {
     menuMobile.classList.add('inactive')
     
    }

    if (!isshopingCartContainerClosed) {
     deskMenu.classList.add('inactive')
     
    }
     shopingCartContainer.classList.toggle('inactive') // Carro de 
     
   }

function menuMobile1 (){

     const isMenuMobileOpen = shopingCartContainer.classList.contains('inactive')

     if (!isMenuMobileOpen) {
          shopingCartContainer.classList.add('inactive')
          
     }
   
     menuMobile.classList.toggle('inactive')
    
}

function openProductDetail (){
     productDetail.classList.remove('inactive')
    
     
}

function closeProductDetail (){
     productDetail.classList.add('inactive')

}

//En esta parte está la interacion del DOM desde javascript


const productosLista = [];
productosLista.push({
     nombre: "Bike",
     precio: 120,
     imagen:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
     nombre: "Laptop",
     precio: 420,
     imagen:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
     nombre: "TV",
     precio: 600,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

function articulosList (arr){
     for (product of arr){
          const productsCard = document.createElement('div'); //  Aqui creando el div del HTML
          productsCard.classList.add('product-card');

         const productImg = document.createElement('img'); // En esta parte creando en la imagen de los productos.
          productImg.setAttribute('src', product.imagen);
          productImg.addEventListener('click', openProductDetail)

          const productsInfo = document.createElement('div'); //  Aqui creando las informaciones de los productos (precio y nombre)
          productsInfo.classList.add('product-info');

          const productsInfoDiv = document.createElement('div') // crea el div donde van las informaciones de los productos

          const productsPrice = document.createElement('p')
          productsPrice.innerText = '$' + product.precio

          const productsNombre = document.createElement('p')
          productsNombre.innerText = product.nombre

          
          
          productsInfoDiv.appendChild(productsPrice)
          productsInfoDiv.appendChild(productsNombre)


          const productsFigure = document.createElement('figure')
          productsCardImg = document.createElement('img')
          productsCardImg.setAttribute('src', './icons/bt_add_to_cart.svg')
          
          // DESPUES DE CREAR TODOS LOS PRODUCTOS AHORA HAY QUE AGREGARLO CON APPEND O APPENDCHILD AL HTML

          productsFigure.appendChild(productsCardImg)
         

          productsInfo.appendChild(productsInfoDiv)
          productsInfo.appendChild(productsFigure)

          productsCard.appendChild(productImg)
          productsCard.appendChild(productsInfo)
          containerCard.appendChild(productsCard)

     }

}
 
articulosList(productosLista)








