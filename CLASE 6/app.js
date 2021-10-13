//Incorporacion de Arrays (DESAFIO6 )


const products = [
  { id: 1, name: "Cepillo para gato", price: 1500, stock: 23 },
  { id: 2, name: "Platillo para perro", price: 2500, stock: 51 },
  { id: 3, name: "Frisbee para perros", price: 4990, stock: 13 },
  { id: 4, name: "Collar de mascotas", price: 2990, stock: 45 },
  { id: 5, name: "Pelota de colores", price: 1590, stock: 12},
  { id: 6, name: "Hueso para perros", price: 4490, stock: 32},
];

// FILTRADO DE ARRAY POR MAYOR STOCK

const filteredStock = products.filter((product)=>{
  return product.stock>30;
});

console.log(filteredStock); // Se mostraran todos los productos con mucho stock

//------ ORDENAR UN ARRAY DE OBJETOS DEL MAS CARO AL MAS BARATO (DESAFIO COMPLEMENTARIO)

const expensiveProducts = products.sort((a, b) =>{
  return a.price - b.price
})
console.log(expensiveProducts);

