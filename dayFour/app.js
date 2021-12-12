let randomKey;

const setUp = () => {
    randomKey = Math.floor(Math.random()*50);
    document.getElementById(randomKey).classList.add('jiggle')
}

window.onload=setUp()

window.addEventListener("keydown", function(event) {
    let keyCode = event.key.toUpperCase()
    let keyToFind = document.getElementsByClassName('jiggle')
    if (keyCode === keyToFind[0].dataset.key) {
        document.getElementById(randomKey).classList.remove('jiggle');
        setUp()
    }
    })
