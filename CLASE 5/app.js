class Items {
  constructor(name, cost, stock) {
    this.name = name.toLowerCase();
    this.cost = parseInt(cost);
    this.stock = stock;
  }

  sell() {
    return `Compraste un ${this.name} por el precio de ${this.cost} pesos`;
  }
  updateStock() {
    this.stock = this.stock --;
    return `Ahora quedan ${this.stock} ${this.name}s en bodega`;
  }
}

let item1 = new Items("cepillo para gato", 1500, 3);
let item2 = new Items("platillo para perro", 2500, 7);
let item3 = new Items("frisbee", 1990, 10);

console.log(item1.sell());
console.log(item2.updateStock());

//------------INTERACCION CON EL USUARIO

// let nameProduct = prompt(
// `Hay algún producto que quieres que traigamos para tu mascota, aparte del ${item2.name}?`
// );
// let sendProduct = prompt("Cual es el lugar de envio?");

// alert(`Traeremos para ti ${nameProduct} con envio a ${sendProduct}.`);
