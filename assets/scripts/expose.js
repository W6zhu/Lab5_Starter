// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Select elements
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  // Confetti
  const jsConfetti = new JSConfetti();

  // Update image and audio when a horn is selected
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = `${selected.replace('-', ' ')} image`;
    audioElement.src = `assets/audio/${selected}.mp3`;
  });

  // Update volume icon and audio volume when slider changes
  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value);
    audioElement.volume = volumeValue / 100;

    let level;
    if (volumeValue === 0) {
      level = 0;
    } else if (volumeValue < 33) {
      level = 1;
    } else if (volumeValue < 67) {
      level = 2;
    } else {
      level = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // Play sound (and confetti for party horn)
  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}