let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Katia Takano')
  .pauseFor(300)
  .start();

