import { createYoutubeButton } from './button.js';

const button = document.querySelector('button');
button.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});

createYoutubeButton(button);


const myHeading = document.getElementById("Heading");
myHeading.addEventListener("click", function() {
  window.location.href = "https://developer.apple.com/documentation/contacts/cnlabelcontactrelationeldercousinmotherssiblingsdaughterorfatherssistersdaughter";
});
