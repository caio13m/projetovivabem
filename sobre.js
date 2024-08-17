const desc = document.querySelector(".desc p")
const descORGtexto = desc.textContent
let limite = document.body.getBoundingClientRect();

function update(){
    limite = document.body.getBoundingClientRect();
    console.log(limite.width*0.14)

    if (descORGtexto.length > limite.width*0.14) {
        desc.textContent = descORGtexto.substring(0, (limite.width*0.14))+'...';
    }
}
// Não ta nem perto da meió forma de faze iso, MELHORA

console.log(limite.width*0.15)
console.log(desc.textContent.length)


setInterval(update, 1000);