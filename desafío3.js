let gatitos = parseInt (prompt('¿Cuántos gatitos quieres adoptar?'));
let gatitosAdoptados = gatitos; 

for (let i = 0; i <= 4; i++ ) {
  const perritos = parseInt (prompt('¿Cuántos perritos quieres adoptar?'));
  gatitosAdoptados += perritos;
  alert('Adoptaste todos estos gatitos y perritos: ' + gatitosAdoptados + ' animalitos');
}
