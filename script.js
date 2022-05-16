for(let number = 1; number <= 42; number++) {
    let button = document.createElement('button');
    button.textContent = number;
    output(button);        

    if (number % 5 == 0) {
        button.onclick = function () {
            this.textContent = Number (this.textContent) + 1;
        }
    }
}





/**
 * Pievieno elementu iekš elementa ar klasi "output"
 * @param DOMElement element 
 */
function output (element) {
    document.querySelector('.output').append(element);
}