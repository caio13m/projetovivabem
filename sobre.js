const desc = document.querySelector(".desc p")

const limite = document.body.getBoundingClientRect();
console.log(limite.width*0.1)

if (desc.textContent.length > limite) {
    desc.textContent = desc.textContent.substring(0, limite.width*0.1);
}