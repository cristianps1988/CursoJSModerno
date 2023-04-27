const cliente = {
    nombre: 'Cristian',
    saldo: 500,
    tipo: 'Premium'
}

describe('Verificar el cliente', () => {
    test('Verificar el cliente completo',() => {
        expect(cliente).toMatchSnapshot() // me crea una carpeta con un snapshot del cliente original, para luego compararlo
    })
})

// si quiero acutalizar el snapshot, en consola debo escribir: npm t -- -u
// tambien se puede eliminar la carpeta del snapshot