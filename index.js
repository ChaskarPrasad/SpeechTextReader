// listen for the voiceschanged event
window.speechSynthesis.onvoiceschanged = () => {
    // get an array of available voices
    const voices = window.speechSynthesis.getVoices();
    const ul = document.querySelector('.options');
  
    // print the number of available voices
    voices.forEach(element => {
      const li = document.createElement('li');
      li.className = "option"
      const span = document.createElement('span');
      span.className = "option-text";
      span.textContent = element.name;
      li.appendChild(span)
      ul.appendChild(li)
    });
  };
  
  const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelector(".options"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
  
  options.addEventListener("click", (event) => {
    if (event.target.tagName === 'SPAN') {
      let selectedOption = event.target.innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
      window.location.href = `emotions.html?selectedOption=${selectedOption}`;
    }
  });
  
  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );
  