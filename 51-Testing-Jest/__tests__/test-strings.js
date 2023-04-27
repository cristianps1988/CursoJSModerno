const password = '123456'

describe('Valida que la constraseña tenga 6 números y que no esté vacio', () => {
    test('Valida que sea de 6 números', () => {
        expect(password).toHaveLength(6)
    })
    
    test('Valida que no este vacio', () => {
        expect(password).not.toHaveLength(0) // con este .not hacemos la negación
    })
})