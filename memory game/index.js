let duration = 1000;

let container = document.querySelector('.game');

let my_blocks = Array.from(container.children);

console.log(my_blocks);



function shuffle(array) {
    let current = array.length, temp, random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}

let orderRange = [...Array(my_blocks.length).keys()];
console.log(orderRange);

shuffle(orderRange);
console.log(orderRange);

my_blocks.forEach((block, index) => {
    block.style.order = orderRange[index];

    block.addEventListener('click', function () {
        flipBlock(block)

    });
});

function flipBlock(selectedblock) {
    selectedblock.classList.add('is-flipped');
    console.log("they are 1")
    let allFlippedBLocks = my_blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if (allFlippedBLocks.length === 2) {
        console.log("they are 2")
        checkMatchedBlock(allFlippedBLocks[0], allFlippedBLocks[1]);
        stopclicking()
    }


}


function stopclicking() {
    container.classList.add('no-clicking');
    setTimeout(() => {
        container.classList.remove('no-clicking');
    }, duration);
}


function checkMatchedBlock(firistB, secondB) {
    let firstID_ = firistB.getAttribute('data-id');
    let secondID_ = secondB.getAttribute('data-id');
    console.log(firstID_)
    console.log(secondID_)
    if (firstID_ == secondID_) {
        firistB.classList.remove('is-flipped');
        secondB.classList.remove('is-flipped');
        // firistB.classList.remove('has-match');
        // secondB.classList.remove('has-match');
        firistB.classList.add('has-match');
        secondB.classList.add('has-match');
        // if (firstID_ === secondID_) {
        // } else {
        //     setTimeout(() => {
        //         firistB.classList.remove('is-flipped');
        //         secondB.classList.remove('is-flipped');
        //     }, duration);
        // }
    }

    else {
        setTimeout(() => {
            firistB.classList.remove('is-flipped');
            secondB.classList.remove('is-flipped');
        }, duration);


    }

}







function resetGame() {
    my_blocks.forEach(block => {
        block.classList.remove('is-flipped', 'has-match');
    });
    shuffle(orderRange);
    my_blocks.forEach((block, index) => {
        block.style.order = orderRange[index];
    });
}










