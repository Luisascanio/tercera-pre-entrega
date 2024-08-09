// constructor
class juego{
    constructor(nombre,precio,plataforma){
        this.nombre = nombre
        this.precio = precio
        this.plataforma = plataforma
        this.img = `./img/${nombre.toLowerCase()}.jpg`
        
    }

}

let juegos = [
    new juego ("BATTLEFIELD 1 REVOLUTION","$60.000","ps4"),
    new juego ("BATTLEFIELD V","$60.000","ps4"),
    new juego ("BURNOUT PARADISE REMASTERED","$60.000","ps4"),
    new juego ("DOOM","$60.000","ps4"),
    new juego ("FORZA MOTOSPORT 5","$35.000","xbox"),
    new juego ("HALO 5","$60.000","xbox"),
    new juego ("RED DEAD REDEMPTION 2","$60.000","ps4"),
    new juego ("WOLFENSTEIN 2","$60.000","ps4")

]

let carrito = []


let container = document.querySelector("#container")

juegos.forEach((juegos) => {
    let copia = document.querySelector("template").content.cloneNode(true)

    copia.querySelector('h5').textContent = juegos.nombre 
    copia.querySelector("p").textContent = juegos.precio
    copia.querySelector("img").src = juegos.img
    let boton = copia.querySelector("button")
    let mensaje  = `Agregaste : ${juegos.nombre} al carrito`



    function actualizarcarrito (){

        let carritoUL = document.getElementById("carritop");
        carritoUL.innerHTML = '';

        
    carrito.forEach(juegos=> {
        let button2 = document.createElement("button")
        let li = document.createElement("li")

        button2.textContent = "X"
        li.textContent = `${juegos.nombre} - ${juegos.precio}`;
        button2.addEventListener("click",function(){
            li.remove()

        })

        carritoUL.appendChild(li);
        li.appendChild(button2)

    });
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    }



boton.addEventListener("click",()=>{

    carrito.push({
        
        nombre:juegos.nombre,
        precio:juegos.precio

       
    });
    actualizarcarrito();
   

   
    
    
    
window.addEventListener('load', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarcarrito();
    }
});



    
    Toastify({

        text: mensaje,
        
        duration: 3000
        
        }).showToast();
})

    container.append(copia)
});




// Función para actualizar el carrito en el DOM y en localStorage










