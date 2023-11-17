
const form = document.getElementById('coreInputMask')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = document.getElementById('coreInputTask').value
    const begin = document.getElementById('coreInputBegin').value
    const end = document.getElementById('coreInputEnd').value
    console.log(task)
    console.log(begin)
    console.log(end)
})