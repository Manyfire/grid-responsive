const JUGADORES = ['Leo Messi','Neymar Jr','Cristiano Ronaldo','luka Movic'];
document.querySelector('body').insertAdjacentHTML('beforeend',`
<main>
  <H1>Grandes Jugadores de la Historia del Futbol</H1>
  <div class="responsive-grid">
  </div>
</main>
`);

for(futbol of JUGADORES){
    document.querySelector('.responsive-grid').insertAdjacentHTML("beforeend",`
    <div class="informacion" many="${futbol}">
      <img src=/../image/problem.jpg alt= ${futbol} />
      <div class="texto"> ${futbol}</div>
      <button class="reserva">Reservar</button>
    </div>
    `)

    let inventoNombre = document.querySelectorAll('button').length-1;/*porque -1, /*porque siempre comienza a contar por el 0*/ 
    document.querySelectorAll('button')[inventoNombre].onclick=reservar;
}

function reservar(){
  let valor=this.parentNode.getAttribute('many');
  document.querySelector("h1").innerHTML=` <b>${valor}</b>... Wanna see you after the game.`;
  document.querySelector('.responsive-grid').innerHTML=`<img src=/../image/problem.jpg alt= ${valor} />`
  document.querySelector('.informacion').classList.add('.fondoNuevo');
}