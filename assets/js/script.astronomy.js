window.addEventListener('load', obtainData);

function obtainData() {
    const NASA_API_KEY = '09UgbbFal64Pb06lF4LQV4zW7u8oP4ECzTaXA3RR';
    const path = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    fetch(path) 
    .then((response)=> response.json())
    .then((result)=> ourData(result))
}

function ourData({date, explanation, media_type, title, url}) {
    const nasaTitle = document.querySelector('#title');
    title.innerHTML = title;
    const nasaDate = document.querySelector('#date');
    date.innerHTML = date;
    const description = document.querySelector('#description');
    description.innerHTML = explanation;

    const multimedia = document.querySelector('#multimedia');
    if(media_type == 'video'){
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`   
 } else {
   multimedia.innerHTML = `<img src="${url}" class=img-fluid" alt="${url}" width="300" height="300">`
 }
}