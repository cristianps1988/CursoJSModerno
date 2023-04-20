// self se refiere a la window

window.onload = () =>{
    console.log('Ventana lista')
}

self.onload = () => {
    console.log('Tambien funciona')
}

window.tienda = 'Mayales'

const producto = {
    nombre: 'Televisor',
    precio: 300,
    mostrarInfo(){
        return(`El producto ${this.nombre}, cuesta $${this.precio}, se encuentra disponible en ${self.tienda}`) // el self busca en window, mientras el this busca en el mismo objeto
    }
}

console.log(producto.mostrarInfo())