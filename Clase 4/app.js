alert('Bienvenido a PET PLACE, aquí encontrarás todo tipo de artículos para tu mascota!');

const cepilloPeinar = 3990;
const alimentoMascotas = 10990;
let carritoCompras = 0 ;
let selectionMenu;

function menuCompra() {
  selectionMenu = 9 ;
  while (selectionMenu != 0) {
    selectionMenu = parseInt(prompt('Ingrese el número del producto que desea adquirir: 1- Cepillo para Mascotas / 2- Alimento para Mascotas / 5- Verficación / 0-Salir'));
      switch (selectionMenu) {
          case 1:
               carritoAccesorios();
              break;
          case 2:
               carritoAlimentos();
              break;
          case 5:
               verificar();
              break;
          default:
              break;
      }
  }
}

  function carritoAccesorios() {
  let cantAccesorios = parseInt(prompt(`El valor de este cepillo es de $${cepilloPeinar}. Ingresa la cantidad que desea adquirir: `));
  carritoCompras = carritoCompras + (cepilloPeinar * cantAccesorios);
  alert(`Se agregaron con exito ${cantAccesorios} cepillos de peinar. Total: $${carritoCompras}.`);
  console.log(`Carrito actualizado $${carritoCompras}`);
 }


  function carritoAlimentos() {
  let cantAlimetos = parseInt(prompt(`El valor por saco de alimento es $${alimentoMascotas}. Ingresa la cantidad que desea adquirir: `));
  carritoCompras = carritoCompras + (alimentoMascotas * cantAlimetos);
  alert(`Se agregaron con exito ${cantAlimetos} sacos de alimento. Total: $${carritoCompras}.`);
  console.log(`Carrito actualizado $${carritoCompras}`);
}

function vaciarCarrito() {
  return carritoCompras = 0;
}

function verificar() {
  if (carritoCompras != 0) {
      let opcionVerificar = 0;
      while ((opcionVerificar != 1) && (opcionVerificar != 5)) {
        opcionVerificar = parseInt(prompt(`Su carrito tiene un total de: $${carritoCompras}. Ingrese 1 para confirmar la compra o 5 para seguir comprando.`));
          if (opcionVerificar == 1) {
              alert(`Se ha realizado un cobro de $${carritoCompras} en su cuenta bancaria. ¡Gracias por su compra!`);
              vaciarCarrito();
              console.log(`Tu carrito de compra fue actualizado a $${carritoCompras}`);
          }
      }
  } else {
      alert('Hey, tu carrito está vacío, agrega algo para continuar.');
  }
}

while (selectionMenu != 0) {
  menuCompra();
}
alert("Gracias por su compra, ¡vuelva pronto!");
