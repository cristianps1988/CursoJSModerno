// Coercion: conversion que hace JS automaticamente de tipo de valores de un tipo a otro

// Coerción implícita
const numero1 = 20
const numero2 = '40'
console.log(numero1 + numero2) // convierte el tipo numero a string

// Coerción explícita: usar una función para convertir el tipo de variable
console.log(Number(numero2))

// otro ejemplo
const pedido = [1, 2, 3, 4]
console.log(pedido)
console.log(pedido.toString()) // de array a string
console.log(JSON.stringify(pedido)) // de array a string