document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#addGridBtn')
    let size = 16

    displayGrid(size)

    btn.addEventListener('click', () => {
        size = +prompt('Enter the number of squares per side of the new grid (max 100)', '')

        if (isNaN(size) || size > 100) {
            alert('The number entered is not valid')
        } else if (size !== 0) {
            removeGrid()
            displayGrid(size)
        }
    })

})

function removeGrid() {
    const container = document.querySelector('.container')
    container.innerHTML = ""
}

function displayGrid(size) {
    const container = document.querySelector('.container')
    const square = document.createElement('div')
    const row = document.createElement('div')

    square.classList.add('square')
    row.classList.add('row')

    for (let i = 1; i <= size; i++) {
        const clone = square.cloneNode()
        row.appendChild(clone)
    }

    for (let i = 1; i <= size; i++) {
        const clone = row.cloneNode(true)
        container.appendChild(clone)
    }
}