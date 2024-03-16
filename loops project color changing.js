
const button = document.querySelectorAll('.box')
const body = document.querySelector("body")


button.forEach(function(box) {
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1') {
            body.style.backgroundColor = 'black'
            body.style.color = "white"
        }
        if(color.target.id === 'box2') {
            body.style.backgroundColor = 'purple'
        }
        if(color.target.id === 'box3') {
            body.style.backgroundColor = 'red'
        }
        if(color.target.id === 'box4') {
            body.style.backgroundColor = 'blue'
        }
        if(color.target.id === 'box5') {
            body.style.backgroundColor = 'aqua'
        }
    })
});