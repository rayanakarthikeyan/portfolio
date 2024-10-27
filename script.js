const text = ["Karthikeyan", "An Aspiring MAANG Engineer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); // Adds a pause before switching to the next text
    } else {
        setTimeout(type, 150);
    }
})();
