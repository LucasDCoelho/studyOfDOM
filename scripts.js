const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})








/*
-- Manipulação de Elementos --

------ Atributos -------

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')

*/
/*
-- Manipulação de Conteúdos --

------ textContent -------
const element = document.querySelector('h1')

element.textContent += " ,Olá Dev"

console.log(element.textContent)
--------------------------

------ innerText -------
const element = document.querySelector('h1')

element.innerText = 'Olá Devs!'
--------------------------

------ innerHTML -------
const element = document.querySelector('h1')

element.innerHTML = "Olá Devs!!!! <small>!!!!! Inserindo HTML </small>"
--------------------------

------ value -------
const element = document.querySelector('input')

console.log(element.value)
element.value = 'Outro Valor'
--------------------------
*/
/*
-- Seleção de Elementos --

getElementById() (element)
getElementByClassName() (HTMLCollection)
getElementByTagName() (HTMLCollection)
querySelector() (element)
querySelectorAll() (NodeList) 

*/