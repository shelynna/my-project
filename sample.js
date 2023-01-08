
const url = 'https://swapi.dev/api/people'
const box = document.getElementById('links');
const showInfo = document.getElementById('container');

let array = [];



fetch(url)
    .then(resp => resp.json())
    .then(data => {
        array = data['results'];
        array.map(({ name }, i) => {
            showInfo.innerHTML += `<h1 role="${i}"> ${name}</h1 >`

        })
    })
    .catch((err) => console.log(err));



box.addEventListener('click', () => {
    console.log(e.traget)
    const index = parseInt(e.target.role)
    const { name, height, gender } = array[index]
    showInfo.innerHTML = `
        
        <h1>${name}</h1>
        <h2>${height}</h2>
        <h3>${gender}</h3>

    `
})

console.log(url);

const imgs = [
    {
        src: "imgs/2.webp",
    },
    {
        src: "imgs/1.webp",
    },
    {
        src: "imgs/3.webp",
    },
    {
        src: "imgs/4.webp",
    },
    {
        src: "imgs/6.webp",
    },
    {
        src: "imgs/5.webp",
    },
    {
        src: "imgs/9.webp",
    }

];