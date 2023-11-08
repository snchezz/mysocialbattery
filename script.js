const body = document.body;
const emoji = document.getElementById('emoji');
const slider = document.getElementById('myRange');
const shareButton = document.getElementById('shareButton');

const colors = {
  1: '#b91419',
  2: '#ce3647',
  3: '#d45569',
  4: '#e9d51d',
  5: '#8ccb7f',
  6: '#61bd98',
  7: '#397e43'
};

slider.addEventListener('input', function() {
  const value = this.value;
  body.style.backgroundColor = colors[value];
  emoji.src = value + '.png'; // Change the image source based on the slider value
  emoji.alt = 'Face ' + value; // Change the alt text accordingly
});

// Set initial color and image based on the default slider value
body.style.backgroundColor = colors[slider.value];
emoji.src = slider.value + '.png';
emoji.alt = 'Face ' + slider.value;

// Share
const moods = {
    1: '☹', // Sad
    2: '🙁', // Slightly sad
    3: '🫤', // Disappointed
    4: '😐', // Neutral
    5: '😁', // Happy
    6: '☺',  // Slightly happy
    7: '🤭'  // Gleeful
  };
  
  const moodMessages = {
    1: 'Vamonos ya!!',
    2: 'Estoy pensando si irme..',
    3: 'No me esta molando...',
    4: 'Sin mas',
    5: 'Toy feliss',
    6: 'Toy muy feliss',
    7: 'Estoy perfe!!'
  };
  
  shareButton.addEventListener('click', () => {
    const value = slider.value;
    const mood = moods[value];
    const moodMessage = moodMessages[value];
    const url = 'https://snchezz.github.io/mysocialbattery/'; // Reemplaza con la URL de tu sitio web
    const text = `Estoy compartiendo my social battery con la web ${url}, mi mood actual es ${mood}, ${moodMessage}`;
  
    if (navigator.share) {
      navigator.share({
        title: 'MY SOCIAL BATTERY',
        text: text,
        url: url,
      })
      .then(() => console.log('Contenido compartido con éxito'))
      .catch((error) => console.log('Error al compartir', error));
    } else {
      // Si Web Share API no está disponible, puedes copiar el texto al portapapeles o mostrar un mensaje
      console.log('Web Share no está disponible en este navegador.');
    }
  });
  