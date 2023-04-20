const showMessageBtn = document.getElementById('showMessageBtn');
const messageBox = document.getElementById('messageBox');

showMessageBtn.addEventListener('click', () => {
    messageBox.classList.add('show');

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 5000)
});
