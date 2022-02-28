const upperCaseButton = document.querySelector('#upper-case')
const lowerCaseButton = document.querySelector('#lower-case')
const properCaseButton = document.querySelector('#proper-case')
const sentenceCaseButton = document.querySelector('#sentence-case')
const saveFileButton = document.querySelector('#save-text-file')
const textAreaInput = document.querySelector('textarea')
let text = ''


upperCaseButton.addEventListener('click', (e) => {
    text = textAreaInput.value
    text = text.toUpperCase()
    displayText(text)
})
lowerCaseButton.addEventListener('click', (e) => {
    text = textAreaInput.value
    text = text.toLowerCase()
    displayText(text)
})
properCaseButton.addEventListener('click', (e) => {
    text = textAreaInput.value
    const arr = text.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    text = arr.join(' ')
    displayText(text)
})
sentenceCaseButton.addEventListener('click', (e) => {
    text = textAreaInput.value.trim().toLowerCase()
    const arr = text.split('. ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    text = arr.join('. ')
    displayText(text)


})

saveFileButton.addEventListener('click', (e) => {
        download("text.txt", textAreaInput.value);
    }
)

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function displayText(text) {
    textAreaInput.value = text
}

