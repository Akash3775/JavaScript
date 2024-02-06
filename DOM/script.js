let ulList = document.querySelector('ul')
console.log(ulList)

let input = document.querySelector('input')
console.log(input)

let idOne  = document.querySelector('#one')
console.log(idOne)

idOne.addEventListener('click',function(){
    let fruitText = input.value // "papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruitText // <li>papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    input.value = " "
})


// <button class = "remove">Remove</button>
// <button class = "up">Up</button>
// <button class = "down">Down</button>

function createButtons(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove<button>
    remove.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(remove)


    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up<button>
    up.classList.add('up') // <button class = "up">Up</button>
    li.appendChild(up)


    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down<button>
    down.classList.add('down') // <button class = "down">Down</button>
    li.appendChild(down)

}