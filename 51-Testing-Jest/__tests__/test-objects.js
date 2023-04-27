const cliente = {
    nombre: 'Cristian',
    saldo: 500
}

describe('Pruebas para validar el cliente', () => {
    test('Comprobar que el saldo sea mayor de 400', () => {
        expect(cliente.saldo).toBeGreaterThan(400)
    })

    test('Comprobar que el cliente no tiene 400', () => {
        expect(cliente.saldo).not.toBe(400)
    })

    test('Comprobar que el cliente sea Cristian', () => {
        expect(cliente.nombre).toBe('Cristian')
    })

    test('Comprobar que el cliente no sea Pedro', () => {
        expect(cliente.nombre).not.toBe('Pedro')
    })
})