document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const row = document.createElement('div')
    const square = document.createElement('div')

    square.classList.add('square')
    row.classList.add('row')

    for (let i = 1; i <= 16; i++) {
        const clone = square.cloneNode()
        row.appendChild(clone)
    }

    for (let i = 1; i <= 16; i++) {
        const clone = row.cloneNode(true)
        container.appendChild(clone)
    }
})