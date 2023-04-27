const carrito = ['producto 1', 'producto 2', 'producto 3']

describe('Testing al carrito de compras', () => {
    test('Que tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3)
    })

    test('Que no este vacio', () => {
        expect(carrito).not.toHaveLength(0)
    })
})