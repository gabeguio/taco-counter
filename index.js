// document.getElementById("count-el").innerHTML = 5;

// Create variables to store data
let countEl = document.getElementById("countElement");
let saveEl = document.getElementById("saveElement")
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
    }

}

function save() {
    let countStr = "(" + count + ")"
    saveEl.textContent += countStr + " ";
    count = 0
    countEl.innerText = 0
}

let message = "Welcome"

let messageToUser = message + "!"

let welcomeElement = document.getElementById("welcomeElement")

welcomeElement.innerText = messageToUser + " 👋"
welcomeElement.innerText += " 👋"



