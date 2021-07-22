let wholeFoodContainers = document.querySelectorAll('.whole-food-cont');

let clickCount = 0;

wholeFoodContainers.forEach((cont) => {
    cont.addEventListener('click', () => {
        clickCount++

        if (clickCount % 2 === 1) {
            cont.classList.remove('hidden')
            cont.classList.add('active')
        } else {
            cont.classList.remove('active')
            cont.classList.add('hidden')
        }
    })
})



