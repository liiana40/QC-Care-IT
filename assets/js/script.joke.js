const button = document.querySelector('.jokeContainer button');
const jokeText = document.querySelector('.joke p');
document.addEventListener('DOMContentLoaded', getJoke);


async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}