document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#addGridBtn')
    let size = 16

    displayGrid(size)
    paintSquares()

    btn.addEventListener('click', () => {
        size = +prompt('Enter the number of squares per side of the new grid (max 100)', '')

        if (isNaN(size) || size > 100 || size !== parseInt(size)) {
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
        square.addEventListener('mouseover', () => {
            const r = getRandomColor()
            const g = getRandomColor()
            const b = getRandomColor()
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        })
    })
}

function getRandomColor() {
    return Math.floor(Math.random() * 256)
}