let message = document.getElementById('message');
let clearButton = document.getElementById('clear');
let saveButton = document.getElementById('save');
let savedMessage = document.getElementById('saved-message');
let stickers = document.querySelectorAll('.sticker');

clearButton.addEventListener('click', () => {
    message.value = '';
});

saveButton.addEventListener('click', () => {
    savedMessage.innerText = message.value;
    message.value = '';
});

stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
        message.value += ` ${sticker.getAttribute('data-sticker')} `;
    });
});
