// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ayy, ayy, ayy, ayy (ooh)", time: 0 },
  { text: "Ooh, ooh, ooh, ooh (ooh)", time: 5 },
  { text: "Ayy, ayy", time: 10 },
  { text: "Ooh, ooh, ooh, ooh", time: 13 },
  { text: "Needless to say, I keep her in check", time: 18 },
  { text: "She was a bad-bad, nevertheless (yeah)", time: 24 },
  { text: "Callin' it quits now, baby, I'm a wreck (wreck)", time: 30 },
  { text: "Crash at my place, baby, you're a wreck (wreck)", time: 35 },
  { text: "Needless to say, I'm keeping her in check", time: 41 },
  { text: "She was all bad-bad, nevertheless", time: 45 },
  { text: "Callin' it quits now, baby, I'm a wreck", time: 50 },
  { text: "Crash at my place, baby, you're a wreck", time: 55 },
  { text: "Thinkin' in a bad way, losin' your grip", time: 60 },
  { text: "Screamin' at my face, baby, don't trip", time: 66 },
  { text: "Someone took a big L, don't know how that felt", time: 70 },
  { text: "Lookin' at you sideways, party on tilt", time: 75 },
  { text: "Ooh-ooh-ooh", time: 80 },
  { text: "Some things you just can't refuse", time: 83 },
  { text: "She wanna ride me like a cruise", time: 88 },
  { text: "And I'm not tryna lose", time: 93 },
  { text: "Then you're left in the dust", time: 98 },
  { text: "Unless I stuck by ya", time: 103 },
  { text: "You're the sunflower", time: 107 },
  { text: "I think your love would be too much", time: 111 },
  { text: "Or you'll be left in the dust", time: 116 },
  { text: "Unless I stuck by ya", time: 120 },
  { text: "You're the sunflower", time: 124 },
  { text: "You're the sunflower", time: 128 },
  { text: "Every time I'm leavin' on you (ooh)", time: 133 },
  { text: "You don't make it easy, no (no, no)", time: 138 },
  { text: "Wish I could be there for you", time: 143 },
  { text: "Give me a reason to, oh (oh)", time: 148 },
  { text: "Every time I'm walkin' out", time: 153 },
  { text: "I can hear you tellin' me to turn around", time: 158 },
  { text: "Fightin' for my trust and you won't back down", time: 163 },
  { text: "Even if we gotta risk it all right now, oh (now)", time: 168 },
  { text: "I know you're scared of the unknown ('known)", time: 174 },
  { text: "You don't wanna be alone (alone)", time: 178 },
  { text: "I know I always come and go (and go)", time: 183 },
  { text: "But it's out of my control", time: 188 },
  { text: "And you'll be left in the dust", time: 194 },
  { text: "Unless I stuck by ya", time: 199 },
  { text: "You're the sunflower", time: 203 },
  { text: "I think your love would be too much", time: 208 },
  { text: "Or you'll be left in the dust", time: 212 },
  { text: "Unless I stuck by ya", time: 217 },
  { text: "You're the sunflower", time: 221 },
  { text: "You're the sunflower (yeah)", time: 226 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
