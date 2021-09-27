let gatitos = parseInt (prompt('¿Cuántos gatitos quieres adoptar?'));
let gatitosAdoptados = gatitos; 

for (let i = 1; i <= 3; i++ ) {
  const perritos = parseInt (prompt('¿Cuántos perritos quieres adoptar?'));
  gatitosAdoptados += perritos;
  alert('Adoptaste a estos gatitos y perritos: ' + gatitosAdoptados + ' animalitos');
}
