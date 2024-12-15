// script.js
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('camera');
  const lyricsElement = document.getElementById('song-lyrics');
  const audio = document.getElementById('song');

  // Definir las marcas de tiempo y las letras de la canción
  const lyrics = [
    { time: 0, text: "SOLO MIRATE A LOS OJOS Y ESCUCHA" },
    { time: 5, text: "Hoy me senté conmigo" },
    { time: 9, text: "Sin nada que esconder" },
    { time: 13, text: "Quería entenderme, quería saber" },
    { time: 19, text: "¿Por qué el peso? ¿Por qué el dolor?" },
    { time: 23, text: "¿Qué pasó conmigo?" },
    { time: 27, text: "¿Dónde quedó el amor?" },
    { time: 33, text: "Te veo cansada" },
    { time: 37, text: "Me dije al mirar" },
    { time: 41, text: "Tanto juicio encima, te quieres escapar" },
    { time: 50, text: "Pero aquí estoy contigo, no tienes que huir" },
    { time: 55, text: "Suelta lo que duele, déjalo ir" },
    { time: 63, text: "Te olvidaste de ti, y eso está bien" },
    { time: 69, text: "A veces el camino no se puede entender" },
    { time: 73, text: "Pero no estás sola, aquí me tendrás" },
    { time: 77, text: "Siempre fui tu refugio, tu paz, tu hogar" },
    { time: 85, text: "Deja el pasado, suelta el rencor" },
    { time: 89, text: "Mira más adentro, escucha tu voz" },
    { time: 94, text: "Eres más que tus miedos" },
    { time: 97, text: "Más que tu error" },
    { time: 99, text: "Eres luz infinita, eres puro amor" },
    { time: 104, text: "Brillas, aunque no lo veas aún" },
    { time: 108, text: "Siempre estuve aquí, eres mi luz" },
    { time: 111, text: "De las sombras te ayudo a salir" },
    { time: 116, text: "TE AMO" },
    { time: 117, text: "Contigo siempre voy a ir" },
    { time: 122, text: "Me miré en el espejo, por fin me encontré" },
    { time: 128, text: "¿Ves? Ahí estás tú, siempre lo supe bien" },
    { time: 131, text: "No importa el pasado, no importa el dolor" },
    { time: 137, text: "Siempre habrá camino mientras esté tu amor" },
    { time: 140, text: "Perdónate hoy, lo necesitas ya" },
    { time: 145, text: "No hay razón para odiarte, siempre brillarás" },
    { time: 150, text: "La vida es un viaje, pero tú y yo" },
    { time: 155, text: "Siempre juntos iremos, siempre con amor" },
    { time: 160, text: "Brillas, aunque no lo veas aún" },
    { time: 165, text: "Siempre estuve aquí, eres mi luz" },
    { time: 169, text: "De las sombras te ayudo a salir" },
    { time: 173, text: "TE AMO, contigo siempre voy a ir" },
    { time: 178, text: "Hoy me sentí en paz, hoy pude entender" },
    { time: 182, text: "Yo soy mi refugio, mi fuerza, mi ser" },
    { time: 188, text: "De la luz vengo, y ahí volveré" },
    { time: 192, text: "Siempre conmigo, siempre estaré" },
    { time: 198, text: "........." },
    { time: 202, text: "SIEMPRE ESTARE CONTIGO, SOLO BUSCAME EN EL ESPEJO" },
    { time: 205, text: " " },


    // Agrega más líneas de la canción aquí con su tiempo en segundos
  ];

  let currentLine = 0;

  // Función para actualizar la letra sincronizada con la canción
  function updateLyrics() {
    // Verifica el tiempo actual de la canción
    const currentTime = audio.currentTime;

    // Mostrar la letra correspondiente si el tiempo coincide
    if (currentLine < lyrics.length && currentTime >= lyrics[currentLine].time) {
      lyricsElement.textContent = lyrics[currentLine].text;
      currentLine++;
    }
  }

  // Cada 100ms actualizamos las letras
  setInterval(updateLyrics, 100);

  // Iniciar el video de la cámara
 if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const constraints = {
      video: {
        facingMode: "user" // Esto asegura que se use la cámara frontal
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(function(stream) {
        video.srcObject = stream;
        console.log("Cámara accedida correctamente");
        video.srcObject = stream; // Asignar el stream al video
      })
      .catch(function(error) {
        console.error("No se pudo acceder a la cámara", error);
        console.error("Error al acceder a la cámara:", error);
      });
  }
  // Función para detener el stream de la cámara al final de la canción
  audio.addEventListener('ended', function() {
    console.log("La canción ha terminado, deteniendo el video...");
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach(track => track.stop()); // Detener todas las pistas del stream
      video.srcObject = null; // Liberar el objeto video
    }
  });
});
