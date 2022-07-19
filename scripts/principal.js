import cardSuperHero from "./module/card.js"

let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")

btnMarvel.addEventListener('click', ()=>{
    getUrl('https://vuelta-al-mundo.herokuapp.com/marvel')
})

btnDC.addEventListener('click', ()=>{
    getUrl('https://vuelta-al-mundo.herokuapp.com/dc')
})

const getUrl = async(url)=>{

    const  resp = await axios.get(url)
    const data = await resp.data
    //console.table(data)

    listarCard.innerHTML = ''

    data.forEach(heroe =>{
        const {nombre, imagen, historia}=heroe

        listarCard.innerHTML += cardSuperHero( nombre, imagen, historia)
    })
}