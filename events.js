// Your code here
window.addEventListener("DOMContentLoaded", event =>{
    // alert("DOM loaded.")
    const element = document.body.querySelector('#red-input');
    const addItem = document.body.querySelector('#add-item');
    const newColor = document.body.querySelector('#color-select');
    const removeListeners = document.body.querySelector('#remove-listeners')
    console.log(element)


    function elEvent(event){
        console.log(event)
        if(event.target.value === "red"){
            element.style.backgroundColor = "red"
        }else{
            element.style.backgroundColor = "white"
        }
    }

    function addItemEvent(event) {
        const ul = document.body.getElementsByTagName('ul')[0]
        // const ul = document.body.querySelector('ul')
        console.log(typeof ul)
        const value = document.body.querySelector('#list-add').value
        console.log(value)
        const newHTML = document.createElement("li")
        newHTML.innerText = value
        ul.appendChild(newHTML)
    }

    function newColorEvent(event) {
        console.log(event.target.value)
        const parent = document.body.querySelector('#section-3')
        parent.style.backgroundColor = event.target.value
    }



    element.addEventListener("input", elEvent)


    addItem.addEventListener("click", addItemEvent)

    newColor.addEventListener("change", newColorEvent)

    removeListeners.addEventListener("click", event=>{
        console.log('event')
        element.removeEventListener("input", elEvent)
        addItem.removeEventListener("click", addItemEvent);
        newColor.removeEventListener("change", newColorEvent)
    })

})
