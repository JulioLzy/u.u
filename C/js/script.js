function mostrarPagina(numero) {
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(p => p.classList.remove('activa'));

  const paginaActual = document.getElementById(`pagina${numero}`);
  if (paginaActual) {
    paginaActual.classList.add('activa');
  }
}
const botonNo = document.getElementById('botonNo');

if (botonNo) {
  botonNo.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    botonNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    botonNo.style.transition = 'transform 0.3s';
  });
}
const audioOof = document.getElementById('audio/oof');

if (botonNo && audioOof) {
  botonNo.addEventListener('click', (e) => {
    e.preventDefault();
    audioOof.play();
  });

  botonNo.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    botonNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    botonNo.style.transition = 'transform 0.3s';
  });
}
const frases = [
  { texto: "Incluso si me odias, seguiré amándote” 💘", imagen: "imagenes/Naruto.jpg" },
  { texto: "Caro... tú eres mi única esperanza... mi única alegría...” 🌸", imagen: "imagenes/Jojos.jpg" },
  { texto: "Asi que Caro, tú dame la mitad de tu vida, y yo te daré la mitad de la mia” ✨", imagen: "imagenes/Metal.jpg" },
  { texto: "Cuando estoy contigo, todo se siente mas claro. Como si el sol saliera para mi” 🌞", imagen: "imagenes/Hunter.jpg" },
  { texto: "Así como Tendō ve el voleibol como su escenario para brillar siendo él mismo… tú eres mi lugar seguro para ser yo sin miedo. Eres mi rareza favorita, la persona que hace que todo tenga sentido, incluso cuando el mundo no lo tiene 🏐❤️", imagen: "imagenes/Tendo.jpg" },
  { texto: "Tú eres para mí lo que el vóleibol es para Hinata🏐❤️", imagen: "imagenes/Hinata.jpg" },
  { texto: "Incluso los monstruos pueden llorar cuando sienten amor verdadero", imagen: "imagenes/Elfen.jpg" },
  { texto: "Como Norman, yo tampoco quiero perderte. No otra vez", imagen: "imagenes/Norman.jpg" },
  { texto: "No quiero renunciar a mi paraiso como lo hizo ekko al dejar a jinx, yo quiero quedarme contigo hasta el final", imagen: "imagenes/Arcane.jpg" },
  { texto: "No puedo obligarte a que estes conmigo, pero si me gustaria que algun dia vuelvas a mi(nunca me pasaste esa foto 😢 fue mi favorita)", imagen:"imagenes/Amor.jpg"}

];

let fraseActual = 0;

function siguienteFrase() {
  fraseActual = (fraseActual + 1) % frases.length;
  document.getElementById("frase-romantica").textContent = frases[fraseActual].texto;
  document.getElementById("imagen-romantica").src = frases[fraseActual].imagen;
}
