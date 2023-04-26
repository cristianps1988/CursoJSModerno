// Factory - Crea objetos basados en ciertas condiciones

class InputHtml{
    constructor(type, nombre){
        this.type = type
        this.nombre = nombre
    }
    crearInput(){
        return `<input type='${this.type}' name='${this.nombre}' id='${this.nombre}' >`
    }
}

class HtmlFactory{
    crearElemento(tipo, nombre){
        switch (tipo) {
            case 'text':
                return new InputHtml('text', nombre);
            case 'tel':
                return new InputHtml('tel', nombre)
            case 'email':
                return new InputHtml('email', nombre)
            default:
                return;
        }
    }
}

const elemento = new HtmlFactory()
const inputText = elemento.crearElemento('text', 'nombre-cliente')
console.log(inputText.crearInput())

const elemento2 = new HtmlFactory()
const inputTel = elemento.crearElemento('tel', 'telefono-cliente')
console.log(inputTel.crearInput())

const elemento3 = new HtmlFactory()
const inputEmail = elemento.crearElemento('email', 'email-cliente')
console.log(inputEmail.crearInput())