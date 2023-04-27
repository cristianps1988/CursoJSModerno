function suma(a, b){
    return a + b
}

function resta(a, b){
    return a - b
}

describe('Verificar las funciones de suma y resta', () => {
    test('Verificar que 20 + 30 sea 50', () => {
        expect(suma(20, 30)).toBe(50)
    })

    test('Verificar que 20 y 30 no sean 40', () => {
        expect(suma(20, 30)).not.toBe(40)
    })

    test('Verificar que 30 - 20 sea 10', () => {
        expect(resta(30, 20)).toBe(10)
    })

    test('Verificar que 30 - 20 no sea sea 20', () => {
        expect(resta(30, 20)).not.toBe(20)
    })
})