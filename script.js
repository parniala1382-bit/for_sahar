let count = 0;

const total = 1000000;
const batchSize = 60;
const box = document.getElementById("loves");

function start() {
    if (count > 0) return;

    addLoves();
}

function addLoves() {
    const fragment = document.createDocumentFragment();

    for (
        let i = 0;
        i < batchSize && count < total;
        i++
    ) {
        const item = document.createElement("div");

        item.className = "love";
        item.textContent = "I love you ❤️";

        fragment.appendChild(item);
        count++;
    }

    box.replaceChildren(fragment);

    document.getElementById("counter").textContent =
        count.toLocaleString() + " / 1,000,000 ❤️";

    if (count < total) {
        setTimeout(addLoves, 30);
    }
}