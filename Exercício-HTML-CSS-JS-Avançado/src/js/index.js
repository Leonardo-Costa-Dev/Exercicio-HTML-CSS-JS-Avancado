async function conselhoAleatorio (){
    let url = 'https://api.adviceslip.com/advice'
    let conselho = await fetch(url)
    return await conselho.json()
}

async function verConselho (){
    let conselhos = await conselhoAleatorio()
    let id = await conselhos.slip.id
    let texto = await conselhos.slip.advice
    document.getElementById('id').innerHTML = `ADVICE #${id}`
    document.getElementById('texto').innerHTML = `" ${texto} "`
} 
verConselho()

document.getElementById('butao').addEventListener('click', () => {
    verConselho()
})