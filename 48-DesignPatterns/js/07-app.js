// Namespace

const restaurantApp = {}

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 20
    },
    {
        platillo: 'Hamburguesa',
        precio: 25
    },
    {
        platillo: 'Perro Caliente',
        precio: 18
    }
]

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log('Bienvenido a nuestro menú')
        platillos.forEach((platillo, indice) => {
            console.log(`${indice}: ${platillo.platillo} ${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo =  {
            platillo,
            precio
        }
        restaurantApp.platillos.push(nuevo)
    }
}

const {platillos} = restaurantApp
restaurantApp.funciones.mostrarMenu(platillos)
restaurantApp.funciones.ordenar(1)
restaurantApp.funciones.agregarPlatillo('Tacos', 10)
console.log(restaurantApp.platillos)