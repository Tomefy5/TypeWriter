const texte_ecrit = document.querySelector(".texte-ecrit")
const cursor = document.querySelector(".cursor")
const btn_test = document.querySelector(".btn-test")
const input_texte = document.querySelector("#input-texte")
const formulaire = document.querySelector("form")
let index = 0
/**
 * @param {HTMLElement} element 
 * @param {HTMLElement} cursor
 */
function type(element,cursor) {
    if(index == 0) {
        element.innerText = ''
    }
    let mot = input_texte.value
    if(!cursor.classList.contains("typing")) {
        if(index < mot.length) {
            element.innerText += mot.charAt(index)
            index++
            setTimeout(() => {type(element,cursor)}, 200)
        } else if(index >= mot.length) {
            cursor.classList.add("typing")
            setTimeout(() => {supprime(element,cursor)} ,2000)
        }
    }
}
/**
 * @param {HTMLElement} element 
 * @param {HTMLElement} cursor
 */
function supprime(element,cursor) {
    let mot = input_texte.value
    if(cursor.classList.contains("typing")) {
        if(index > 0) {
            element.innerText = mot.substring(0, index - 1)
            index--
            setTimeout(() => {supprime(element,cursor)},100)
        } else {
            cursor.classList.remove("typing")
            setTimeout(() => {type(element,cursor)},2000)
        }
    }
}

btn_test.addEventListener('click', () => {
    index = 0
    type(texte_ecrit, cursor)
})