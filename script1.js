var card = Object.assign({}, document.querySelectorAll('.card-inner'));
var ncard = Object.assign({}, document.querySelectorAll('.card-inner'));
var flipcard = objectFlip(Object.assign({}, document.querySelectorAll('.card-inner')));
var clickedn = 0
var box1;
var score = 0;
var id1 = 0;
var id2 = 0;

function objectFlip(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
}

for (const i of Object.values(card)) {
    if (ncard[flipcard[i]] != undefined) {
    i.onclick = function() {
        i.classList.toggle('is-flipped')

        if (clickedn == 0) {
            box1 = i;
            clickedn += 1;

        } else if (clickedn == 1 && box1.classList.contains('is-flipped') && i.classList.contains('is-flipped')) {

            if (box1.children[1].children[0].getAttribute('src') == i.children[1].children[0].getAttribute('src')){
                score += 1
                document.getElementById('score').innerHTML = "Score: " + score;
            }

            console.log(card, box1, i);

            setTimeout(function() {
                i.click();
                box1.click();

                id1 = box1.parentNode.getAttribute('id')
                id2 = i.parentNode.getAttribute('id');

                ncard[id1] = undefined;
                ncard[id2] = undefined;

                clickedn = 0;
                box1 = undefined;
            }, 1000);
        }}
    }
}

