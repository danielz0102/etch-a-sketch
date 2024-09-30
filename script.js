document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#addGridBtn')
    let size = 16

    displayGrid(size)
    paintSquares()

    btn.addEventListener('click', () => {
        const MAX_SIZE = 100
        size = +prompt(`Enter the number of squares per side of the new grid (max ${MAX_SIZE})`, '')

        if (isNaN(size) || size > MAX_SIZE || size !== parseInt(size)) {
            alert('The number entered is not valid')
        } else if (size !== 0) {
            removeGrid()
            displayGrid(size)
            paintSquares()
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
    const containerSize = container.offsetWidth

    square.classList.add('square')
    square.style.width = `${containerSize/size}px`
    square.style.height = `${containerSize/size}px`
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

function paintSquares() {
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.opacity = 1
        square.addEventListener('mouseenter', () => {
            const r = getRandomColor()
            const g = getRandomColor()
            const b = getRandomColor()
            const DARKENING_SPEED = 0.1
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

            if (square.style.opacity > 0) {
                square.style.opacity -= DARKENING_SPEED
            }
        })
    })
}

function getRandomColor() {
    return Math.floor(Math.random() * 256)
}