

const card = document.getElementById("cardWrapper")
const pageNumHolder = document.getElementById("pagenum")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
let search = document.getElementById("search")
let swName = document.getElementsByClassName("swname")

let pageNumbers = []
let swdata = []
let filtered = swdata
// let swNum = 0
let page = 1


// console.log(data)
// getapi()


const showCharacters = (data) => {
    data.map((d, i) => {
        card.innerHTML += `
        <div class="card">
        <img src="" alt="" />
        <h3 class = "swname" onclick="modalholder(data, ${{ ...d }})" id="${i}">${d.name}</h3>

        </div>`
    })
}

const getapi = () => {
    fetch(`https://swapi.dev/api/people/?page=${page} `, { method: "GET", headers: { "Content-Type": "application/json" } })
        .then((response) => response.json())
        .then((data) => {
            card.innerHTML = ""
            pageNumHolder.innerHTML = ""
            showCharacters(data.results)
            pagination(data.count)
            swdata = data.results;
            modalHolder(data.results)
            console.log(data.results)
            console.log(data)
            console.log(filtered)
        })
        .catch((err) => { console.log(err) })
}
getapi()


const pagination = (dataLength) => {
    let pages = Math.ceil(dataLength / 10)
    console.log(pages)
    for (let i = 1; i <= pages; i++) {
        pageNumHolder.innerHTML += `<button class = "num" value = "${i}">${i}</button>`
    }
}

const previousPage = () => {
    page == parseInt(1) ? page = parseInt(1) : page = page - parseInt(1)
    console.log(page)
    getapi()
}

const nextPage = () => {
    page == parseInt(9) ? page = parseInt(9) : page = page + parseInt(1)
    getapi()

}

pageNumHolder.addEventListener("click", (e) => {
    page = parseInt(e.target.value)
    getapi()
})




card.addEventListener("click", (e) => {
    let itemid = e.target.id


})

console.log(swdata)


const modalHolder = ({data}) => {
    data.map((d, i) => {
        modal.innerHTML += `
        <div class="modalCard" id="modalCard">
        <p class="close" onclick="closemodal()">x</p>
        <img src="" alt="" />
        <div class="details">
        <p ${{ ...d }})" id="${i} ><span>Height: </span>${d.height}</p>
        <p ${{ ...d }})" id="${i} ><span>Gender: </span>${d.gender}</p>
        </div>
        </div>`
    })
    
    
}

console.log(filtered)
const showModal = (d) => {
    modal.style.display == "flex"
    modalHolder(d)
}

const closemodal = () => {
    modal.style.display = "none"
    document.getElementById("modalCard").style.display = "none"

}


getapi()