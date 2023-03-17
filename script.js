const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const selectedOption = urlParams.get('selectedOption');

// get all buttons with primary class
const buttons = document.querySelectorAll('.primary');

// add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // retrieve text of clicked button
    const buttonText = button.innerHTML;
    speak(buttonText)
  });
});
const utterance = new SpeechSynthesisUtterance();
window.speechSynthesis.onvoiceschanged = () => {
    // get an array of available voices
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find(voice => voice.name === selectedOption);
  };
  

function speak(text){
    utterance.text = text
    window.speechSynthesis.speak(utterance);
}