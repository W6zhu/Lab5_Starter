// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    console.log('Voices loaded:', voices.length);
    voiceSelect.innerHTML = '';

  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () =>{
    const text = textInput.value.trim();
    if (text === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[parseInt(voiceSelect.selectedIndex)];
    utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
    synth.speak(utterance);
  });
}