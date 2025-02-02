const facts = [
    "I am a 19-year-old woman who enjoys exploring new ideas and experiences through my love of literature and music.",
    "I enjoy exploring diverse genres of books, enhancing my imagination and critical thinking.",
    "I am a music lover whose tastes influence my mood and creativity, fostering social connections."
];

const factElement = document.getElementById('fact');
const newFactBtn = document.getElementById('newFactBtn');

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

// Show a random fact when the page loads
showRandomFact();

// Add event listener to the button
newFactBtn.addEventListener('click', showRandomFact);
